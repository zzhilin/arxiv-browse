import os.path
import subprocess
import sys
import typing
import lmdb

from google.cloud import storage
import sqlite3


def get_mtime(blob):
    return blob.metadata.get('goog-reserved-file-mtime', '') if isinstance(blob.metadata, dict) else ''

class BlobDb(object):
    def __init__(self):
        self.db = sqlite3.connect("arxiv_blobs.sl3")
        self.db.execute("create table if not exists blobs (name varchar primary key, size number not null, mtime datetime, md5_hash char(32) not null, updated datetime)")
        self.db.execute("create index if not exists idx_blobs_md5_hash on blobs(md5_hash)")
        self._add_entry_cursor = None
        pass

    @property
    def add_entry_cursor(self) :
        if self._add_entry_cursor is None:
            self._add_entry_cursor = self.db.cursor()
        return self._add_entry_cursor

    def add_entries(self, blobs: typing.List[STORAGE.Blob]):
        self.db.execute("begin")
        entries = [(blob.name, blob.size, get_mtime(blob), blob.md5_hash, blob.updated) for blob in blobs]
        self.add_entry_cursor.executemany("insert or replace into blobs (name, size, mtime, md5_hash, updated) values (?, ?, ?, ?, ?)", entries)
        self.db.execute("commit")
        pass
    pass


class BlobMap(object):
    def __init__(self):
        self.gcp_env = lmdb.open('./gcp/arxiv_blobs.lmdb', max_dbs=2, map_size=32*1024*1024*1024)
        self.blobs_db = self.gcp_env.open_db("blobs".encode('utf-8'))
        pass

    def add_entries(self, blobs: typing.List[STORAGE.Blob]):
        with self.gcp_env.begin(write=True, db=self.blobs_db) as gcp:
            for blob in blobs:
                def get_mtime(blob):
                    return blob.metadata.get('goog-reserved-file-mtime', '') if isinstance(blob.metadata, dict) else ''
                value = "%s,%s,%s,%s" % (str(blob.size), get_mtime(blob), str(blob.md5_hash), str(blob.updated))
                gcp.put(blob.name.encode('utf-8'), value.encode('utf-8'))
                pass
            pass
        pass
    pass


def list_blobs_with_prefix(bucket_name, prefix):
    """Lists all the blobs in the bucket that begin with the prefix."""
    storage_client: STORAGE.Client = STORAGE.Client.from_service_account_json(os.path.expanduser("~/.arxiv/arxiv-production-cred.json"))
    db = BlobDb()
    blobmap = BlobMap()

    blob_iter = storage_client.list_blobs(bucket_name, prefix=prefix, page_size=5000)
    total = 0
    count = 0
    for page in blob_iter.pages:
        blobs = [blob for blob in page]
        db.add_entries(blobs)
        blobmap.add_entries(blobs)
        total += len(blobs)
        count += 1
        if (count % 10) == 0:
            print(f"{prefix}: {total}")
            pass
        pass
    pass


if __name__ == "__main__":
    if len(sys.argv) == 1:
        for folder in ["ftp", "orig", "txt"]:
            subprocess.Popen(["python3", sys.argv[0], folder])
            pass
        pass
    else:
        list_blobs_with_prefix("arxiv-production-data", sys.argv[1])
        pass
    pass


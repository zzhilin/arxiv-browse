import sys

import lmdb
import sqlite3

def not_in_gcp(cornell: sqlite3.Connection , table, prefix, gcp: lmdb.Transaction):

    cursor = cornell.cursor()
    sql = "select filepath, size from {}".format(table)
    cursor.execute(sql)

    #
    needle = "arxiv/papers/2308/2308.10904.gz"

    count = 0
    for row in cursor:
        name = row[0]
        if name == needle:
            print("yahaha! you found me!")

        file_size = row[1]
        canon = prefix + name
        it = gcp.get(canon.encode('utf-8'))
        if not it:
            print(canon)
            pass
        count += 1
        pass
    print(f"{table}: count = {count}")
    pass


if __name__ == "__main__":
    gcp_env = lmdb.open('./gcp/arxiv_blobs.lmdb', max_dbs=2)
    blobs_db = gcp_env.open_db("blobs".encode('utf-8'))
    with gcp_env.begin(write=False, db=blobs_db) as gcp:

        #  {"db": "cornell/cache_pscache.db", "table": "doc__cache_ps_cache", "prefix": "ps_cache/"},

        for entry in [
            {"db": "cornell/data_ftp.db", "table": "doc__data_ftp", "prefix": "ftp/"},
            {"db": "cornell/data_orig.db", "table": "doc__data_orig", "prefix": "orig/"}]:
            cornell = sqlite3.connect(entry["db"])
            print(entry["table"])
            not_in_gcp(cornell, entry["table"], entry["prefix"], gcp)

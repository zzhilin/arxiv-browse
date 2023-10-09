package main

import (
	"database/sql"
	"fmt"
	"github.com/bmatsuo/lmdb-go/lmdb"
	_ "github.com/mattn/go-sqlite3"
	"log"
	"os"
)

func ensureDir(dirName string) error {
	if _, err := os.Stat(dirName); os.IsNotExist(err) {
		return os.MkdirAll(dirName, 0755)
	}
	return nil
}

func main() {
	// Open the SQLite database
	db, err := sql.Open("sqlite3", "./gcp/arxiv_blobs.sl3")
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

	rows, err := db.Query("SELECT name, size, mtime, md5_hash, updated FROM blobs")
	if err != nil {
		log.Fatal(err)
	}
	defer rows.Close()

	env, err := lmdb.NewEnv()
	if err != nil {
		log.Fatal(err)
	}
	defer env.Close()

	err = env.SetMaxDBs(1)
	if err != nil {
		log.Fatal(err)
	}
	err = env.SetMapSize(1 << 35)
	if err != nil {
		log.Fatal(err)
	}

	blobs_lmdb_path := "gcp/arxiv_blobs.lmdb"
	if err := ensureDir(blobs_lmdb_path); err != nil {
		log.Fatal(err)
	}

	err = env.Open(blobs_lmdb_path, 0, 0644)
	if err != nil {
		log.Fatal(err)
	}

	var blobs_dbi lmdb.DBI
	err = env.Update(func(txn *lmdb.Txn) error {
		blobs_dbi, err = txn.OpenDBI("blobs", lmdb.Create)
		if err != nil {
			return err
		}

		for rows.Next() {
			var name, md5_hash string
			var size int
			var mtime, updated sql.NullTime
			err = rows.Scan(&name, &size, &mtime, &md5_hash, &updated)
			if err != nil {
				return err
			}

			val := fmt.Sprintf("%s,%s,%s,%s", size, mtime, md5_hash, updated)
			err = txn.Put(blobs_dbi, []byte(name), []byte(val), 0)
			if err != nil {
				return err
			}
		}
		return nil
	})
	if err != nil {
		log.Fatal(err)
	}
}

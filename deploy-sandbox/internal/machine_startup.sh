mkdir -p /mnt/disks/orig_data
mkdir -p /mnt/disks/ftp_data
mkdir -p /mnt/disks/ps_cache2
mount -o ro 10.36.128.122:/arxiv_orig_data /mnt/disks/orig_data
mount -o ro 10.131.37.122:/arxiv_ftp_data /mnt/disks/ftp_data
mount -o ro 10.24.117.242:/arxiv_ps_cache2 /mnt/disks/ps_cache2
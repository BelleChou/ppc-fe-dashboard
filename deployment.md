This documentation describe how to deploy this project into WWT environment

# install dependencies

run command in project root dir:

```bash
npm i
# build source code
```


run command in project root dir:

```bash
npm run build
```

You will get a `dist` dir with compiled code inside.

# connect WWT VPN

open AnyConnect, connect WWT VPN

# upload code to backup server

zip your files:

```bash
zip -r ppc-backup-fe.zip ppc-backup-dashboard-fe/
```

local to jump host

```bash
scp ppc-backup-fe.zip root@10.253.213.195:/root
```
jump host to linux server

```bash
scp ppc-backup-fe.zip root@10.234.28.111:/root
```

# login backup server 

1. login jump host: `ssh root@10.253.213.195`
2. login backup server: `ssh root@10.234.28.111`

# install nignx 
# edit nignx config file

```bash
 vim /usr/local/nginx/conf/nginx.conf
```
```bash
server {
        listen       8099;
        server_name  localhost; 

        location / {
            root   ***your dist path***; 
            index  index.html index.htm;
        }
```


# install supervisor
As the root user, run the following command to install the Supervisor package:
```bash
apt-get install supervisor
```
# config your server in supervisor
The program configuration files for Supervisor programs are found in the /etc/supervisor
```bash
cd /etc/supervisor 
```
create a config file
```bash
vi ppc.conf
```
input the following lines and save
```bash
[program:ppc-backup-fe]
directory=***/ppc-backup-fe
command=npm run dev
autostart=true
autorestart=true
```
update supervisor configuration
```bash
supervisorctl reread
```

tell it to enact any changes with
```bash
supervisorctl update
```


# start server
enter the interactive mode, start supervisorctl with no arguments
```bash
supervisorctl
```
```bash
supervisor> start ppc-backup-fe
```



# visit page in your local 
config ssh tunnel proxy

 ```bash
 ssh -N -D 127.0.0.1:8088 root@10.253.213.195
 ```

use Chrome plugin--SwitchyOmega to config ssh tunnel proxy

![proxy](/sceenshots/sshproxy.png)

visit：http://10.234.28.111:(your server port)/


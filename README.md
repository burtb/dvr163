# dvr163
Open-source web interface for Eseenet/dvr163 NVR 
http://help.dvr163.com/index.php

### Build and run
```
sudo docker build -t dvr163 .
sudo ./docker-run.ps1
```

### Enable autostart on boot
```
sudo ./install-autostart.sh
```

### Web root location
```
/config/www
```

### Logs
```
sudo docker logs -f dvr163
```


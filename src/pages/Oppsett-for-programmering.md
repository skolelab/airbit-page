



## Tekst editor

Pycom, produsenten av mikrokontrollerne har valgt å lage tilleggspakker til allerede eksisterende tekst editorere.
VSCode og Atom kan bli brukt.


https://alepycom.gitbooks.io/pycom-documentation/content/chapter/pymakr/installation/vscode.html
og
https://alepycom.gitbooks.io/pycom-documentation/content/chapter/pymakr/installation/atom.html for atom


obs:

For å koble på med usb må du koble rett som anvist:
### USB Serial
koblet opp en usb serial på breadboardet slik:
![alt text](./images/fipyserial.jpeg "Logo Title")

Hvordan jeg koblet den opp:
```bash
$ ls /dev/tty*
crw-rw-rw-  1 root  wheel    2,   0 Jun 30 12:15 /dev/tty
crw-rw-rw-  1 root  wheel    9,   0 Jun 29 11:04 /dev/tty.Bluetooth-Incoming-Port
crw-rw-rw-  1 root  wheel    9,   2 Jun 30 12:19 /dev/tty.usbserial-14120
# tty.usbserial-14120 er den vi vil ha
# kjapp test med screen:
screen /dev/tty.usbserial* 115200

#tilkoblet REPL
```
Neste steg var å få koblet til med pymakr:
Fant ikke usb serial når jeg var koblet til, jeg måtte først sette:
```json
	"address": "/dev/tty.usbserial-14120",
```
og 
```json
	"auto_connect":false, 
```

i global settings på pymakr (vscode)





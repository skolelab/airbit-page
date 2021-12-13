




Test mot UiT sin side.
```python
from network import LTE

import time
import socket

lte = LTE()

lte.attach(band=20, apn="telenor.iot")

print("attaching..", end='')

while not lte.isattached():
		# Først vent til modem er kobla fysisk sammen med fipy
    time.sleep(0.25)

    print('.', end='')
    print(lte.send_at_cmd('AT!="fsm"'))         # get the System FSM
print("attached!")

lte.connect()
print("connecting [##", end='')
while not lte.isconnected():
		#Deretter vent til modem er kobla til basestasjonene
    time.sleep(0.25)
    print('#', end='')
    print(lte.send_at_cmd('AT!="fsm"'))
print("] connected!")

print(socket.getaddrinfo('uit.no', 80))
# gjør en ping til uit.no
lte.deinit()
# Should return [(2, 1, 0, '', ('129.242.126.10', 80))]
```


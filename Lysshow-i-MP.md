Når vi har gjort hello world guiden, skal vi prøve å bruke RGB lyset på kontrolleren.

# Variabler

Vi kan definere variabler som tar vare på en verdi, samt vi kan gjøre matematiske operasjoner på variablene.

```python
variable = 13

variable = variable + 3 - 2
```

Her lagrer vi verdien 13 i variabelen med navn variable. Deretter plusser vi variabelen med 3 for så å minuse på to, variabelen med navn variable vil nå ha verdien (13+3-2=11).

For å starte med lysshowet våres, kan vi lagre tre fargeverdier i variabler og så vise de fram.

```python
red = 0xff0000
green = 0x00ff00
blue = 0x0000ff
```

Vi må nå importere modulen "pycom" og funksjonen "sleep", en uskreven regel i python-programmering er at all importering skjer øverst i filen.

```python
import pycom
from time import sleep

red = 0xff0000
green = 0x00ff00
blue = 0x0000ff
led_off = 0x000000
```

Hvis du har tilkoblet kontrolleren din nå, så bør den blinke blått, dette kalles heartbeaten til kontrolleren og viser oss at den er i live og kjører ett standard program som blinker ledlyset blått. Denne heartbeaten må programmeres vekk før vi får lov å endre på lyset.

```python
import pycom
from time import sleep

red = 0xff0000
green = 0x00ff00
blue = 0x0000ff
led_off = 0x000000

pycom.heartbeat(False)
```

Nå er vi klar for å sette vår egen farge på lyset. Vi ønsker å sette lyset på, vente littfor så å skru det av.

```python
import pycom
from time import sleep


red = 0xff0000
green = 0x00ff00
blue = 0x0000ff
led_off = 0x000000

pycom.heartbeat(False)

pycom.rgbled(red)
sleep(1)
pycom.rgbled(led_off)
sleep(1)
pycom.rgbled(green)
sleep(1)
pycom.rgbled(led_off)
sleep(1)
pycom.rgbled(blue)
sleep(1)
pycom.rgbled(led_off)
```

Lyset kan være ganske skarpt, så vi ønsker å redusere intensiteten på lyset. Dette gjør vi med å endre verdien på red, green og blue variabelene. Vi vil også legge til en løkke. Løkken gjør slik at vi kan repetere en spesifisert del av koden.

```python
from time import sleep
import pycom

red = 0x1f0000
green = 0x001f00
blue = 0x00001f
led_off = 0x000000

pycom.heartbeat(False)

while True:
    pycom.rgbled(red)
    sleep(1)
    pycom.rgbled(led_off)
    sleep(1)
    pycom.rgbled(green)
    sleep(1)
    pycom.rgbled(led_off)
    sleep(1)
    pycom.rgbled(blue)
    sleep(1)
    pycom.rgbled(led_off)
```

Når vi skrive "while True:" så sier vi til kontrolleren at han skal gjenta dette for alltid.

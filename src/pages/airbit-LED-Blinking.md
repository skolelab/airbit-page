Det enkleste ut å starte med er LED-lyset. På kontrolleren ser du en liten hvit firkant med en sirkel inni, dette er en LED som vi kan programmere slik vi vil.

Det første vi må gjøre er å importere pycom biblioteket.
```python
import pycom
import time
```
Dette vil importere biblioteket pycom som har ett sett med forskjellige funksjoner for vår pycom kontroller, som LED-lyset vi skal bruke.
*time* biblioteket har funksjoner som gjør at vi får `sleep` funksjonen som lar oss vente i programmet vårt.

Vi har lyst å teste ut litt farger på LED-en vår, vi vil veksle mellom rød, grønn og blå. Først går vi gjennom dette stegvis.

1. Skru på rød LED
1. Vent i ett sekund
1. Skru på grønn LED
1. Vent i ett sekund
1. Skru på blå LED
1. Vent i ett sekund

Vi dmå definere hvilke farger vi skal bruke. Vi setter opp tre variabler for fargene vi skal bruke:

```python
RED = 0xFF0000
GREEN = 0x00FF00
BLUE = 0x0000FF
```
Vi bruker fargekoder i heksadesimaler.

Første vi må gjøre er å skru av kontrollerens "heartbeart". heartbeaten sier til oss at kontrolleren er skrudd på og i live.
```python
pycom.heartbeat(False)
```

For at vi nå skal endre farge kan vi bruke funksjonen `pycom.rgbled`.

```python
pycom.rgbled(0xFFFFFF) # Hvit LED
```

Forsøk å gå gjennom stegene vi skrev på norsk i opplistingen over, og skriv ned kommandoene i rett rekkefølge. 
Du kan gjerne leke litt her og se hva som skjer om du endrer rekkefølge eller vente-tiden. 
Du kan også forsøke å endre fargene ved å endre på tallene vi satt som RED, GREEN og BLUE.


## Ferdig
Mye rart man kan gjøre med blinking og mange rare rytmer man kan få til her om man bare er litt kreativ, men hvis vi tar utgangspunkt i den helt kjedelige blinkingen i ett sekund mellomrom, vi du få kode som ligner på dette:


```python
import pycom
import time

pycom.heartbeat(False)

RED = 0xFF0000
GREEN = 0x00FF00
BLUE = 0x0000FF
while 1:
        pycom.rgbled(RED)
        time.sleep(1)
        pycom.rgbled(GREEN)
        time.sleep(1)
        pycom.rgbled(BLUE)
        time.sleep(1)
```





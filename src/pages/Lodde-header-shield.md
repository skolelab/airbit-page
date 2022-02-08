


#I stedet for å få ett virvarr av ledninger, vil vi gjøre livet enklere ved å bruke et header shield mellom Arduino'en og de forskjellige komponentene.

Vi skal lodde header shieldet oppå Arduino'en. Så kan vi lodde sensorene til de forskjellige områdene på shieldet. Inni plastplaten som utgjør shieldet finnes det en rekke koblinger som vil koble sensorene til de rette pinnene på Arduino'en.

## Dette trenger du

Du trenger:

* Pycom mikrokontroller	
* Pycom Expansion Board
* Header shieldet
* Avbitertang

## Sette pinner i  Pycom Expansion Board

Med Arduino'en følger det en (eller to) lang rad med *male* header pinner. Det lange endestykke til pinnene skal inn pluggene til Arduinoen. Bruk en avbitertang for å klippe av passende lengde med pinner for hver seksjon med plugger på Arduinoen, slik som vist i bildet under.

<!-- ![Avbitertang kutter header-pinner som plugges i kontroller][header-pins-cut-arduino] -->

Plugg i male header-pinner for begge radene på expansion boardet. Pass på at du fyller alle pluggene.

Til slutt vil det se slik ut.


## Lodde fast pinnene 

Varm opp din loddebolt til omtrent 370&deg;C. Avhengig av hvilken type loddebolt og loddetinn du bruker kan den anbefalte temperaturen variere. Gjerne dobbeltskjekk hvilken temperatur du burde bruke.

Lodding kan føre til dannelse av gasser som kan være heleskadelige i store mengder! Bruk alltids en avtrekksvifte der du lodder, slik at du ikke puster inn utslippet av loddingen. Før du begynner bør du også forsikre deg at avtrekket er skrudd på.

Ta opp den varme loddebolten og før den fra siden mot pinnen som stikker opp av hullet. Tuppen av bolten skal varme opp pinnen og metallet på shieldet rundt hulle som pinnen stikker ut på.  
Før så til loddetinn fra den andre siden. Når tinnet kommer i kontakt med den varme bolten, pinnen og metallringen på shieldet, vil det smelte og legge seg rundt pinnen.


Vri tinnet og bolten rundt pinnen, slik at tinnet legger seg jevnt runt pinnen fra alle sider og dekker hullet den stikker opp fra. Etterpå vil du ende med en liten haug der hullet var før med resten av pinnen stikkende ut på toppen.
Når alle pinnene er loddet fast, slik som vist i bildet over, burde du kunne løfte av header shieldet fra Arduinoen igjen med alle header pinnene hengende fast i shieldet. Gratulerer! Du har nå et header shield som du enkelt kan plugge på hvilken som helst Arduino Uno.

## Ferdig

Du skal nå har et helt funksjonellt shield klart for bruk. Nå er vi kommet godt i gang med loddingen, så neste steg er å lodde på sensorene.


[home]: Guide-Bygging-og-Lodding
[sensors]: Lodde-sensorene

[header-pins-cut-arduino]: 20171019_113609.jpg

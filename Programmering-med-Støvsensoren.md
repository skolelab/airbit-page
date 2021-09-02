



### Nova PM Sensor
```python
import sds011, time
from machine import UART
uart = UART(1,9600,pins=("P3","P4"))
ds = sds011.SDS011(uart)

while ds.read():
    print(ds.pm25,ds.pm10)
    time.sleep(2)
```

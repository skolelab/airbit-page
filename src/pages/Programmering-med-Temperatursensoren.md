DHT11

```python
# Initialise DTH sensor on Pin 8
th = DHT('P8', 0)

result = th.read()
if result.is_valid():

  # print temperature and humidity
  print(result.temperature, result.humidity)
  
```


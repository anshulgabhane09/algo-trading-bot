import time
from kiteconnect import KiteConnect
from kite_trade import *
import datetime

# Initialize KiteApp and get the historical data
enctoken = "i/Kc+ulGY3lcJpY0unVwEcbPa3WK+xvaoOssBu1+bIuXjT7OR71/Tl4VJPqg8NKx1SLkQv/0wqexAdTsyCgsPqdM4kFvE6bAIppVzbm/7TiT+qtTXB48HQ=="
kite = KiteApp(enctoken=enctoken)

# Get Historical Data
import datetime
instrument_token = 9604354
from_datetime = datetime.datetime.now() - datetime.timedelta(days=7)     # From last & days
to_datetime = datetime.datetime.now()
interval = "5minute"
print("\n\n")
print(kite.historical_data(instrument_token, from_datetime, to_datetime, interval, continuous=False, oi=False))
print("\n\n")


# E:\Web Dev2\algo-trading-bot\src\django\api


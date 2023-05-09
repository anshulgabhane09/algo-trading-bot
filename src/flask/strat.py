import time
from kiteconnect import KiteConnect
from kite_trade import *
import datetime

# Initialize KiteApp and get the historical data
enctoken = "4TyzqbUWH66CAygwdh06C9QirUzc9GyKKI8AaV5KIPrUPgDNV1990pK8voTxRbS7jORATV6rXkIO2NNfi4aIoPITvRb/Isc6y3iUA8HwI0rgM5bhyOBaow=="
kite = KiteApp(enctoken=enctoken)

# Get Historical Data
import datetime
instrument_token = 9604354
from_datetime = datetime.datetime.now() - datetime.timedelta(days=30)     # From last & days
to_datetime = datetime.datetime.now()
interval = "5minute"
print("\n\n")
print(kite.historical_data(instrument_token, from_datetime, to_datetime, interval, continuous=False, oi=False))
print("\n\n")





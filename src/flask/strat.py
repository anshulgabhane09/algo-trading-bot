import time
from kite_trade import *

enctoken = "mvZssIKzhD99wBZt+u0x7jmpWY1BJhBYbLSEOoTj4Xsqnk4/roZRwDT3bTu3nbfBDeYP+1YMuGhZ+lnEWvSUxIYIZjXfUQXFA+FoG/Zl9fjCjJqjnZuWqQ=="
kite = KiteApp(enctoken=enctoken)

while(True):
     print(kite.ltp("NSE:RELIANCE"))
     print(kite.ltp(["NSE:NIFTY 50", "NSE:NIFTY BANK"]))
     print("\n\n")
     time.sleep(2);

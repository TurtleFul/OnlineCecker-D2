

import requests
import json

from vars import my_api_key

#dictionary to hold extra headers
HEADERS = {"X-API-Key":my_api_key}
                        

#make request for uptime status
r = requests.get("https://www.bungie.net/Platform/GlobalAlerts/", headers=HEADERS)

#convert the json object we received into a Python dictionary object
#and print the name of the item
response = r.json()


#print(response['Message'])
print(HEADERS)

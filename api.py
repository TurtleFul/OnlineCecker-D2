

import requests
import json
#dictionary to hold extra headers
HEADERS = {"X-API-Key":'57b427094a2e458abbd83c56d67bfa27'}

#make request for uptime status
r = requests.get("https://www.bungie.net/Platform/GlobalAlerts/", headers=HEADERS)

#convert the json object we received into a Python dictionary object
#and print the name of the item
response = r.json()


#print(response['Message'])
print(response)

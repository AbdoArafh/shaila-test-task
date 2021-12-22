import os
import re
import json

path = "../css"

list_dir = os.listdir(path)

list_dir = [path + "/" + x for x in list_dir if re.match(r"[a-z|A-z|\-|_]+\.css$", x)]

to_min = "../dist/style.css"

minifpy_settings = {"css": {"merge_files": [{"from": list_dir,"to": path + '/style.css', "to_min": to_min}]}}

file = open("minifpy_settings.json", "w")

json.dump(minifpy_settings, file, indent=4)

print("Settings file made succuessfully")
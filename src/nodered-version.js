[
    {
        "id": "496064d0.eb1004",
        "type": "tab",
        "label": "Energy Use Monitoring",
        "disabled": false,
        "info": ""
    },
    {
        "id": "611545b7.637dec",
        "type": "http in",
        "z": "496064d0.eb1004",
        "name": "Eagle-Legacy Push Endpoint",
        "url": "/eagle",
        "method": "post",
        "upload": false,
        "swaggerDoc": "",
        "x": 140,
        "y": 40,
        "wires": [
            [
                "a46aa577.164b2",
                "901373e.76f1d1",
                "ef8d1f46.cd4e88"
            ]
        ]
    },
    {
        "id": "ef8d1f46.cd4e88",
        "type": "debug",
        "z": "496064d0.eb1004",
        "name": "",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 130,
        "y": 320,
        "wires": []
    },
    {
        "id": "a46aa577.164b2",
        "type": "http response",
        "z": "496064d0.eb1004",
        "name": "OK",
        "statusCode": "200",
        "headers": {},
        "x": 390,
        "y": 40,
        "wires": []
    },
    {
        "id": "901373e.76f1d1",
        "type": "xml",
        "z": "496064d0.eb1004",
        "name": "convert to json",
        "property": "payload",
        "attr": "",
        "chr": "",
        "x": 140,
        "y": 120,
        "wires": [
            [
                "cee8b355.812e68"
            ]
        ]
    },
    {
        "id": "cf7ccb.60fe8338",
        "type": "switch",
        "z": "496064d0.eb1004",
        "name": "What kind?",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "hask",
                "v": "InstantaneousDemand",
                "vt": "str"
            },
            {
                "t": "hask",
                "v": "DeviceInfo",
                "vt": "str"
            },
            {
                "t": "hask",
                "v": "NetworkInfo",
                "vt": "str"
            },
            {
                "t": "hask",
                "v": "PriceCluster",
                "vt": "str"
            },
            {
                "t": "hask",
                "v": "MessageCluster",
                "vt": "str"
            },
            {
                "t": "hask",
                "v": "CurrentSummationDelivered",
                "vt": "str"
            },
            {
                "t": "hask",
                "v": "TimeCluster",
                "vt": "str"
            },
            {
                "t": "hask",
                "v": "ScheduleInfo",
                "vt": "str"
            },
            {
                "t": "hask",
                "v": "BlockPriceDetail",
                "vt": "str"
            },
            {
                "t": "else"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 10,
        "x": 370,
        "y": 240,
        "wires": [
            [
                "6ca1bc0c.ed8d94"
            ],
            [
                "7eb7b60c.485d38"
            ],
            [
                "2e4d4b77.ee7314"
            ],
            [
                "c2ecde84.5bcd88"
            ],
            [
                "5a6cbe71.fc92e"
            ],
            [
                "2c9464cb.098d24"
            ],
            [
                "6f30ce00.2b367c"
            ],
            [
                "e5086cba.2d4fd8"
            ],
            [
                "af4f85cc.4ab1a8"
            ],
            [
                "4fdc94ac.7f5c24"
            ]
        ]
    },
    {
        "id": "cf9ae185.003f6",
        "type": "debug",
        "z": "496064d0.eb1004",
        "name": "Demand",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "",
        "statusType": "auto",
        "x": 920,
        "y": 240,
        "wires": []
    },
    {
        "id": "7eb7b60c.485d38",
        "type": "debug",
        "z": "496064d0.eb1004",
        "name": "DeviceInfo",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "",
        "statusType": "auto",
        "x": 670,
        "y": 220,
        "wires": []
    },
    {
        "id": "2e4d4b77.ee7314",
        "type": "debug",
        "z": "496064d0.eb1004",
        "name": "NetworkInfo",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "",
        "statusType": "auto",
        "x": 690,
        "y": 260,
        "wires": []
    },
    {
        "id": "c2ecde84.5bcd88",
        "type": "debug",
        "z": "496064d0.eb1004",
        "name": "PriceCluster",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "",
        "statusType": "auto",
        "x": 670,
        "y": 300,
        "wires": []
    },
    {
        "id": "47232456.e6225c",
        "type": "debug",
        "z": "496064d0.eb1004",
        "name": "Else",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "",
        "statusType": "auto",
        "x": 710,
        "y": 540,
        "wires": []
    },
    {
        "id": "5a6cbe71.fc92e",
        "type": "debug",
        "z": "496064d0.eb1004",
        "name": "MessageCluster",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "",
        "statusType": "auto",
        "x": 660,
        "y": 340,
        "wires": []
    },
    {
        "id": "6cca6a71.8880dc",
        "type": "debug",
        "z": "496064d0.eb1004",
        "name": "CurrentSummationDelivered",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "",
        "statusType": "auto",
        "x": 920,
        "y": 440,
        "wires": []
    },
    {
        "id": "6f30ce00.2b367c",
        "type": "debug",
        "z": "496064d0.eb1004",
        "name": "TimeCluster",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "",
        "statusType": "auto",
        "x": 610,
        "y": 420,
        "wires": []
    },
    {
        "id": "e5086cba.2d4fd8",
        "type": "debug",
        "z": "496064d0.eb1004",
        "name": "ScheduleInfo",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "",
        "statusType": "auto",
        "x": 590,
        "y": 460,
        "wires": []
    },
    {
        "id": "af4f85cc.4ab1a8",
        "type": "debug",
        "z": "496064d0.eb1004",
        "name": "BlockPriceDetail",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "",
        "statusType": "auto",
        "x": 580,
        "y": 500,
        "wires": []
    },
    {
        "id": "cee8b355.812e68",
        "type": "function",
        "z": "496064d0.eb1004",
        "name": "Extract Messages",
        "func": "const rainforest = msg.payload.rainforest;\nlet messages = [];\n\nfor (const key in rainforest) {\n    if (Array.isArray(rainforest[key])) {\n        for (const body of rainforest[key]) {\n            message = {};\n            message[key] = body;\n            messages.push(message);\n        }\n    }\n}\n\nreturn {\n    \"payload\": messages\n};",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 150,
        "y": 180,
        "wires": [
            [
                "72c632d0.df70dc"
            ]
        ]
    },
    {
        "id": "72c632d0.df70dc",
        "type": "split",
        "z": "496064d0.eb1004",
        "name": "Split out messages",
        "splt": "\\n",
        "spltType": "str",
        "arraySplt": 1,
        "arraySpltType": "len",
        "stream": false,
        "addname": "",
        "x": 150,
        "y": 240,
        "wires": [
            [
                "ef8d1f46.cd4e88",
                "cf7ccb.60fe8338"
            ]
        ]
    },
    {
        "id": "6ca1bc0c.ed8d94",
        "type": "function",
        "z": "496064d0.eb1004",
        "name": "Calculate Demand",
        "func": "const data = msg.payload.InstantaneousDemand;\n\nreturn {\n    \"payload\": {\n        \"timestamp\": parseInt(data.TimeStamp),\n        \"state\": data.Demand * data.Multiplier / data.Divisor,\n        \"device_mac_id\": data.DeviceMacId[0],\n        \"meter_mac_id\": data.MeterMacId[0],\n    }\n};",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 680,
        "y": 180,
        "wires": [
            [
                "cf9ae185.003f6",
                "9bfd2989.36327"
            ]
        ]
    },
    {
        "id": "2c9464cb.098d24",
        "type": "function",
        "z": "496064d0.eb1004",
        "name": "Calculate Delivered",
        "func": "const data = msg.payload.CurrentSummationDelivered;\n\nreturn {\n    \"payload\": {\n        \"timestamp\": parseInt(data.TimeStamp),\n        \"state\": data.SummationDelivered * data.Multiplier / data.Divisor,\n        \"device_mac_id\": data.DeviceMacId[0],\n        \"meter_mac_id\": data.MeterMacId[0],\n    }\n};",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 650,
        "y": 380,
        "wires": [
            [
                "6cca6a71.8880dc",
                "3ef347f0.6fa5d"
            ]
        ]
    },
    {
        "id": "3ef347f0.6fa5d",
        "type": "ha-entity",
        "z": "496064d0.eb1004",
        "name": "Eagle Energy Usage Total",
        "server": "845078f7f637a8cc",
        "version": 2,
        "debugenabled": false,
        "outputs": 1,
        "entityType": "sensor",
        "config": [
            {
                "property": "name",
                "value": "eagle_energy_usage_total"
            },
            {
                "property": "device_class",
                "value": "energy"
            },
            {
                "property": "icon",
                "value": ""
            },
            {
                "property": "unit_of_measurement",
                "value": "kWh"
            },
            {
                "property": "state_class",
                "value": ""
            },
            {
                "property": "last_reset",
                "value": ""
            }
        ],
        "state": "payload.state",
        "stateType": "msg",
        "attributes": [
            {
                "property": "timestamp",
                "value": "payload.timestamp",
                "valueType": "msg"
            },
            {
                "property": "state_class",
                "value": "total",
                "valueType": "str"
            }
        ],
        "resend": true,
        "outputLocation": "",
        "outputLocationType": "none",
        "inputOverride": "allow",
        "outputOnStateChange": false,
        "outputPayload": "$entity().state ? \"on\": \"off\"",
        "outputPayloadType": "jsonata",
        "x": 910,
        "y": 380,
        "wires": [
            []
        ]
    },
    {
        "id": "9bfd2989.36327",
        "type": "ha-entity",
        "z": "496064d0.eb1004",
        "name": "Eagle Current Power Usage",
        "server": "845078f7f637a8cc",
        "version": 2,
        "debugenabled": false,
        "outputs": 1,
        "entityType": "sensor",
        "config": [
            {
                "property": "name",
                "value": "eagle_current_power_usage"
            },
            {
                "property": "device_class",
                "value": "power"
            },
            {
                "property": "icon",
                "value": ""
            },
            {
                "property": "unit_of_measurement",
                "value": "kW"
            },
            {
                "property": "state_class",
                "value": ""
            },
            {
                "property": "last_reset",
                "value": ""
            }
        ],
        "state": "payload.state",
        "stateType": "msg",
        "attributes": [
            {
                "property": "timestamp",
                "value": "payload.timestamp",
                "valueType": "msg"
            }
        ],
        "resend": true,
        "outputLocation": "",
        "outputLocationType": "none",
        "inputOverride": "allow",
        "outputOnStateChange": false,
        "outputPayload": "$entity().state ? \"on\": \"off\"",
        "outputPayloadType": "jsonata",
        "x": 980,
        "y": 180,
        "wires": [
            []
        ]
    },
]
# Rainforest Eagle to MQTT Bridge

This is a project to build a bridge between the Rainforest Eagle
power usage monitor boxes and HomeAssistant-compatible MQTT.

Currently the Home Assistant Rainforest Eagle integration relies
only on local polling, which easily overwhelms the older models
(such as the one I use). Push works just fine, however, so why
not do that?

Currently this is implemented in my local HA setup as a set of
Node-Red nodes, but I want it to be done in a more stable way.

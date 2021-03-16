#!/bin/bash
echo 1000 > /sys/class/backlight/intel_backlight/brightness
ip link set wlo1 up
wpa_supplicant -c MSI_internet.conf -i wlo1 &
dhcpcd &

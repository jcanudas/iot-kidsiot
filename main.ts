basic.showIcon(IconNames.Sad)
ESP8266_IoT.initWIFI(SerialPin.P8, SerialPin.P12, BaudRate.BaudRate115200)
ESP8266_IoT.connectWifi("iPhone de: Joan", "00000000")
while (ESP8266_IoT.wifiState(false)) {
    basic.pause(100)
}
basic.showIcon(IconNames.Heart)
basic.pause(500)
basic.forever(function () {
    ESP8266_IoT.connectKidsiot("4cf9M1X2Ne47HGjw", "1")
    basic.pause(5000)
    if (ESP8266_IoT.kidsiotState(true)) {
        ESP8266_IoT.uploadKidsiot(input.lightLevel())
        basic.pause(10000)
    }
})

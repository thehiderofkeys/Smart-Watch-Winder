

#include <Arduino.h>

#include <ESP8266WiFi.h>
#include <ESP8266WiFiMulti.h>

#include <SocketIoClient.h>

#define USE_SERIAL Serial

ESP8266WiFiMulti WiFiMulti;
SocketIoClient webSocket;

#include <SoftwareSerial.h>

//Password for AP. Define AP_NAME and KEY
#include "Password.h"

#ifndef D5
#define D5 (14)
#define D6 (12)
#define D7 (13)
#define D8 (15)
#define TX (1)
#endif

SoftwareSerial swSer;
String MAC;

void event(const char * payload, size_t length) {
  USE_SERIAL.printf("got message: %s\n", payload);
  swSer.flush();
  swSer.println(payload);
}

void onConnect(const char * payload, size_t length) {
  char macArray[20];
  ("\""+MAC+"\"").toCharArray(macArray, 20);
  webSocket.emit("mac address",macArray);
}

void setup() {
    USE_SERIAL.begin(38400);
    swSer.begin(38400, SWSERIAL_8N1, D5, D6, false, 95, 11);
    swSer.println("LOADING...");
    swSer.flush();

    USE_SERIAL.setDebugOutput(true);
    MAC = WiFi.macAddress();
    USE_SERIAL.println();
    USE_SERIAL.println();
    USE_SERIAL.println();

      for(uint8_t t = 4; t > 0; t--) {
          USE_SERIAL.printf("[SETUP] BOOT WAIT %d...\n", t);
          USE_SERIAL.flush();
          delay(1000);
      }

    WiFiMulti.addAP(AP_NAME, KEY);

    while(WiFiMulti.run() != WL_CONNECTED) {
        delay(100);
    }
    
    USE_SERIAL.printf("Connected to Access Point\n");
    
    webSocket.on("event", event);
    webSocket.on("connect", onConnect);
    webSocket.begin("192.168.1.2",10000);
}

void loop() {
    webSocket.loop();
}

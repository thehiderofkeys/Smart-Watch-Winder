/*
  Arduino Uno Code to run the liquid crystal display.
  Communicates with the ESP8266 Module using Software Serial
*/

// include the library code:
#include <LiquidCrystal.h>
#include <SoftwareSerial.h>

SoftwareSerial mySerial(8, 9); 

// initialize the library by associating any needed LCD interface pin
// with the arduino pin number it is connected to
const int rs = 12, en = 11, d4 = 5, d5 = 4, d6 = 3, d7 = 2;
LiquidCrystal lcd(rs, en, d4, d5, d6, d7);

void setup() {
  // set up the LCD's number of columns and rows:
  lcd.begin(16, 2);
  Serial.begin(38400);
  // Print a message to the LCD.
  lcd.print("SMART WINDER");
  mySerial.begin(38400);
}

void loop() {
  // set the cursor to column 0, line 1
  lcd.setCursor(0, 1);
  // print the input from software serial:
  if(mySerial.available()){
    lcd.print("                 ");
    lcd.setCursor(0, 1);
    String message = mySerial.readString();
    int lastIndex = message.indexOf('\r');
    message = message.substring(0,lastIndex);
    int firstIndex = message.indexOf('\r');
    if(firstIndex>0)
      message = message.substring(firstIndex);
    lcd.print(message);
  }
}

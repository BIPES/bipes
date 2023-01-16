var MSG = {
  title: "BIPES",
  blocks: "Bausteine",
  files: "Dateien",
  shared: "Teilen",
  device: "Gerät",
  linkTooltip: "Link zum Projekt erstellen.",
  runTooltip: "Das Programm ausführen, das von den Bausteinen im Arbeitsbereich definiert ist.",
  badCode: "Programmfehler:\n%1",
  timeout: "Die maximalen Ausführungswiederholungen wurden überschritten.",
  trashTooltip: "Alle Bausteine verwerfen.",
  catLogic: "Logik",
  catLoops: "Schleifen",
  catMath: "Mathematik",
  catText: "Text",
  catLists: "Listen",
  catColour: "Farbe",
  catVariables: "Variablen",
  catFunctions: "Funktionen",
  listVariable: "Liste",
  textVariable: "Text",
  httpRequestError: "Mit der Anfrage gab es ein Problem.",
  linkAlert: "Teile dein Projekt mit dem Link aus der Adresszeile:\n\n%1",
  hashError: "„%1“ stimmt leider mit keinem gespeicherten Programm überein.",
  xmlError: "Deine gespeicherte Datei konnte nicht geladen werden. Vielleicht wurde sie mit einer anderen Version von Blockly erstellt.",
  badXml: "Fehler beim Parsen von XML:\n%1\n\nWähle 'OK' zum Verwerfen deiner Änderungen oder 'Abbrechen' zum weiteren Bearbeiten des XML.",
  saveTooltip: "Projekt in Datei speichern.",
  loadTooltip: "Projekt aus Datei laden.",
  notificationTooltip: "Benachritigungen.",
  ErrorGET: "Datei kann nicht geladen werden.",
  invalidDevice: "Gerät ungültig.",
  languageTooltip: "Sprache wechseln / Change language / cambiar lenguage.",
  noToolbox: "Das Gerät hat keine Toolbox.",
  networkTooltip: "Über Netzwerk verbinden (WebREPL, HTTP).",
  serialTooltip: "Über USB oder Bluetooth verbinden (Web Serial API, HTTPS).",
  toolbarTooltip: "Werkzeugleiste anzeigen",
  wrongDevicePin: "Gerät wurde gewechselt, Bitte Pinzuweisung überprüfen!",
  notDefined: "not definiert",
  editAsFileValue: "Als Datei bearbeiten",
  editAsFileTooltip: "Python Code bearbeiten und auf dem Gerät speichern.",
  forumTooltip: "Hilfe im Diskussionsforum.",
  accountTooltip: "Eigene Projekte und Einstellungen.",
  blocksLoadedFromFile: "Blöcke aus Datei '%1'.",
  deviceUnavailable: "Gerät '%1' nicht verfügbar.",
  notConnected: "Es besteht keine Datenverbindung.",
  serialFroozen: "Serielle Verbindung antwortet nicht.",
  notAvailableFlag: "$1 ist not verfügbar in Ihrem Browser.\r\nBitte sicherstellen, dass das $1 Flag aktiviert ist.",

//Blocks
  block_delay: "warte",
  seconds: "Sekunden",
  milliseconds: "Millisekunden",
  microseconds: "Mikrosekunden",
  to: "zu",
  setpin: "setze Ausgang",
  pin: "Pin",
  read_digital_pin: "lese digitalen Eingang",
  read_analog_pin: "lese analogen Eingang",
  show_iot: "zeige im IoT Tab",
  data: "Wert",
  set_rtc: "setze Datum und Uhrzeit",
  get_rtc: "hole Datum und Uhrzeit",
  year: "Jahr",
  month: "Monat",
  day: "Tag",
  hour: "Stunde",
  minute: "Minute",
  second: "Sekunde",
  wifi_scan: "WLAN-Netze suchen",
  wifi_connect: "mit WLAN-Netz verbinden",
  wifi_name: "Netzwerkname",
  wifi_key: "Netzwerkschlüssel / Passwort",
  easymqtt_start: "EasyMQTT Startasdfddd",
  easymqtt_publish: "EasyMQTT veröffentliche Daten",
  easymqtt_subscribe: "EasyMQTT aboniere Topic",
  easymqtt_receive: "EasyMQTT empfange Daten",
  easymqtt_disconnect: "EasyMQTT trennen",
  topic: "Topic",
  session_id: "Session ID",
  file_open: "Datei öffnen",
  file_name: "Dateiname",
  file_mode: "Modus",
  file_binary: "in Binärmodus öffnen",
  file_close: "Datei schließen",
  file_write_line: "Zeile in Datei schreiben",
  file_line: "Zeile",
  try1: "try",
  exp1: "except",
  ntp_sync: "sync date and time with NTP",
  timezone: "Zeitzone",
  project_info: "Projektinfo",
  project_info_author: "Autor",
  project_info_desc: "Beschreibung",
  when: "wann",
  data_received: "wurde empfangen",
  relay: "Relais",
  on: "einschalten",
  off: "ausschalten",
  relay_on: "Relais am Pin",
  yes: "ja",
  no: "nein",
  wait_for_data: "warte auf Daten",
  dht_start: "starte DHT Sensor",
  dht_measure: "aktualisiere DHT11/22 Sensor Messung",
  dht_temp: "hole DHT11/22 Temperatur",
  dht_humi: "hole DHT11/22 Luftfeuchtigkeit",
  type: "Typ",

//Network
  net_http_get: "HTTP GET Request",
  net_http_get_status: "HTTP Statuscode",
  net_http_get_content: "HTTP Response Inhalt",

//Splash screen
  splash_welcome: "Willkommen bei BIPES",
  splash_footer: "Dieses Fenster nicht mehr anzeigen",
  splash_close: "Schließen",
  splash_message: "<p><b>BIPES (Block based Integrated Platform for Embedded Systems)</B> erlaubt blockbasierte Programmierung für verschiedene eingebetteter Systeme und IoT-Module mit Hilfe von MicroPython, CircuitPython, Python oder Snek. Es ist möglich sich mit verschiedenen Arten von Boards zu verbinden, sie zu programmieren, zu debuggen und sie zu überwachen, wahlweise über Netzwerk, USB oder Bluetooth. Kompatible Boards sind unter anderem STM32, ESP32, ESP8266, Raspberry Pi Pico und sogar Arduino. <a href=https://bipes.net.br/wp/boards/>Die Liste der kompatible Boards findest du hier</a>. <p><b>BIPES</b> ist vollständig <a href=https://bipes.net.br/wp/development/>Open Source</a> und basiert auf HTML und JavaScript, sodass keine Software installiert werden muss und auch offline gearbeitet werden kann! Wir hoffen BIPES ist nützlich für dich und dass du viel Spaß damit hast. Falls du Hilfe brauchst, haben wir jetzt <a href=https://github.com/BIPES/BIPES/discussions> ein Diskussionsforum</a>, wo wir auch über <a href=https://github.com/BIPES/BIPES/discussions/categories/announcements>neue Features berichten und Neuigkeiten ankündigen</a>. Du bist eingeladen es auch zu benutzen, zum Beispiel für Feedback oder Verbesserungsvorschläge! </p><p>Es ist jetzt auch möglich MicroPython direkt vom Browser aus auf deinen ESP32 oder ESP8266 zu flashen um BIPES benutzen zu können: <a href=https://bipes.net.br/flash/esp-web-tools/>https://bipes.net.br/flash/esp-web-tools/</a></p> <p>Viele Dank vom BIPES Team!</p>"

  

};

//Toolbox categories
Blockly.Msg['CAT_TIMING'] = "Zeit";
Blockly.Msg['CAT_MACHINE'] = "Gerät";
Blockly.Msg['CAT_DISPLAYS'] = "Displays";
Blockly.Msg['CAT_SENSORS'] = "Sensoren";
Blockly.Msg['CAT_OUTPUTS'] = "Ausgänge / Aktuatoren";
Blockly.Msg['CAT_COMM'] = "Kommunikation";
Blockly.Msg['CAT_FILES'] = "Dateien";
Blockly.Msg['CAT_NET'] = "Netzwerk und Internet";
Blockly.Msg['CAT_CONTROL'] = "Regelung";

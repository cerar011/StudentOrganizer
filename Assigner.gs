function myFunction() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[0];
  var deleter = sheet;
  var newSheet;
  var source;
  var range = sheet.getRange("A2:R2513");
  var rangeclearer = sheet.getRange("A2:R19");
  var zipcheck = sheet.getRange("S4");
  var gendcheck = sheet.getRange("T2");
  var ethcheck = sheet.getRange("U2");
  var zipval;
  var gendval;
  var ethval;
  var i = 125;
  
  
  do{
    range.sort(18);
    Utilities.sleep(100);
    zipval = zipcheck.getValue();
    gendval = gendcheck.getValue();
    ethval = ethcheck.getValue();
    if((zipval == 1)||(zipval > .94)){
      if((gendval<13)&&(gendval>7)){
        if((ethval<16)&&(ethval>14)){
          newSheet = ss.insertSheet();
          newSheet.setName(i);
          newSheet.deleteColumns(1, 8);
          newSheet.deleteRows(1,975);
          source = sheet.getRange("A2:R19");
          source.copyTo(newSheet.getActiveRange());
          i++;
          rangeclearer.clearContent();
        }
      }
    }
  }
  while(i<130);
}

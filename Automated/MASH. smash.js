// TeXworksScript
// Title:  smash equation
// Description: \smash{}
// Author:  Michael Donovan
// Version: 0.2
// Date: 2011-05-17
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: Alt+Shift+M,Alt+Shift+A,Alt+Shift+S,Alt+Shift+H


 var portion = TW.target.text;
 var portion = TW.target.text.substr(TW.target.selectionStart);
 
 var firstdollar = portion.search(/\$/);
 var newln = portion.search(/\n/);
 var textBlock =  TW.target.selection;
 
if (textBlock.length==0 || textBlock=="$")
{
 TW.target.selectRange(TW.target.selectionStart, 0); 
 if (firstdollar==0)
 {
     if (newln<0) {newln=portion.length}
     portion=portion.substring(1,newln);
     var seconddollar = portion.search(/\$/);
     if (seconddollar>-1){
         TW.target.insertText("\\smash{");
         TW.target.selectRange(TW.target.selectionStart+seconddollar+2, 0);
         TW.target.insertText("}");
     }
     if (seconddollar==0){
         TW.target.selectRange(TW.target.selectionStart-2, 0);
     }
 }
 if (firstdollar!=0)
 {
   TW.target.insertText("\\smash{$$}");
   TW.target.selectRange(TW.target.selectionStart-2, 0);
 }
 TW.target.insertText("");
}

if (textBlock.length>1 && textBlock[0]=='$' && textBlock[textBlock.length-1]=='$')
{
         TW.target.insertText("\\smash{"+textBlock+"}");
}
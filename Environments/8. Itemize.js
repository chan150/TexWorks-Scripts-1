// TeXworksScript
// Title:  8. Itemize
// Description: Starts an itemize
// Author:  Michael Donovan
// Version: 0.2
// Date: 2011-05-17
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: Alt+Shift+8
    
TW.target.insertText("\\begin{itemize}\\squishlist\n\\item \n\\end{itemize}\n");
TW.target.selectRange(TW.target.selectionStart-15, 0)

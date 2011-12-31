// TeXworksScript
// Title:  9. Enumerate
// Description: Starts an enumerate
// Author:  Michael Donovan
// Version: 0.2
// Date: 2011-05-17
// Script-Type: standalone
// Context: TeXDocument
// Shortcut: Alt+9
    
TW.target.insertText("\\begin{enumerate}\\squishlist\n\\item \n\\end{enumerate}\n");
TW.target.selectRange(TW.target.selectionStart-17, 0)

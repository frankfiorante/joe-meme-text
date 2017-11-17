function joeText() {
    var word = document.getElementById('joetext').value;
    var outputstring = "";
    
    for (i = 0; i < word.length; i++) {
        if (!word[i].indexOf(' ') >= 0) {
            outputstring += word[i] + " "; 
        }
        else if (/\s/.test(word)){
            outputstring += '  ';
        }
    }
    
    outputstring = outputstring.toUpperCase().trim() + ".";
    document.getElementById('translate').value = outputstring;
}
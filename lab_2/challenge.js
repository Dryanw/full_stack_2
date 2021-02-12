function speakHacker(text){
    const char_map = {
        "a": "4",
        "e": "3",
        "i": "1",
        "o": "0",
        "s": "5",
    };

    var new_text = '';
    for (var i = 0; i<text.length; i++){
        if (text[i] in char_map){
            new_text += char_map[text[i]];
        } else {
            new_text += text[i];
        }
    }
    return new_text;
}

speakHacker('Long Weekend!');
speakHacker('matrix 4 is coming out');
speakHacker('marvel movies are delayed');
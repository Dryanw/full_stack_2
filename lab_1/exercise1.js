function findOddOrEven () {
    for (var i=0; i < 11; i++){
        var t = '';
        if (i%2 == 0){
            t = 'even';
        } else {
            t = 'odd';
        }
        console.log(i + ' is ' + t);
    }
}

findOddOrEven()
function greaterThanSize(){
    var size = Math.floor(Math.random() * 100);
    var counter = 1;
    while (counter <= size){
        console.log('The current size is ' + size + ' and count is ' + counter);
        counter++;
    }
}

greaterThanSize();
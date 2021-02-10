function startClock(){
    var stop = false;
    do {
        for (var i = 0; i < 10; i++){
            console.log('Current time is: ' + new Date());
        }
        stop = window.confirm('Do you want to stop the clock?');
    } while (!stop);
}

startClock();
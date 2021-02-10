function helloWorlds(times){
    if (!Number.isInteger(times)){
        console.log("Goodbye World");
        return
    }
    for (var i = 0; i < times; i++){
        console.log("Hello World!");
    }
}

helloWorlds(5);
helloWorlds(true);
helloWorlds("hello");
helloWorlds(null);
helloWorlds(undefined);
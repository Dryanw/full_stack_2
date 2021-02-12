function emptyArray(data){
    while (data.length > 0){
        data.pop();
    }
    return data;
}

emptyArray([1, 2, 3]);
emptyArray(['egg', 'bacon', 'toast', 'coffee', 'random', 'juice']);
function findArrIndex(data, target){
    return data.indexOf(target);
}

findArrIndex(['abc', 'edabit', 'yyy', 'xxx'], 'yyy');
findArrIndex(['a', 'g', 'y', 'z'], 'z');
findArrIndex(['egg', 'bacon', 'toast', 'coffee', 'random','juice'], 'coffee');
findArrIndex(['egg', 'bacon', 'toast', 'coffee', 'random','juice'], 'mcmuffin');
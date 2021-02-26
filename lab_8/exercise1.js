const difference = (x) => {
    if (x > 13){
        return 2 * (x - 13);
    } else {
        return (13 - x);
    }
}

console.log(difference(32));
console.log(difference(11));
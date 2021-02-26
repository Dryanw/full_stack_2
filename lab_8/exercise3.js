const colors = ['red', 'green', 'blue'];
capitalizedColors = colors.map(([first, ...other]) => first.toUpperCase() + other.join(''));
console.log(capitalizedColors);
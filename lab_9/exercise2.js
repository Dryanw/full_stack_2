const arrayOfNames = ['jaxx', 'tiny', 'clay'];
const mixedArray= ['anarchy', 99, true];

const makeUpperCase = (array) => {
    let promise = new Promise((resolve, reject) => {
        let new_array = [];
        for (let x of array){
            if (typeof x === 'string'){
                new_array.push(x.toUpperCase());
            } else {
                reject('Error: Not all items in the array are strings!');
            }
        }
        resolve(new_array);
    });
    return promise;
}

function sortWords(array){
    return array.sort();
}

makeUpperCase(arrayOfNames)
    .then(sortWords)
    .then(result => console.log(result))
    .catch(error => console.log(error));

makeUpperCase(mixedArray)
    .then(sortWords)
    .then(result => console.log(result))
    .catch(error => console.log(error));
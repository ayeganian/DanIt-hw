function filterBy( array, type) {
    let newArray = [];
    array.forEach( (item) =>{
if (typeof item !== type ){
    newArray.push(item)
}
 })

    return newArray;
}

// console.log(filterBy(['hello', 'world', 23, '23', null], 'number'));
console.log(filterBy(['hello', 'world', 23, '23', null], 'string'));


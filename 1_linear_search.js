const array = [1,4,7,2,8,9,32,12,74,5,67];
let count = 0;
function linearSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        count += 1;
        if(array[i] === item) {
            return i;
        }
    }
    return null;
}
console.log(linearSearch(array, 4))
console.log('count = ', count)
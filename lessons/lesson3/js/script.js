let weight;
let height;
let result;
height = 150;
weight = 49;
console.log('HELLO WORLD');
console.log('age=', 12);
console.log('height=' + height);
console.log('weight=', weight);
function sub(height, weight) {
    return height - weight;
}
result = sub(height, weight);
console.log('FAT criteria=', result);
if (result > 100) {
    console.log('More than 100 - GOOD');
} else {
    console.log('Less than 100 - NEED TO WORK');
}
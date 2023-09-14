function double(value) {
    if (Array.isArray(value)){
        return value.map(function (num) {
            return num*2
        });
    } 
    return value * 2;
}
console.log(double(2)); // 4
console.log(double([1, 2, 3])); // [2, 4, 6]
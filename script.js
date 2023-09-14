function double(value) {
    if (Array.isArray(value)){
            return value;
    } 
    return value * 2;
}
double(2); // 4
double([1, 2, 3]); // [2, 4, 6]
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if ( n === 0 ){
        return false;
    }
    function extraction (num) {
        if (num % 2 === 0) {
            return extraction(num / 2);
        }
        return num;
    }
    return extraction(n) === 1
};
console.log(isPowerOfTwo(0));
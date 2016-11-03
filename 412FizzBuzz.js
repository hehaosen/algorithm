/**412. Fizz Buzz
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    n++;
    var resArr = [];
    var fizzBuzzStr = '';
    for (var i = 1 ; i < n; i ++) {
        if (i % 3 === 0) {
            fizzBuzzStr += 'Fizz';
        }

        if (i % 5 === 0) {
            fizzBuzzStr += 'Buzz';
        }

        if (!fizzBuzzStr) {
            resArr.push(i + '');
        } else {
            resArr.push(fizzBuzzStr);
        }
        fizzBuzzStr = '';
    }
    return resArr;
};
console.log(fizzBuzz(1));
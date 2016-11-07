/** 258 Add Digits
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    num = num + '';
    num = num.split('');
    if (num.length === 1) {
        return parseInt(num[0]);
    }
    var sum = 0;
    for (var i = 0; i< num.length ; i ++) {
        sum += parseInt(num[i]);
    }

    return addDigits(sum);
};
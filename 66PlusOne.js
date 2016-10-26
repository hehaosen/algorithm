/** 66.Plus One
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    digits[digits.length - 1] = digits[digits.length - 1] + 1;
    for (var i = digits.length - 1 ; i >= 0 ; i--) {

        if (digits[i] >= 10 && i !== 0) {
            digits[i] = digits[i] - 10;
            digits[i - 1] = digits[i - 1] + 1;
        }
        if (i === 0) {
            if (digits[i] >= 10) {
                digits[i] = digits[i] - 10;
                digits.unshift(1);
            }
        }
    }
    return digits;
};

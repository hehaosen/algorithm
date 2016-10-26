/**190.ReverseBits
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    n = n.toString(2);
    var addZero = 32 - n.length;
    for (var i = 0 ; i < addZero; i ++) {
        n = '0' + n;
    }
    console.log(n);
    n = reversal(n);

    function reversal (str) {
        var newStr = '';
        for (var i = str.length ; i >= 0 ; i--) {
            newStr += str.charAt(i);
        }
        return newStr;
    }

    return parseInt(n, 2);

};

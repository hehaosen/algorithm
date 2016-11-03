/**344.Reverse String
 * @param {string} str
 * @return {string}
 */
var reverseString = function(str) {
    var newStr = '';
    for (var i = str.length ; i >= 0 ; i--) {
        newStr += str.charAt(i);
    }
    return newStr;
};
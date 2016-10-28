/**168.Excel Sheet Column Title
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    var ret = '';
    do{
        ret = String.fromCharCode(65 + ((n - 1) % 26) )+ ret;
        n = Math.floor((n - 1) / 26);
    } while (n > 0);
    return ret;
};


/** 389. Find the Difference
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    var where;
    for (var i = 0 ; i < s.length; i ++) {
        where = t.indexOf(s.charAt(i));
        if (where !== -1) {

            t = t.substring(0, where) + t.substring(where + 1, t.length);
        }
    }
    return t;
};
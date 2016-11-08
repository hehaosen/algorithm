/** 242. Valid Anagram
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    var word = 'abcdefghijklmnopqrstuvwxyz';
    var sWord = '', tWord = '';
    for (var i = 0 ; i < word.length ; i++) {
        for (var j = 0; j < s.length ; j ++) {
            if (word.charAt(i) === s.charAt(j)) {
                sWord += word.charAt(i);
            }
            if (word.charAt(i) === t.charAt(j)) {
                tWord += word.charAt(i);
            }
        }
    }
    if (tWord === sWord) {
        return true;
    } else {
        return false;
    }
};

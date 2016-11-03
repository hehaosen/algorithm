/** 3. Longest Substring Without Repeating Characters
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length === 0) {
        return 0;
    }
    var longestStr = '';
    var maxLength = 0;
    for (var i = 0 ; i < s.length ; i ++) {
        if (longestStr.indexOf(s.charAt(i)) !== -1) {
            longestStr += s.charAt(i);
            longestStr = longestStr.slice(longestStr.indexOf(s.charAt(i)) + 1);

        } else {
            longestStr += s.charAt(i);
        }
        if (longestStr.length > maxLength) {
            maxLength = longestStr.length;
        }
    }
    return maxLength;


};
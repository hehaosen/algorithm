/** 136.Single Number
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var elem = 0;
    for (var i = 0; i < nums.length; i++) {
        elem = elem ^ nums[i];
    }
    return elem;
};
console.log(singleNumber([2,2,1]));
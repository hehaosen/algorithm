
/** 166.SubmissionDetail
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {

    if (numerator === 0 ){
        return '0';
    }
    var symbol;
    if (numerator < 0 ^ denominator < 0) {
        symbol = '-';
    } else {
        symbol = '';
    }
    if (numerator < 0)
        numerator = -numerator;
    if (denominator < 0)
        denominator = -denominator;


    var simplest = gcd(numerator, denominator);
    if (simplest !== 1) {
        numerator = numerator / simplest;
        denominator = denominator / simplest;
    }

    var circulation = false;

    // 判断是否为循环小数
    if (extraction(denominator) === 1) {
        // 不为循环小数
        circulation = true;
    }
    var decimalsArr = [];
    var markArr = [];
    var pointFront = Math.floor(numerator / denominator);
    numerator = numerator % denominator;
    var step = 0;
    var remainder = numerator;
    var orderly = false;
    var mark;
    do
    {
        step ++;
        if (step > 2500) {
            circulation = true;
            break;
        }
        decimalsArr.push(Math.floor(remainder * 10 / denominator));
        remainder = remainder * 10 % denominator;
        for ( var i = 0; i < markArr.length; i++) {
            if (remainder === markArr[i]) {
                orderly = true;
                mark = i;
                break;
            }
        }
        if (orderly) {
            break;
        }
        markArr.push(remainder);
    }
    while (remainder !== numerator);

    mark ++;
    if (circulation) {
        var decimals = symbol + pointFront
        if (decimalsArr.length !== 1) {
            decimals += '.';
        }
        for ( var i = 0; i < decimalsArr.length - 1; i++) {
            decimals += decimalsArr[i];
        }
        return decimals;
    }
    if (!orderly) {

        var decimals = symbol + pointFront + '.(';
        for ( var i = 0; i < decimalsArr.length; i++) {
            decimals += decimalsArr[i];
        }

        return decimals + ')';
    } else {

        var decimals = symbol + pointFront + '.';
        for ( var i = 0; i < mark ; i++) {
            decimals += decimalsArr[i];
        }
        decimals += '(';
        for ( i = mark; i < decimalsArr.length; i++) {
            decimals = decimals + decimalsArr[i];
        }
        decimals += ')';
        return decimals;
    }

    // 欧几里德辗转相除法
    function gcd(a, b) {
        if (b != 0)
            return gcd(b, a % b);
        else
            return a;
    }

    // 是否是 2 或 5 的次方
    function extraction (num) {
        if (num % 2 === 0) {
            return extraction(num / 2);
        }
        if (num % 5 === 0) {
            return extraction(num / 5);
        }

        return num;
    }
};

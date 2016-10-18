// 问题：请通过代码实现大整数（可能比Number.MAX_VALUE大）相加运算

function BigInt(str) {
    str = str + '';
    var Regx = /^[0-9]*$/;
    if (!Regx.test(str)) {
        console.warn( str + '<-不是一个合法数字，请确保是合法数字');
        return false;
    }
    var newBigIntArr = [];
    var step = 0;
    str = this.reversal(str);
    for (var i = 0; i < str.length; i ++ ) {
        if (i % 14 == 0 ){
            newBigIntArr.push(str.substring(14 * (step), 14 * (++step)));
        }
    }
    this.newBigIntArr = newBigIntArr;
};
BigInt.prototype.reversal = function (str) {
    var newStr = '';
    for (var i = str.length ; i >= 0 ; i--) {
        newStr += str.charAt(i);
    }
    return newStr;
};
BigInt.prototype.plus = function(bigint) {
    var _self = this;

    for (var i = 0 ; i < _self.newBigIntArr.length ; i++) {
        _self.newBigIntArr[i] = _self.reversal(_self.newBigIntArr[i])
    }

    for (var i = 0 ; i < bigint.newBigIntArr.length ; i++) {
        bigint.newBigIntArr[i] = bigint.reversal(bigint.newBigIntArr[i])
    }

    var plusIntArr = [];
    console.log(_self.newBigIntArr);
    console.log(bigint.newBigIntArr);
    if (_self.newBigIntArr.length >= bigint.newBigIntArr.length) {
        for (var i = 0 ; i < _self.newBigIntArr.length ; i++) {
            if (!bigint[i]) {
                bigint[i] = 0;
            }
            plusIntArr.push(parseInt(_self.newBigIntArr[i]) + parseInt(bigint.newBigIntArr[i]));
        }
    } else {
        for (var i = 0 ; i < bigint.newBigIntArr.length ; i++) {
            if (_self[i]) {
                _self[i] = 0;
            }
            plusIntArr.push(parseInt(_self.newBigIntArr[i]) + parseInt(bigint.newBigIntArr[i]));
        }
    }
    for (var i = 0 ; i < plusIntArr.length ; i++) {
        if ((plusIntArr[i].toString() + '').length> 14) {
            if (!plusIntArr[i + 1]) {
                plusIntArr[i + 1] = 0;
            }
            plusIntArr[i + 1] +=  parseInt(plusIntArr[i].toString().charAt(0));
            plusIntArr[i] = parseInt(plusIntArr[i].toString().substring(1, 15));
        }
    }
    var plusStr = '';
    for (var i = 0 ; i < plusIntArr.length ; i++) {
        plusStr = plusIntArr[i].toString() + plusStr;
    }
    return plusStr;
};

BigInt.prototype.toString = function() {
    return this + '';
};

var bigint1 = new BigInt('1234567890987654321234567890987654321');
var bigint2 = new BigInt('1111222233334444555566667777888899990');

console.log(bigint1.plus(bigint2));
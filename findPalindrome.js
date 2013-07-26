console.log(getAvgTime(10));

function getAvgTime(loopsNumber) {
    var time1,
        time2,
        timeDiff,
        sum = 0;

    for (var i = 0; i < loopsNumber; i += 1) {
        time1 = new Date();
        findPalindrome(1000000);
        time2 = new Date();

        timeDiff = time2 - time1;

        sum += timeDiff;
    };

    return sum / loopsNumber;
};

function findPalindrome(maximum) {
    var max = maximum,
        digitStr,
        mainArray,
        array1,
        array2,
        halfIndex,
        lastIndex,
        arrLen,
        bool;

    for (var i = 1; i <= max; i += 1) {
        array1 = [];
        array2 = [];
        bool = true;
        digitStr = i.toString();
        mainArray = digitStr.split('');
        arrLen = mainArray.length;

        if (arrLen % 2 === 0) {
            halfIndex = arrLen / 2;
            lastIndex = arrLen;

            array1 = mainArray.splice(0, halfIndex);
            array2 = mainArray;
            arraysLen = halfIndex;

            for (var maxIndex = arraysLen - 1, j = 0; maxIndex >= 0; maxIndex -= 1, j += 1 ) {
                if (array1[maxIndex] === array2[j]) {
                    bool = bool && true;
                } else {
                    bool = bool && false;
                };
            };
            if (bool) {
                // console.warn(digitStr);
            };
        };
    };
};
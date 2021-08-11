
exports.min = function min (array) {
    if (array && array.length >0) {
        let x = Array.from(array).sort((o, p) => o - p);
        return x[0];
    } else {
        return 0;
    }
}

exports.max = function max (array) {
    if (array && array.length >0) {
        let x = Array.from(array).sort((o, p) => p - o);
        return x[0];
    } else {
        return 0;
    }
}

exports.avg = function avg (array) {
    if (array && array.length >0) {
        return array.reduce((a,b) => a+b,0)/array.length; 
    } else {
        return 0;
    }
}

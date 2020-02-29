module.exports = function towelSort (matrix) {
    if((matrix === undefined) || (matrix.length < 1)) return [];
    let arr = [],
        resultArr = [],
        b;
    matrix.forEach((elem, index) => {
        if(index%2 == 0) {
            arr.push(elem.join(','));
        } else {
            arr.push(elem.reverse().join(','));
        }
    })
    b = arr.join(',').split(',');
    b.forEach((elem) => {
        resultArr.push(+elem);
    });
    return resultArr;
}

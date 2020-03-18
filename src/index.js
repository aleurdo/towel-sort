// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix) {
        return [];
    }

    let newrev = false;
    let res = [];
    for (let arr of matrix) {
        if (newrev) {
            res = res.concat(arr.reverse());
        } else {
            res = res.concat(arr);
        }
        newrev = !newrev;
    }

    return res;
}
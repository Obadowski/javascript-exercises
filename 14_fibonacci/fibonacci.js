const fibonacci = function(order) {
    let count = parseInt(order);

    if (count < 0) return "OOPS";
    if (count === 0) return 0;

    let fibo = [1, 1];

    for (let i = 2; i <= count; i++) {
        fibo.push(fibo[i-1] + fibo[i-2]);
    }
    return fibo[count-1];
};

// Do not edit below this line
module.exports = fibonacci;

function memoizedAddTo80() {
    let cache = {};
    return function(n) {
        if (n in cache) {
            return cache[n];
        } else {
            console.log('long time');
            cache[n] = n + 80;
            return cache[n];
        }
    }
}

const memoized = memoizedAddTo80();

// console.log('first time', memoized());
// console.log('second time', memoized(5));

//Top-down memoization approach
function fibonacciMaster() {
    let cache = {};
    return function fib(n) {
        if (n in cache) {
            return cache[n];
        } else {
            if (n < 2) {
                return n;
            } else {
                cache[n] = fib(n - 1) + fib(n - 2);
                return cache[n];
            }
        }
    }
}

//Bottom up approach
function fibonacciMaster2(n) {
    let answer = [0, 1];
    for (let i = 2; i <= n; i++){
        answer.push(answer[i-2] + answer[i-1]);
    }
    return answer.pop();
}

const fasterFib = fibonacciMaster()
console.log('DP', fasterFib(10))
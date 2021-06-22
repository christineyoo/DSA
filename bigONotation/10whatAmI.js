// 10. What Am I?
// What does the following algorithm do? What is the Big O of the following algorithm? Explain your answer

function isWhat(n) {
    if (n < 2 || n % 1 !== 0) {
        return false;
    }
    for (let i = 2; i < n; ++i) {
        if (n % i === 0) return false;
    }
    return true;
}

// ANSWER: This algorithm tests if a number is prime. The Big O for this one is polynomial time O(n^k) because if n=2, it would take 1 time unit. But if n is doubled so if n=4, then it would take double the time because the if condition would be met, thereby creating another iteration.
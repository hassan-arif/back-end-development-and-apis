// Within an index.js, write a function named isPrime that takes a number as an argument and returns true if it is prime, or false otherwise. Then export isPrime using module.exports.

function isPrime(number) {
    if (number < 2) return false
    for(let i = 2; i < number; i++) {
        if (number % i == 0)
            return false
    }
    return true
}

module.exports = { isPrime }
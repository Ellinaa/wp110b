function isPrime(number) {
        var isPrime = true;
        for (var i = 2; i < number; i++) {
            if (number % i === 0) {
                isPrime = false;
                break;
            }
        }
        return isPrime;
    }
console.log(isPrime(17));
console.log(isPrime(21));

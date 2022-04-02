isSquare = (n) => n > 0 && Math.sqrt(n) % 1 === 0;

isPrime = (num) => {
    if((num > 0 && Number.isInteger(num) && isSquare(num) === false && num % 2 !== 0 && num % 3 !== 0 && num % 5 !== 0) || num === 2 || num === 3 || num === 5) {
        //console.log(`${num} is a prime number`);
        return true
    } else {
        //console.log(`${num} is not a prime number`);
        return false
    }

}

nextPrimeNumber = (n) => {
    while (true) {
        n = n + 1;
        if (isPrime(n) === true) {
            return n;
        }
    }
}

primeFactors = (n) => {
    let arr = [];  
    let b;   
    let prime = 2;
    while(true) {
        if(isPrime(n)) {
            arr.push(n);
            return arr
        } else {
            if(n % prime === 0) {
                arr.push(prime)
                b = n / prime;
                if(isPrime(b)) {
                    arr.push(b);
                    return arr
                } else {
                    n = b;
                }               
            } else {
                prime = nextPrimeNumber(prime)
            }
        }
        
    }   
}

console.log(primeFactors(3591));
console.log(primeFactors(1103));
console.log(primeFactors(1407890456677889921344));


multiplyElements = (arr) => {
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
        product = product * arr[i]
    }
    return product
}

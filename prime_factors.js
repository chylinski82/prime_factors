isSquare = (n) => n > 0 && Math.sqrt(n) % 1 === 0;


isPrime = (num) => {
    for(i=2; i<num; i++) {
        if(num % i === 0) return false;
    }
    return true
}
/*
nextPrimeNumber = (n) => {
    while (true) {
        n = n + 1;
        if (isPrime(n) === true) {
            return n;
        }
    }
}*/

nextPrimeNumber = (num) => {
    while(!isPrime(num + 1) === true) {
        num = num + 1
    }
    return num + 1
}

sumOfPrimes = (num) => {
    if(num % 2 === 0) {
        let prime = 2;          
        while(!isPrime(num - prime)) {
            prime = nextPrimeNumber(prime)
        }
        return [prime, num - prime]     //returns 2 prime numbers that inevitably sum to an even number
    } else return "enter an even prime number" // or asks to input an even number

}

twinPrimes = (num) => {
    if(!isPrime(num)) num = nextPrimeNumber(num);
    let twin = nextPrimeNumber(num);
    while(twin - num !== 2) {
        num = twin;
        twin = nextPrimeNumber(num)
    }
    return [num, twin]
}

primeFactors = (n) => {
    let arr = [];  
    let b;   
    let prime = 2;
    while(true) {
        if(isPrime(n)) {
            arr.push(n);
            return arr              //all natural numbers are products of primes. this function finds them
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

//console.log(twinPrimes(3594));
//console.log(sumOfPrimes(1103));
//console.log(twinPrimes(7890456));
//console.log(twinPrimes(13));
//console.log(primeFactors(998));

let num = 1;
let countBelow10k = 0;
let count10k20k = 0;
let count20k30k = 0;
let count30k40k = 0;
let count40k50k = 0;
let count50k60k = 0;
let count60k70k = 0;
let count70k80k = 0;
let count80k90k = 0;
let count90k100k = 0;
while(num <= 100000) {
    console.log(twinPrimes(num));
    if(twinPrimes(num)[0] <=10000) {countBelow10k = count10k20k++}
    else if(20000 >= twinPrimes(num)[0] >10000) {count10k20k = count10k20k + 1}
    else if(30000 >= twinPrimes(num)[0] >20000) {count20k30k = count20k30k + 1}
    else if(40000 >= twinPrimes(num)[0] >30000) {count30k40k = count30k40k + 1}
    else if(50000 >= twinPrimes(num)[0] >40000) {count40k50k = count40k50k + 1}
    else if(60000 >= twinPrimes(num)[0] >50000) {count50k60k = count50k60k + 1}
    else if(70000 >= twinPrimes(num)[0] >60000) {count60k70k = count60k70k++}
    else if(80000 >= twinPrimes(num)[0] >70000) {count70k80k = count70k80k++}
    else if(90000 >= twinPrimes(num)[0] >80000) {count80k90k = count80k90k++}
    else {count90k100k = count90k100k++}
    num = twinPrimes(num)[1]
}
console.log(countBelow10k, count10k20k, count20k30k, count30k40k, count40k50k, count50k60k, count60k70k, count70k80k,
    count80k90k, count90k100k)


multiplyElements = (arr) => {
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
        product = product * arr[i]
    }
    return product
}

var count = 0; // Initialize counter for prime numbers
for (var num = 2; num <= 100; num++) { // Loop through numbers from 2 to 100
    var isPrime = true; // Assume current number is prime
    for (var i = 2; i <= Math.sqrt(num); i++) { // Check divisibility from 2 to sqrt(num)
        if (num % i === 0) { // If num is divisible by i
            isPrime = false; // Mark as not prime
            break; // Exit inner loop early
        }
    }
    if (isPrime) { // If number is still prime
        console.log(num); // Print the prime number
        count++; // Increment prime counter
    }
}
console.log("Total Prime Numbers between 1 and 100:", count);

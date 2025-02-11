function isPrime(num) {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
      if (num % i === 0) return false;
    return num > 1;
  }
  
  self.onmessage = function (event) {
    let number = parseInt(event.data);
    let incremented = number;
  
    function incrementAndCheck() {
      incremented++;
      if (isPrime(incremented)) {
        postMessage(`Found prime number: ${incremented}`);
        self.close();
      } else {
        postMessage(`Current number: ${incremented} (not prime)`);
        setTimeout(incrementAndCheck, 100);
      }
    }
  
    incrementAndCheck();
  };
  
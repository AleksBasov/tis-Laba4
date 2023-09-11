function divideByTwo(num) {
	let iterations = 0;
	while (num >= 10) {
	  num /= 2;
	  iterations++;
	}
	return iterations;
  }
  
  console.log(divideByTwo(256)); 
  console.log(divideByTwo(32)); 
  console.log(divideByTwo(9)); 
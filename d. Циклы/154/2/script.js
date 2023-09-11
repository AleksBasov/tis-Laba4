
let array = [1, 2, 3, 4, -5, 6, 7, 8];
let sum = 0;

for (let i = 0; i < array.length; i++) {
	sum += array[i];
	
	if (array[i] < 0) {
		break;
	}
}

console.log(sum);
function trailingZeros(n) {
  //your JS code here. If required.
	let count = 0;

	while ( n >= 5){
		n = Math.floor n / 5);
		count += n
	}
	
	return count;
}
const input = prompt("Enter a number");
alert(trailingZeros(input));

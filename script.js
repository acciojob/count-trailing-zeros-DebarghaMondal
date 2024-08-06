function trailingZeros(n) {
  //your JS code here. If required.
	if ( n === 0) return 0;

	let numstr = n.toString();

	let count = 0;

	for(let i = numstr.length - 1; i >= 0; i--){
		if(numstr[i] === '0'){
			count++;
		}else{
			break
		}
	}
	return count;
}
const input = prompt("Enter a number");
alert(trailingZeros(input));

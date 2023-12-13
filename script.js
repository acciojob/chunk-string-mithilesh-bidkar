function stringChop(str, size) {
  // your code here

			let s = "";
			let result = [];
	for (let index = 0; index < str.length; index++) {
		if(index%size === size-1){
			s= s.concat(str[index]);
			result.push(s);
			s="";
		}else{
			s=s.concat(str[index]);
		}
	}

	return result;
}

// Do not change the code below
// const str = prompt("Enter String.");
// const size = prompt("Enter Chunk Size.");
// alert(stringChop(str, size));

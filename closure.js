function numCounter(num){
	let counter=1;
	return function(value){

		console.log(`${num} count = ${counter}`);
		counter++;
	}
}

let counter0=numCounter(0);
let counter1=numCounter(1);

counter0();
counter0();

counter1();
counter1();
counter1();
counter1();
counter1();

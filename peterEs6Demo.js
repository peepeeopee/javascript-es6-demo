function es6Demo() {
    console.log()//simply used to make it readable in node
    blockBindings1()
    console.log()
    arrowFunctions()
	console.log()
	destructuring()
	console.log()
	restParams()
	console.log()
	spreadOperator()
	console.log()
	templateStrings()
	console.log()
	taggedTemplates()
	console.log()
};

function blockBindings1() {
    console.log('Block Bindings 1')
    //block bindings can be used to create variables in different scopes
    let today = 'weeeeooooo!!!'

    if (today) {
        let today = 'It\'s Friday!!!'//does this really create a new variable?
        console.log(today)
    }
    console.log(today)
    console.log()

    //block bindings can be used to assign values to variables in different scopes
    //or does this create a new variable?
    var i = 10
    for (let i = i; i > -1; i--) {
        console.log(i)
    }

    console.log(i)
}

function arrowFunctions() {
    console.log('Arrow Functions')

    //using arrow functions allows you to declare functions quickly and easily
    var combineParams = (a,b) => a + b;

    //empty brackets means there are no parameters needed
    var noParams = () => 'Look ma, no params!';

    var combineParams2 = (a,b) => {
        let c = a + b;
        console.log(a,b,c);
    }

    //it can also be used to return an object quickly
	var getProDev = day => ({day:day, name:'It\'s ProDev'})

    console.log(noParams())
    console.log()
    combineParams2('It\'s', 'Friday')
    console.log(combineParams(1,2))
	var test = getProDev('friday')
	console.log(test)

};

function destructuring(){
	console.log('Destructuring')
	
	//it can used to declare more than 1 variable at a time
	let today = new Date()
	var [d,m,y] = [today.getDate(),today.getMonth(),today.getFullYear()]
	console.log(d,m,y)
	console.log()
	
	//it can also be used to return objects
	function proDevDate() {
		return {
			d: today.getDate(),
			m: today.getMonth(),
			y: today.getYear()
		}
	}
	
	var objectAssignment = {}
	objectAssignment = proDevDate()
	console.log(objectAssignment)
	
};

function restParams(){
	console.log('Rest Parameters')
	
	//can be used to pass a variable number of parameters to a function
	function howManyParameters(one, two, ...otherParams){
		console.log(+otherParams.length + 2 + ' parameters')
	}
	
	howManyParameters(1,2,3,4,5,6,7)
}

function spreadOperator(){

	console.log('Spread Operator')
	
	function howManyParameters(...otherParams){
		console.log(+otherParams.length + (+otherParams.length > 1 ? ' parameters' : ' parameter'))
	}
	
	var firstArray = ['l','e','t','t','e','r','s']
	
	//used to split array into individual parameters
	function countLetter(letter, string){
		howManyParameters(firstArray)
		howManyParameters(...firstArray)
	}
	countLetter()
	
	//used to combine arrays in quicker way
	var testArray = [1,2,3,4,5,6]
	console.log(testArray.length)
	testArray.push(7,8,9,10)
	console.log(testArray.length)
}

function templateStrings(){
	console.log('Template Strings')
	
	var day = 'Friday'
	var event = 'ProDev'
	
	var scream = () => 'weeeeooooo!';
	
	var tempString = `Today is ${day} and were at ${event} ${scream()}`;
	
	console.log(tempString)
	console.log()
	
	var longString = `This 
is 
Sparta!!!

	  W
	  0/   \\0/
	 /|_   \\|
	  /     /   ______
	`;
	
	console.log(longString)
}

function taggedTemplates(){
	console.log('Tagged Templates')
	
	//pass function results to template string
	var a = 5;
	var b = 10;

	function tagString(strings, ...values) {
	  console.log(strings[0]); // "Hi "
	  console.log(strings[1]); // " ProDev "
	  console.log(values[0]);  // 15
	  console.log(values[1]);  // 50

	  return "Bazinga!";
	}

	tagString`Hi ${ a + b } ProDev ${ a * b}`;
}

es6Demo()
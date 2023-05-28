console.log('Hello World!!!');
var number = 27
var string = 'We were on a break!'
var boolean = true
console.log(boolean); //true

//Doing some Math:

var Number1 = 5
var Number2 = 12
var Number3 = 20
var Number4 = 2

var Addition = Number1 + Number3         //25
var Substraction = Number3 - Number2     //8
var Multiplication = Number2 * Number4   //24
var Division = Number3 / Number1         //4

console.log('My First Addition');
console.log(Addition);

console.log('My First Substraction');
console.log(Substraction);

console.log('My First Multiplication');
console.log(Multiplication);

console.log('My First Division');
console.log(Division);

//Comparison:

console.log(Number1 == Number2);        //false
console.log(Number1 *4 == Number3);     //true  
console.log(Number4 *10 == Number3);    //true

console.log(Number2 > Number3);         //false
console.log(Number4 < Number2);         //true
console.log(Number1 < Number1);         //false

console.log(Number3 <= Number1);        //false
console.log(Number3 >= Number2);        //true
console.log(Number4 >= Number4);        //true


//Practicing 'If' Statements:

if (Number2 <= Number4) {
    console.log('Positive Result');            
} else {                                        //Negative Result
    console.log('Negative Result');
}

if (Number3 == Number1 *4) {
    console.log('Positive Result');
} else {                                        //Positive Result
    console.log('Negative Result');
}

//Adding '&&' and '||'

if (Number3 >= Number2 && Number4 *10 == Number3) {
    console.log('Positive Result');
} else {                                                //Positive Result, They are both true
    console.log('Negative Result');
}

if (Number1 == Number2 || Number4 < Number2) {
    console.log('Positive Result');
} else {                                                //Positive Result, At least one is true
    console.log('Negative Result');
}

if (Number3 <= Number1 || Number1 < Number1) {
    console.log('Positive Result');
} else {                                                //Negative Result, None of them are true
    console.log('Negative Result');
}

//Multiple Responses:

var Text1 = 'Oh My God, Chandler Bing'
var Text2 = 'I wish I could, but I dont want to'
var Text3 = 'We were on a break!'

if (Text1.length > Text2.length) {
    console.log('Text one is longer than Text two');
} 
else if (Text1.length == Text2.length) {                                        //Text2 is longer than Text1
    console.log('Both Texts are the same length');
}
else{
    console.log('Text two is longer than Text one');
}


if (Text2.length > Text1.length && Text3.length > Text1.length) {
    console.log('Both Texts are longer than Text One');
} 
else if (Text2.length > Text1.length && Text3.length <= Text1.length) {
    console.log('Only the Second text is longer than the first one');           //Only Text2 is longer than Text1
}
else if (Text3.length > Text1.length && Text2.length <= Text1.length) {
    console.log('Only the Third text is longer than the first one');
}
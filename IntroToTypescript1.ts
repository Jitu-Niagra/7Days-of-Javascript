// Switch Statement 
function switchFunction(a:number):void{
  switch(a){
    case 1:
    let variableInCase1="Test";
    console.log(variableInCase1);
    break;
    case 2:
    let varaibleInCase2="Test2";
    console.log(varaibleInCase2);
    break;
    default:
    console.log("Defalut");
  }
}

switchFunction(1);
switchFunction(2);

/***
 * Multiple ways of declaring a string*/ 
let w="Value1";
let x="this is a string with the value " + w;
let y="this is a string with the value  " + w;
let z=`this is a string ${w}`;

console.log(w,x,y,z)

// Backticks
let word="yes!"
let stringInterpolation=`this is a string ${word}`;
console.log(stringInterpolation);

// Strings on Multiple lines
let  multiline1="Line\n" +"Line2\n"+"Line3\n";

let multiline2=`Line1
Line2
Line3`;

console.log(multiline1);
console.log(multiline2)

// number
const xad: number=10;
let cad:number=15;
var p:number=123;
console.log(`Here are 3 variables of type number`,cad,p,xad)

// number base
let dec:number=10;
let hex:number=0x10;
let octo:number=0o10;
let bin:number=0b10;
console.log("Here are 4 numbers",dec,hex,octo,bin);
let int:number=1;
let float:number=1.1;
let negative:number=-100;
console.log(typeof(int))
console.log(typeof(float))
console.log(typeof(negative))
// numeric separator
const numericSeparator1=560_000_067;
console.log(numericSeparator1)

/*****
 * Boolean
 *
 */
// Boolean
let bol:boolean=true;
console.log(bol);

let myValueCanChange:boolean =true;
console.log(myValueCanChange);
myValueCanChange=!myValueCanChange;
console.log(myValueCanChange);
// Boolean Function 
console.log(Boolean(false));
console.log(Boolean("false"));

// Boolean Function
console.log(new)

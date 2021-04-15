// Alternative to jav ascript
/***
*Alternative to js 
*Not supported by brower 
*Strict type
Supports  modern features (arrow functions , let const)
Extra features 
 */

/***
 * What is typescript 
 * Typescript philosphy
 * Why use Typescript
 * Using typescript 
 * **/ 

//  The basics  of variables
// drwabacks of the var keyword 
function varFunction(){
  var x="111";
  if(true){
    var x="999";
  } //variable redfined
 console.log(x);
};

varFunction()


// declaring with let 
function letFunction(){
  let x="111";
  if(true){
    let x=999;
  }
  console.log(x)
}
letFunction()

// allowing the inner scope to have access to it 
var myVarVariableOutSide="I am outside";
let myLetVariableOutside="I am outside too";

function letOutsideFunction(){
  console.log(myVarVariableOutSide)
  console.log(myLetVariableOutside)
}
letOutsideFunction();

// Specifying  type 
var varName1:number;
let varName2:string;
 declare const trialName:boolean;

/***
 * Declaring Types in Untyped Code
 * using the declare keyword  "ambient declaration"
 * 
 */
declare let age:number;
export default age;

declare function ambientFunction(i:number):void;

 declare function myFunction(i:number){
  ambientFunction(1);
}

// Hoisting varibles global or local scope
  declare var x:string| undefined =undefined;
 x="not declared before assignment";
 x="declared after assignment and all fine";

//  typecript scope is  javascript scope
// shadowing scope -declaring a variable twice (inner+outer) 
// function f1(i:number){
//   console.log("Parameter value",i);
//   let i:number=10;
// }
// f1(0);
// Cpturing scope

function mainFunction(){
  let innerFunction;
  if(true){
    let variableCaputureByTheInnerFunction="AvailableToTheInnerFunction"
    innerFunction=function(){
      return varaibleCapturedByTheInnerFunction;
    }
  }
  return innerFunction;
}
console.log(mainFunction())
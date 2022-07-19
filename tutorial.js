 const sum = (num1,num2) => num1 + num2; //define
 const PI = 3.14;
 class SomeMathObject{
     constructor(){
         console.log('object created');
     }
 }
 //module.exports : used for making it a module 
//  module.exports.sum = sum; //module is used so that i can call it in another fiel
//  module.exports.PI = PI;
//  module.exports.SomeMathObject = SomeMathObject;
//Instead of defining module differently we can define it as an object
module.exports = { sum: sum, PI: PI, SomeMathObject:SomeMathObject};

//Events Module and EventEmitter class

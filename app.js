/*const tutorial = require('./tutorial') //./ means file in same folder
console.log(tutorial); 
//sum(1,1);
// console.log(tutorial(1,1));
//access the file
console.log(tutorial.sum(1,1));
console.log(tutorial.PI);
console.log(new tutorial.SomeMathObject());
*/

//EventEmitter
const EventEmitter = require('events');
//instance
const eventEmitter = new EventEmitter();
//listener
eventEmitter.on('tutorial',(num1,num2)=>{
    console.log('tutorial event has occured');
    console.log(num1 + num2);
});

eventEmitter.emit('tutorial',1,2); // hit

class Person extends EventEmitter{
    constructor(name){
        super(); //call constructor of a parent
        this._name = name;
    }

    get name(){
        return this._name;
    }
}

let gau = new Person('Gautami');
let christ = new Person("Christ");
gau.on('name',()=>{
    console.log("My name " + gau.name);

});

christ.on('name',()=>{
    console.log('name is ' + christ.name);
});
christ.emit('name');
gau.emit('name');

//execution is synchronous
//Readline moduke
//prompt user or get input from user
const readline = require('readline');
//interface
const r = readline.createInterface({input: process.stdin/*object*/,output: process.stdout});
let num1 = Math.floor((Math.random() * 10) + 1);
let num2 = Math.floor((Math.random() * 10) + 1);
let ans = num1 + num2;

//method
r.question(`What is ${num1} + ${num2}? \n`,(userInput)=>{
    if(userInput.trim() == ans){
        r.close();
    }
    else{
        r.setPrompt('Incorrect response please try again\n');
        r.prompt();
        r.on('line',(userInput)=>{
            if(userInput.trim() == ans)
                r.close();
            else{
                r.setPrompt(`Your answer of ${userInnput} is incorrect try again`);
                r.prompt();
            };
        });
    };
    
});

r.on('close',()=>{
    console.log("Correct");
});

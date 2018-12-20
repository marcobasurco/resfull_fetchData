////////////////////////////// 1 //////////////////////////////



var myString: string; // it was declared as String type
// I can assign myString like this:
myString = "Bee stinger";
// Why is there a problem with this? What can I do to fix this?
myString = "9"; // since it was declared String type, a string is expected.

////////////////////////////// 2 //////////////////////////////



function sayHello(name: string) {
    return `Hello, ${name}!`;
}
// This is working great:
console.log(sayHello("Kermit"));
// Why isn't this working? I want it to return "Hello, 9!"
console.log(sayHello("9"));// String value is expected.


////////////////////////////// 3 //////////////////////////////


function fullName(firstName: string, lastName: string, middleName?: string) {// add interrogation on middleName to make it optional
    let fullName = `${firstName} ${middleName} ${lastName}`;
    return fullName;
}
// This works:
console.log(fullName("Mary", "Moore", "Tyler"));
// What do I do if someone doesn't have a middle name?
console.log(fullName("Jimbo", "Jones"));


////////////////////////////// 4 //////////////////////////////


interface Student {
    firstName: string;
    lastName: string;
    belts: number;
}
function graduate(ninja: Student) {
    return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
}
const christine = {
    firstName: "Christine",
    lastName: "Yang",
    belts: 2
}
const jay = {
    firstName: "Jay",
    lastName: "Patel",
    belts: 4 // typo on belt which was not declared. It should be belts
}
// This seems to work fine:
console.log(graduate(christine));
// This one has problems:
console.log(graduate(jay));

////////////////////////////// 5 //////////////////////////////



class Ninja {
    fullName: string;
    constructor(
        public firstName: string,
        public lastName: string) {
        this.fullName = `${firstName} ${lastName}`;
    }
    debug() {
        console.log("Console.log() is my friend.")
    }
}
// This is not making an instance of Ninja, for some reason:
const shane = new Ninja("Michael", "Choi");
// Since I'm having trouble making an instance of Ninja, I decided to do this:
const touring = new Ninja("Alan", "Touring");

// Now I'll make a study function, which is a lot like our graduate function from above:
function study(programmer: Ninja) {
    return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
}
// Now this has problems:
console.log(study(touring));
console.log(study(shane));


////////////////////////////// 6 //////////////////////////////

var increment = x => x + 1;
// This works great:
console.log(increment(3));

var square = x => x * x;// no need to use {}
console.log(square(4));



// This is not working:
var multiply = (x, y) => x * y; // parentesis are required
console.log(multiply(4, 6));



// Nor is this working:
function operators() { // this is the function that enables return to return the array
    var x = 2 // declared variables x and y to enable var sum
    var y = 3
    var sum = (x, y) => x + y;

    let product = x * y;
    let difference = Math.abs(x - y);

    return [sum, product, difference];
}


////////////////////////////// 7 //////////////////////////////

function Elephant(age) {
    this.age = age;
    this.birthday = () => {
        this.age++;
    }
}
const babar = new Elephant(8);
setTimeout(babar.birthday, 1000)
setTimeout(function () {
    console.log(`Babar's age is ${babar.age}.`)
}, 2000)


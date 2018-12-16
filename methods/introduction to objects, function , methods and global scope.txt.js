console.log("Welcome to the program") // code that is written within the main/global scope outside of the function and object of a program is executed automatically
var hotel = {
    name: "CareerDevs Hotel",

    sousChef: function(param1, param2) { // this is now a method. parameters are optional 
        // a method is a function within an object 
        // lines of javascript code 
        // more lines of code 
        console.log("Welcome to the program "); //local scope to the methhod and also local to the object 
    }
}

console.log("Welcome to the middle of the program")

function sousChef(param1, param2) { // this is a function 
    // lines of javaa script code     
    // more lines of code     
    console.log("Welcome to the function")
    //local scope to the methhod and also local to the function
}
console.log("Welcome to the END of the program ");

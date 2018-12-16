
var model = ["Samsung" , "Apple" , "Blackberry" , "Google"];
var type  = ["Galaxy" , "Iphone" , "Blackberry" , "Pixel"];
var units = [ 300 ,  500 , 150 , 10];
var price = [ 999.99 , 799.99 , 399.99 , 799.99];
var i ;
var sum = 0; 

for (i=0; i < 4; i++ ) {
    var total = units[i] *price[i];
    console.log( total.toFixed(2));
  
   
} 

for ( i=0; i < price.length; i++ ) {
    sum += units[i] * price[i];
}

console.log("The total prices of all the phone", model[i], sum.toLocaleString("en-US", {style: 'currency', currency: 'USD'} , price[i]*units));
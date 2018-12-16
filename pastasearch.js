var restaurant = "Pasta Search";
var address = "67 hope street";
var rating = 5;
var plateCost = 23; 
var tables = ["table1" , "table2" , "table3" ,  "table4"].length; 
var customers = 10; 

var time = 1.5; 
var open = 12; 
var hours = open/time; 
var cost = tables * customers * hours * plateCost ; 
var maximum = cost; 
console.log("Hello Bob , The maximun amount you can achieve in a day in your resteraunt is, " , maximum.toLocaleString("en-US", {style: 'currency', currency: 'USD'})); ; 


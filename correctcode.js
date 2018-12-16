var restaurantName = " PastaZilla"; 
var restaurantAddress = " 12134 Pasta Lane" ; 
var rating = 4.5; 
var menuItems = 20; 
var tables = ["table1" , "table2" , "table3" , "table4"]; 
var numCustPerTable = 10; 

var restaurantCapacity = tables.length * numCustPerTable;
var Time = avgDiningTime * hoursOpenPerDay;

var avgDiningTime = 1.5;
var hoursOpenPerDay = 12; 
var tableTurns = hoursOpenPerDay/ avgDiningTime; // 8 
var totalpeopleDay = tableTurns * restaurantCapacity;//320
var avgPlateCost = 23; 
var maxSalesPerDay = totalpeopleDay * avgPlateCost; 

console.log(maxSalesPersDay); 
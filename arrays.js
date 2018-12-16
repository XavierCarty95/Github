var model = ["Samsung" , "Apple" , "Blackberry" , "Google"];
var type  = ["Galaxy" , "Iphone" , "Blackberry" , "Pixel"];
var units = [ 300 ,  500 , 10 , 50];
var price = [ 999.99 , 799.99 , 399.99 , 799.99];
var i ;

for (i=0; i < model.length; i++) {
    var total = model[i] *type[i] *units[i] *price[i];
    console.log(total);
} 




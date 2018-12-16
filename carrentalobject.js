var carRentals = { Company : "BMW", 
                      Model  :  "I8 " , 
                      NumCars: 300, 
                      Price : 300000,

    
};

for ( var i in carRentals) { 
        console.log(i , "is"  , carRentals[i] );
}

var revenue = carRentals.NumCars * carRentals.Price;
console.log( "The total price of all", carRentals.Company, "for", carRentals.Model, "is" , revenue.toLocaleString("en-US", {style: 'currency', currency: 'USD'}) , "dollars");    

        

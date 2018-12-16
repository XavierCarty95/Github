 var cornerPhones = { 
    company: "Apple",
    phone: "iphone X",
    cost: 999.99,
    monthlySales: 500,
    checkCost : function (){ return this.cost * this.monthlySales ;
}

}



console.log( "Your total sales amount is " , cornerPhones.checkCost().toLocaleString("en-US", {style: 'currency', currency: 'USD'} ))
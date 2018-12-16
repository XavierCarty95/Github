var person = {  
    firstname : "Xavier" , 
    lastname : "Carty" , 
    emoployeeId : "12345",
    hourlyRate : 55.00 , 
    hoursWorked : 80, 
    
    weeklyPay : function()  {
        return this.hourlyRate * this.hoursWorked ; 
        
    },
    
    fullName : function() { 
        return this.firstname + " " +  this.lastname;
        
    }
    
    
}; 
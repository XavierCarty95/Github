var hotel  = { name :  "The ritz", 
               rooms : 100 , 
               booked : 50 ,
               gym : true , 
               size : ["twin" , "double" , "suite"] ,
               checkAvailability : function() { return this.rooms - this.booked; 
               } 
                
    
    
    
}

console.log(" The number of rooms that are avaiablie are : " , hotel.checkAvailability())

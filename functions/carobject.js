var car = {  
     make : "Chevy" , 
     model : "Camaro" , 
     bodyType : "Coupe",
     startSpeed : 0  , 
     topSpeed : 200,
     horsePower : 455,
     lbFtTorque: 455, 
     mphAccelarationPerSecond : 20, 
     secondsGasPedalPressed : 3, 
     windowUp : true, 
     engineOn: false, 
     hornBeep : false,  
     
     beepHorn : function()  {
         this.hornBeep = true; 
         
     },
     
    weeklyPay : function()  {
        return this.hourlyRate * this.hoursWorked ; 
        
    },
    
    currentSpeed : function() { 
        return this.mphAccelerationPerSecond  * this.secondsGasPedalPressed;
        
    }
    
    
}; 
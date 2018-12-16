var careerDevs  = {  name : "Evening Class" ,
                     located : "Waterfire" , 
                     cohort : "six ", 
                     numPeople : 11 ,
                     numWeek : 48 ,
                     numHoursPerWeek : 16 , 
                     months : [
                          12, 
                          5 , 
                         "anything" , 
                        ] 
    
}

for (var i in careerDevs) { 
    console.log( i , "" ,careerDevs[i]); 
    
}
console.log("In the " , careerDevs.name , "located at" , careerDevs.located , "it took" , "cohort", careerDevs.cohort , careerDevs.numWeek * careerDevs.numHoursPerWeek , "hours to complete this program" );
var venue = {  name: "Madison Square B Garden",
               ticketPrice: 30,
               seatsAvailable: ["201" , "202" , "203" , "204" , "205" , "206"],
               seatsBooked: [],
               
               numberOfSeatsAvailable: function () {
                return  this.seatsAvailable.length;
               },
               
              
               numberOfSeatsBooked : function () {
                   return this.seatsBooked.length ;
                   
               } ,
               
               totalNumberOfSeatsAvailable : function () { 
                 return this.seatsAvailable.length + this.seatsBooked.length;
               },
               
               bookTicket: function () { 
                   if (this.numberOfSeatsAvailable() > 0 ) { 
                       this.seatsAvailable.splice(this.seatsAvailable, 0)
                       this.seatsBooked.unshift(this.seatsAvailable.splice( 0, 1)[0])
                   
                   }
                       
                   },
               
    
};


document.getElementById("VenueName").innerHTML =  venue.name

var seatList = "<ul>";

for (var i = 0; i < venue.seatsAvailable.length; i++) {
        seatList += "<li>" + venue.seatsAvailable[i] + "</li>";
}

seatList += "</ul>";

document.getElementById("seatAvail").innerHTML = seatList;

var selectSeatsList = "<form><select id= 'selectSeat'>";
for (var i = 0; i < venue.seatsAvailable.length; i++) {
     selectSeatsList +=  "<option value = \'"+venue.seatsAvailable[i]+"\'> "+venue.seatsAvailable[i]+" </option>"
}

selectSeatsList += "</form>";

document.getElementById("selectSeat").innerHTML = selectSeatsList
document.getElementById("selectSeat").style.textAlign.center = selectSeatsList
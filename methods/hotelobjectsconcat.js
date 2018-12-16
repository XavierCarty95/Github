var hotel = {
    name: "CareerDevs Hotel",
    rating: 5.0,
    roomRate: 325.00,
    roomNumbersAvailable: ["101","102", "103", "104", "105", "106"],
    roomNumbersBooked: [],
    roomType: "Queen",

    numberOfRoomsAvailable: function() {
        // length of the  number of ro oms available minus booked  
        return this.roomNumbersAvailable.length;
    },
    
    numberOfRoomsBooked : function() { 
        return this.roomNumbersBooked.length;
        
    },

    numberOfRooms: function() {
        //available rooms plus booked rooms 
        return this.roomNumbersAvailable.length + this.roomNumbersBooked.length;

    },
    
    bookRoom :function () {
        // only book a room if one or more is available 
        if (this.numberOfRoomsAvailable() > 0){
           var randomRoom = this.roomNumbersAvailable[Math.floor(Math.random() * this.roomNumbersAvailable.length)];
           //remove booked room from roomNumbersAvailable using slice/idexOf 
          this.roomNumbersAvailable.splice(this.roomNumbersAvailable.indexOf(randomRoom), 1);
          
            this.roomNumbersBooked = this.roomNumbersBooked.concat(this.roomNumbersAvailable.splice(0 , 1 , randomRoom));
             console.log(this.roomNumbersBooked);
             //add to room numbers bookes 
             // I can use .push or .concat or .unshift 
            //select a random available room  
            //this.roomNumbersBooked.unshift( this.roomNumbersAvailable.splice(this.roomNumbersAvailable.indexOf(randomRoom), 1)[0]);
           // this.roomNumbersBooked.push(randomRoom);
            
           
          
        }
        
    },
    
      unbookRoom: function() {
          var randomRooms = this.roomNumbersBooked[Math.floor(Math.random() * this.roomNumbersAvailable.length)];
          if (this.numberOfRoomsAvailable() > 0) { this.roomNumbersAvailable.concat(this.roomNumbersBooked.splice(0 , 1 , randomRooms));
          
         
          
          
      } 
      }
    
    


};
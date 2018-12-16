var hotel = { 
    name : "Vacation", 
    rating : 5.0 , 
    roomsBookedCount: 1, 
   roomNumbersBooked: [] ,
     totalRooms: 8,
    roomRate: 35.00 ,  
    roomType: "Twin" ,
    roomNumbers : ["101" , "102" , "103" , "104" , "105" , "106" , "107" , "108" ,],
    
    totalsRooms: function() { 
        var totRooms = hotel.roomNumbers.length;
        return totRooms;
},
  roomssBookedCount: function() { 
      if (hotel.roomsBookedCount > 0) { 
      return hotel.roomsBookedCount = hotel.roomsBookedCount + 1;
      
      }
      

} , 

bookRoom: function() {
    this.roomNumbers.unshift()
    return this.roomNumbersBooked.concat(this.roomNumbers[0])
} ,

roomsLeft  : function() { return this.totalRooms - this.roomsBookedCount 
},
 

}
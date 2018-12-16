var library = {  
    
    store : "Barnes & Nobel",
    genre : "non-fictonal",
    numberOfBooks : 5, 
    booksAvailable : ["Self-Love" , "Enough-Drugs" , "Becoming-Whole" , "Broken-Silence", "Quiet"], 
    booksRented : [],
    
    numberOfBooksTotal : function () { 
       return  this.booksRented.length + this.booksAvailable.length;
    },
    
    numberOfBooksAvailable : function () { 
        return this.booksAvailable.length;
        
    },
    
    numberofBooksRented : function () { 
        return this.booksRented.length
    },
    
    bookBook : function() {
         
           //remove booked room from roomNumbersAvailable using slice/idexOf 
          if (this.numberOfBooksAvailable() > 0){
          this.booksAvailable.splice(this.booksAvailable, 0)
          this.booksRented.unshift(this.booksAvailable.splice(0, 1)[0]);
          
          // if (this.numberOfRoomsAvailable() > 0){
           //var randomRoom = this.roomNumbersAvailable[Math.floor(Math.random() * this.roomNumbersAvailable.length)];
           //remove booked room from roomNumbersAvailable using slice/idexOf 
          //this.roomNumbersAvailable.splice(this.roomNumbersAvailable.indexOf(randomRoom), 1);
          //this.roomNumbersBooked.unshift( this.roomNumbersAvailable.splice(this.roomNumbersAvailable.indexOf(randomRoom), 1)[0]);
          
            }
            
            
    },
        
         returnBook : function () { if(this.numberofBooksRented() > 0) {
         
        var randomBook= this.booksRented[Math.floor(Math.random()*this.booksAvailable.length)];
        this.booksAvailable.unshift(this.booksRented.splice(this.booksRented.indexOf(randomBook), 1 )[0]);                       
        
    } 
    
         }
    
             
             
             
         
    
    
    
    
    
    
};
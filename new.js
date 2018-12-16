var car = {
        car: "Toyota",
        year: 2008,
        model: ["101", "102", "1003" ,"108" , "106" ,"107"],
        book: [],

        modelOfCarAvailable: function() {
             return this.model.length;
           
        


    },

    bookCar : function() {
        if (this.modelOfCarAvailable() > 0) {
            //var randomRoom = this.roomNumbersAvailable[Math.floor(Math.random() * this.roomNumbersAvailable.length)]
            var randomCar = this.model[Math.floor(Math.random() *this.model.length)]
             //this.model.splice(this.model.indexOf(randomCar), 1);
          
             this.book = this.book.concat(this.model.splice( this.model.indexOf(randomCar), 1))
             console.log(this.book)
                   
                   }
                       
                   

    }




};

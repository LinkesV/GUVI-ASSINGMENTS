//write a class to calculate the uber price.

class uberprice {
    constructor (destination, price) {
        this.destination = destination;
        this.price = price;
 
    }
}
 
let Chennai = new uberprice( "Chennai", "500 rupees");
 
console.log(Chennai.price);

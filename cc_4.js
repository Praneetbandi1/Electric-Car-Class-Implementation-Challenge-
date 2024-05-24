//#46368100
//Implemeting Parent/Super Class which is = Car
class Car {
    // Super constructor
    constructor(make, speed) {
        this.makeName = make;
        this.speedValue = speed;
    }
    // implementing accelerate method to increase speed by 10 km
    accelerate() {
        this.speedValue = this.speedValue + 10;
        console.log("Car model:" + this.makeName);
        console.log("New speed: " + this.speedValue+" km/h");

    }//END

    // Implementing brake method that decreases car speed
    brake() {
        this.speedValue = this.speedValue - 5;
        console.log("Car model:" + this.makeName);
        console.log("Reduced speed:" + this.speedValue+" km/h");
    }
}
//Implementing subclass EV
class Ev extends Car {
    constructor(make,speed,charge) {
        this.super(make,speed);
        this.batteryCharge=charge;
    }
    chargeBattery(chargeTo) {
        this.batteryCharge=chargeTo;
       
        console.log(`Battery charged: ${this.batteryCharged}`);
        
    }
    //Override accelerate method to increase speed by 20 km/h and decrease overall battery charge by 1
    accelerate() {
        this.speedvalue=this.speedValue+20;
        this.batteryCharge=this.batteryCharge-1;

        console.log( `${this.makeName} going at ${this.speedValue } km/h, with a charge of ${this.batteryCharge}%`);

        
    }
}
//testing Sub and Super Class
let myTesla= new Ev("Tesla",120,23);
myTesla.accelerate();
myTesla.brake();

myTesla.chargeBattery(60)
myTesla.accelerate();
myTesla.brake() 










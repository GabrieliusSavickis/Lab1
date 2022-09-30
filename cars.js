class Vehicle{
    // Constructor to initialise  data
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;      
    }

    // Method to create vehicle details
    Information(){
        console.log(`Make: ${this.make}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
    }
}


//New instance of class Vehicle
// let myVehicle = new Vehicle(`BMW`, `F30`, 2013);
//Outputs the input
// myVehicle.Information();


// New class that inherits the Vehicle class
class Car extends Vehicle{

    // Constructor to initialise data
    constructor(make, model, year, doors){
        //invoke the parent constructor
        super(make, model, year);
        this.doors = doors;
    }

    // Invokes the parent information method and also
    // write the number of doors to console
    Information(){
        super.Information();
        console.log(`Doors: ${this.doors}`);
    }
}

// Creates an instance of this class
let myCar = new Car(`BMW`, `F10`, 2015, 5)
myCar.Information();

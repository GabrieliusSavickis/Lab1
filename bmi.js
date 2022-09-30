class BMI {
    // constructor used to initialise data
    constructor(height, weight) {
        this.height = height;
        this.weight = weight;
    }

    //2.b.iv Method to calculate BMI
    calculateBMI() {
        let bmi = this.weight / (this.height ** 2);
        return bmi;
    }
}

// New instance of the class BMI
let myBMI = new BMI(2, 100);
// Invoke the method calculateBMI
console.log(myBMI.calculateBMI());

//shift+alt+f indent code
//ctrl+k+c comment out code
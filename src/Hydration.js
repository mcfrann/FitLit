class Hydration {
    constructor(hydration) {
        this.userID = hydration.userID;
        this.data = hydration;
        // this.dates = hydration.date;
        // this.numOunces = hydration.numOunces;
    }

    calculateAvgWater() {
        let waterAverage = this.data.reduce((acc, userLog) => {
            return acc += userLog.numOunces / this.data.length;
          }, 0);
          return waterAverage;
    }
}

export default Hydration
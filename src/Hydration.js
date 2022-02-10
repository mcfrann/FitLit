class Hydration {
    constructor(userHydration) {
        this.userID = userHydration.userID;
        this.data = userHydration;
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

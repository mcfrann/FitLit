class Hydration {
    constructor(userID, hydrationData) {
        this.userID = userID;
        this.rawData = hydrationData;
        this.userSleepData = '';
        // this.dates = hydration.date;
        // this.numOunces = hydration.numOunces;
    };

    calculateAvgWater() {
        let waterAverage = this.rawData.reduce((acc, userLog) => {
            return acc += userLog.numOunces / this.rawData.length;
        }, 0);
        return waterAverage;
    };
};

export default Hydration;

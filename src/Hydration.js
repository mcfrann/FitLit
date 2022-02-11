class Hydration {
    constructor(userID, hydrationData, date) {
        this.userID = userID;
        this.rawData = hydrationData;
        this.userHydrationData = hydrationData.filter(data => data.userID === this.userID);
        this.date = date;
    };

    calculateAvgWater() {
        let waterAverage = this.userHydrationData.reduce((acc, userLog) => {
            return acc += userLog.numOunces / this.userHydrationData.length;
        }, 0);
        return waterAverage.toFixed(1);
    };

    calculateOuncesPerDayByDate(date) {
          let totalOunces = this.userHydrationData.find(entry => entry.date === this.date)
          return totalOunces.numOunces
        }

    calculateOuncesPerDayOverWeek() {

    }
};

export default Hydration;

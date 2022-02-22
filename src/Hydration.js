class Hydration {
    constructor(userID, hydrationData, date, week) {
        this.userID = userID;
        this.rawData = hydrationData;
        this.userHydrationData = null;
        this.date = date;
        this.week = null;
    };

    findUserID(hydrationData) {
        this.userHydrationData = hydrationData.filter(data => data.userID === this.userID);
    }

    calculateAvgWater() {
        let waterAverage = this.userHydrationData.reduce((acc, userLog) => {
            return acc += userLog.numOunces / this.userHydrationData.length;
        }, 0);
        return waterAverage.toFixed(1);
    };

    calculateOuncesPerDayByDate(date) {
        let totalOunces = this.userHydrationData.find(entry => entry.date === this.date);
        return totalOunces.numOunces;
    };

    calculateOuncesPerDayOverWeek() {
       return this.week = this.userHydrationData.map(entry => entry).reverse().filter((entry, index) => (index <= 6)).reverse();
    };
};

export default Hydration;

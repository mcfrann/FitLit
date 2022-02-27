class Hydration {
    constructor(userID, date, numOunces) {
        this.userID = userID;
        this.date = date;
        this.numOunces = numOunces;
    };

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

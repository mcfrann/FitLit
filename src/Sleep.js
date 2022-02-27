class Sleep {
    constructor(userID, date, hoursSlept, sleepQuality) {
        this.userID = userID;
        this.date = date;
        this.hoursSlept = hoursSlept;
        this.sleepQuality = sleepQuality;
    };

    getUserAverageHoursSleptPerDayTotal() {
        let sleptAverage = this.userSleepData.reduce((acc, userLog) => {
            return acc += userLog.hoursSlept / this.userSleepData.length;
        }, 0);
        return sleptAverage.toFixed(1);
    };

    getUserAverageQualitySleptPerDay() {
        let qualityAverage = this.userSleepData.reduce((acc, userLog) => {
            return acc += userLog.sleepQuality / this.userSleepData.length;
        }, 0);
        return qualityAverage.toFixed(1);
    };

    getHoursSleptPerDay(date) {
        return this.userSleepData.find(entry => entry.date === date).hoursSlept;
    };

    getQualitySleptPerDay(date) {
        return this.userSleepData.find(entry => entry.date === date).sleepQuality;
    };

    calculateHrsSleptPerDayOverWeek(startDate) {
        let dateIndex = this.userSleepData.find(entry => startDate === entry.date);
        let floatingWeek = this.userSleepData.slice(dateIndex, 7).map(user => user.hoursSlept);
        let weekAverage = floatingWeek.reduce((acc, day) => {
          acc += day
          return acc
        }, 0);
        return (weekAverage / 7).toFixed(1);
     }

     calculateQualSleepPerDayOverWeek(startDate) {
        let dateIndex = this.userSleepData.find(entry => startDate === entry.date);
        let floatingWeek = this.userSleepData.slice(dateIndex, 7).map(user => user.sleepQuality);
        let weekAverage = floatingWeek.reduce((acc, day) => {
          acc += day
          return acc
        }, 0);
        return (weekAverage / 7).toFixed(1);
     };

    getAllUserSleepQuality() {
        let totalAverage = this.rawData.reduce((acc, userLog) => {
            return acc += userLog.sleepQuality / this.rawData.length;
        }, 0);
        return totalAverage.toFixed(1);
    };
};

export default Sleep;

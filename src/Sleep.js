class Sleep {
    constructor(userID, sleepData) {
        this.userID = userID;
        this.rawData = sleepData;
        this.userSleepData = null;
    };

    findUserID(sleepData) {
        this.userSleepData = (sleepData.filter(data => data.userID === this.userID));
    };
    
    userAverageHoursSleptPerDayTotal() {
        let sleptAverage = this.userSleepData.reduce((acc, userLog) => {
            return acc += userLog.hoursSlept / this.userSleepData.length;
        }, 0);
        return sleptAverage.toFixed(1);
    };

    userAverageQualitySleptPerDay() {
        let qualityAverage = this.userSleepData.reduce((acc, userLog) => {
            return acc += userLog.sleepQuality / this.userSleepData.length;
        }, 0);
        return qualityAverage.toFixed(1);
    };

    hoursSleptPerDay(date) {
        return this.userSleepData.find(entry => entry.date === date).hoursSlept;
    };

    qualitySleptPerDay(date) {
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

    allUserSleepQuality() {
        let totalAverage = this.rawData.reduce((acc, userLog) => {
            return acc += userLog.sleepQuality / this.rawData.length;
        }, 0);
        return totalAverage.toFixed(1);
    };
};

export default Sleep;

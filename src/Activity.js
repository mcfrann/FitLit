class Activity {
  constructor(user, date, activityData) {
    this.userID = user.id;
    this.date = user.date;
    this.week = user.week;
    this.strideLength = user.strideLength
    this.userActivity = null;
    this.numSteps = null;
    this.minutesActive = null;
    this.flightsOfStairs = null;
    this.milesWalked = null;
  }

  findUserActivity(activityData) {
    this.userActivity = activityData.filter(data => data.userID === this.userID);
  }

  findNumSteps() {
    this.numSteps = this.userActivity.find(data => data.date === this.date).numSteps
  }

  findMinutesActive() {
    this.minutesActive = this.userActivity.find(data => data.date === this.date).minutesActive
  }

  findStairsClimbed() {
    this.flightsOfStairs = this.userActivity.find(data => data.date === this.date).flightsOfStairs
  }

  findMilesWalked(date, userStrideLength) {
    let steps = this.userActivity.find(data => data.date === date).numSteps
    let miles = (steps * userStrideLength) / 5280
    return this.milesWalked = miles.toFixed(2)
  }

  findMinutesActiveWeekAverage(startDate) {
    let dateIndex = this.userActivity.find(entry => startDate === entry.date);
    let floatingWeek = this.userActivity.slice(dateIndex, 7).map(user => user.minutesActive);
    let weekAverage = floatingWeek.reduce((acc, day) => {
      acc += day
      return acc
    }, 0);
      return (weekAverage / 7).toFixed(1);
    }
  }



export default Activity;

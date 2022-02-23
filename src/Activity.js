class Activity {
  constructor(user, date, activityData) {
    this.userID = user.id;
    this.date = user.date;
    this.week = user.week;
    this.strideLength = user.strideLength
    // this.rawData = activityData;
    this.userActivity = null;
    this.numSteps = null;
    this.minutesActive = null;
    this.flightsOfStairs = null;
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
}


export default Activity;

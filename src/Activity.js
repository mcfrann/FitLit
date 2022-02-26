import activityData from "./data/activity-data";

class Activity {
  constructor(user, date, activityData) {
    this.userID = user.id;
    this.date = user.date;
    this.week = user.week;
    this.strideLength = user.strideLength
    this.dailyStepGoal = user.dailyStepGoal
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
    this.numSteps = this.userActivity.find(data => data.date === this.date).numSteps;
    console.log(this.numSteps)
  }

  findMinutesActive() {
    this.minutesActive = this.userActivity.find(data => data.date === this.date).minutesActive
  }

  findStairsClimbed() {
    this.flightsOfStairs = this.userActivity.find(data => data.date === this.date).flightsOfStairs
  }

  findMilesWalked(date) {
    let steps = this.userActivity.find(data => data.date === date).numSteps
    let miles = (steps * this.strideLength) / 5280
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

  determineStepGoalReached(date) {
    if (this.dailyStepGoal < this.userActivity.find(data => data.date === date).numSteps) {
      return true
    } else {
      return false
    }
  }

  findExceededGoalDays() {
    return this.userActivity.filter(data => data.numSteps > this.dailyStepGoal)
  }

  findStairRecord() {
    return this.userActivity.sort((least, most) => least.flightsOfStairs - most.flightsOfStairs).pop().flightsOfStairs
  }

  findAvgStairsAllUsers(date) {
    let activityDate = activityData.filter(data => data.date === date)
    let stairs = activityDate.map(element => element.flightsOfStairs)
    let averageStairs = stairs.reduce((acc, currentValue) => {
      return (acc += currentValue)
    }, 0) / stairs.length
    return averageStairs
  }

  findAvgStepsAllUsers(date) {
    let activityDate = activityData.filter(data => data.date === date)
    let steps = activityDate.map(element => element.numSteps)
    let averageSteps = steps.reduce((acc, currentValue) => {
      return (acc += currentValue)
    }, 0) / steps.length
    return averageSteps
  }

  findMinutesActiveOnDate(date) {
    let activityDate = activityData.filter(data => data.date === date)
    let minutes = activityDate.map(element => element.minutesActive)
    let averageMinutes = minutes.reduce((acc, currentValue) => {
      return (acc += currentValue)
    }, 0) / minutes.length
    return averageMinutes
  }
}

export default Activity;

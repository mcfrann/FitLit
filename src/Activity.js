import activityData from "./data/activity-data";

class Activity {
  constructor(userID, date, numSteps, minutesActive, flightsOfStairs) {
    this.userID = userID;
    this.date = date;
    this.numSteps = numSteps;
    this.minutesActive = minutesActive;
    this.flightsOfStairs = flightsOfStairs;
    // this.milesWalked = null;
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

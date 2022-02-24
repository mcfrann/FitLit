import {expect} from 'chai';
import Activity from '../src/Activity';
import User from '../src/user';
import hydrationData from '../src/data/hydration-data'
import userData from '../src/data/users'
import activityData from '../src/data/activity-data'
// const generateNewUser = (userData, hydrationData) => {
//   const getRandomUser = getRandomID(userData);
  // const user = new User(4, hydrationData);
  // user.findUserHydration(hydrationData)
  // // user.returnCurrentDate();
  // user.returnLastWeek();


// let userID = user.id;

describe('Activity', () => {

  const user = new User(userData[3], hydrationData);
  user.findUserHydration(hydrationData)

  user.returnCurrentDate();
  user.returnLastWeek();

  const activity = new Activity(user, user.date, activityData);


  it('should be a function', function () {
    expect(Activity).to.be.a('function');
  });

  it('should be an instance of activity', function () {
    expect(activity).to.be.an.instanceOf(Activity);
  });

  it('should have a current user id', function () {
    expect(activity.userID).to.equal(4);
  });

  it('should show current date', function () {
    expect(activity.date).to.equal(user.date);
  });

  it('should show current week', function () {
    expect(activity.week).to.equal(user.week)
  });

  it('should show number of steps for date', function () {
    activity.findUserActivity(activityData)
    activity.findNumSteps()
    expect(activity.numSteps).to.equal(4337);
  });

  it('should show minutes active', function () {
    activity.findMinutesActive()
    expect(activity.minutesActive).to.equal(135);
  });

  it('should show flights of stairs climbed', function () {
    activity.findStairsClimbed()
    expect(activity.flightsOfStairs).to.equal(21);
  });

  it('should find miles walked for date', function () {
    activity.findMilesWalked(user.date, user.strideLength)
    expect(activity.milesWalked).to.equal('2.55');
  });

  it('should find minutes active averaged for a given week', function () {
    let minutesOverWeek = activity.findMinutesActiveWeekAverage(user.date)
    expect(minutesOverWeek).to.equal('156.4');
  });

  it('should determine if user step goal was reached on day', function () {
    let stepGoal = activity.determineStepGoalReached(user, user.date)
    expect(stepGoal).to.equal(true);
  });

  it('should find all days where step goal was exceeded', function () {
    let daysExceeded = activity.findExceededGoalDays(user)
    expect(daysExceeded[0]).to.eql({
      userID: 4,
      date: '2019/06/16',
      numSteps: 10689,
      minutesActive: 204,
      flightsOfStairs: 10
    });
  });

  it('should find users alltime stair record', function () {
    let flights = activity.findStairRecord()
    expect(flights).to.equal(50);
  });

  it('should find all users average stairs climbed', function () {
    let averageStairs = activity.findAvgStairsAllUsers(user.date)
    expect(averageStairs).to.equal(25.28);
  });

  it('should find all users average steps', function () {
    let averageSteps = activity.findAvgStepsAllUsers(user.date)
    expect(averageSteps).to.equal(8322.24);
  });

  it('should find minutes active for all users on date', function () {
    let minutesActive = activity.findMinutesActiveOnDate(user.date)
    expect(minutesActive).to.equal(147.96);
  });
});

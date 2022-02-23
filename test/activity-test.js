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

  // it('should show flights of stairs climbed', function () {
  //   activity.findM
  //   expect(activity.flightsOfStairs).to.equal(32);
  // });
});

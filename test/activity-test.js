import {expect} from 'chai';
import Activity from '../src/Activity';
import User from '../src/user';
import hydrationData from '../src/data/hydration-data'
import userData from '../src/data/users'
import activityData from '../src/data/activity-data'

describe('Activity', () => {

  const user = new User(userData[3], hydrationData);
  user.findUserHydration(hydrationData);
  user.returnCurrentDate();
  user.returnLastWeek();

  const user2 = new User(userData[4], hydrationData);
  user2.findUserHydration(hydrationData);
  user2.returnCurrentDate();
  user2.returnLastWeek();

  const user3 = new User(userData[5], hydrationData);
  user3.findUserHydration(hydrationData);
  user3.returnCurrentDate();
  user3.returnLastWeek();

  const activity = new Activity(user, user.date, activityData);
  const activity2 = new Activity(user2, user2.date, activityData);
  const activity3 = new Activity(user3, user3.date, activityData);


  it('should be a function', function () {
    expect(Activity).to.be.a('function');
  });

  it('should be an instance of activity', function () {
    expect(activity).to.be.an.instanceOf(Activity);
    expect(activity2).to.be.an.instanceOf(Activity);
    expect(activity3).to.be.an.instanceOf(Activity);
  });

  it('should have a current user id', function () {
    expect(activity.userID).to.equal(4);
    expect(activity2.userID).to.equal(5);
    expect(activity3.userID).to.equal(6);
  });

  it('should show current date', function () {
    expect(activity.date).to.equal('2020/01/22');
    expect(activity2.date).to.equal('2020/01/22');
  });

  it('should show current week', function () {
    expect(activity.week).to.eql([
      '2020/01/16',
      '2020/01/17',
      '2020/01/18',
      '2020/01/19',
      '2020/01/20',
      '2020/01/21',
      '2020/01/22'
    ]);

    expect(activity2.week).to.eql([
      '2020/01/16',
      '2020/01/17',
      '2020/01/18',
      '2020/01/19',
      '2020/01/20',
      '2020/01/21',
      '2020/01/22'
    ]);
  });

  it('should show number of steps for date', function () {
    activity.findUserActivity(activityData);
    activity.findNumSteps();
    activity2.findUserActivity(activityData);
    activity2.findNumSteps();
    activity3.findUserActivity(activityData);
    activity3.findNumSteps();

    expect(activity.numSteps).to.equal(4337);
    expect(activity2.numSteps).to.equal(12065);
    expect(activity3.numSteps).to.equal(3278);
  });

  it('should show minutes active', function () {
    activity.findMinutesActive();
    activity2.findMinutesActive();
    activity3.findMinutesActive();

    expect(activity.minutesActive).to.equal(135);
    expect(activity2.minutesActive).to.equal(102);
    expect(activity3.minutesActive).to.equal(133);
  });

  it('should show flights of stairs climbed', function () {
    activity.findStairsClimbed();
    activity2.findStairsClimbed();
    activity3.findStairsClimbed();

    expect(activity.flightsOfStairs).to.equal(21);
    expect(activity2.flightsOfStairs).to.equal(34);
    expect(activity3.flightsOfStairs).to.equal(30);
  });

  it('should find miles walked for date', function () {
    activity.findMilesWalked(user.date, user.strideLength);
    activity2.findMilesWalked(user2.date, user2.strideLength);

    expect(activity.milesWalked).to.equal('2.55');
    expect(activity2.milesWalked).to.equal('7.08');
  });

  it('should find minutes active averaged for a given week', function () {
    let minutesOverWeek = activity.findMinutesActiveWeekAverage(user.date);
    let minutesOverWeek2 = activity2.findMinutesActiveWeekAverage(user2.date);

    expect(minutesOverWeek).to.equal('144.6');
    expect(minutesOverWeek2).to.equal('167.9');
  });

  it('should determine if user step goal was reached on day', function () {
    let stepGoal = activity.determineStepGoalReached(user, user.date);
    let stepGoal2 = activity2.determineStepGoalReached(user2, user2.date);

    expect(stepGoal).to.equal(true);
    expect(stepGoal2).to.equal(true);
  });

  it('should find all days where step goal was exceeded', function () {
    let daysExceeded = activity.findExceededGoalDays(user);
    let daysExceeded2 = activity2.findExceededGoalDays(user2);

    expect(daysExceeded[0]).to.eql({
      userID: 4,
      date: "2020/01/17",
      flightsOfStairs: 49,
      minutesActive: 267,
      numSteps: 12051
    });
    expect(daysExceeded2[0]).to.eql({
      userID: 5,
      date: "2020/01/16",
      flightsOfStairs: 16,
      minutesActive: 260,
      numSteps: 12540
    })
  });

  it('should find users alltime stair record', function () {
    let flights = activity.findStairRecord();
    let flights2 = activity2.findStairRecord();

    expect(flights).to.equal(49);
    expect(flights2).to.equal(46);
  });

  it('should find all users average stairs climbed', function () {
    let averageStairs = activity.findAvgStairsAllUsers(user.date);

    expect(averageStairs).to.equal(25.28);
  });

  it('should find all users average steps', function () {
    let averageSteps = activity.findAvgStepsAllUsers(user.date);

    expect(averageSteps).to.equal(8322.24);
  });

  it('should find minutes active for all users on date', function () {
    let minutesActive = activity.findMinutesActiveOnDate(user.date);

    expect(minutesActive).to.equal(147.96);
  });
});

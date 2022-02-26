import { expect } from 'chai';
import Sleep from '../src/Sleep';
import User from '../src/User';
import sleepData from '../src/data/sleep-data'
import userData from '../src/data/users'
import hydrationData from '../src/data/hydration-data'


describe('Sleep', () => {
  const user = new User(userData[3], hydrationData);
  const sleep = new Sleep(4, sleepData);

  it('should be a function', function () {
    expect(Sleep).to.be.a('function');
  });

  it('should be an instance of sleep', function () {
    expect(sleep).to.be.an.instanceOf(Sleep);
  });

  it('should have a current user id', function () {
    expect(sleep.userID).to.equal(4);
  });

  it('should have access to sleep data', function () {
    expect(sleep.rawData).to.equal(sleepData);
  });

  it('should calculate average hours slept per day', function () {
    sleep.findUserID(sleepData)
    const avg = sleep.getUserAverageHoursSleptPerDayTotal();
    expect(avg).to.equal('7.1');
  });

  it('should calculate average quality slept per day', function () {
    const avg = sleep.getUserAverageQualitySleptPerDay();
    expect(avg).to.equal("2.6");
  });

  it('should find hours slept in a day', function () {
    const hrsSlept = sleep.getHoursSleptPerDay("2019/06/15");
    expect(hrsSlept).to.equal(5.4);
  });

  it('should find quality slept in a day', function () {
    const qualSlept = sleep.getQualitySleptPerDay("2019/06/15");
    expect(qualSlept).to.equal(3);
  });

  it('should calculate hours slept over week', function () {
    const hrsOverWeek = sleep.calculateHrsSleptPerDayOverWeek("2019/06/15");
    expect(hrsOverWeek).to.equal('7.1');
  });

  it("should calculate quality slept over week", function () {
    const qualOverWeek = sleep.calculateQualSleepPerDayOverWeek("2019/06/15");
    expect(qualOverWeek).to.equal('2.6');
  });

  it("should calculate average sleep quality for all users", function () {
    const avgQualAllUsers = sleep.getAllUserSleepQuality();
    expect(avgQualAllUsers).to.equal('2.9');
  });
});

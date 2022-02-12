import { expect } from 'chai';
import Sleep from '../src/Sleep';
import sleepData from '../src/data/sleep-data'
import userData from '../src/data/users'
import hydrationData from '../src/data/hydration-data'


let user =  {
    "id": 4,
    "name": "Mae Connelly",
    "address": "28926 Schinner Islands, Turnermouth NE 23720-3230",
    "email": "Marcos_Pollich@hotmail.com",
    "strideLength": 3.1,
    "dailyStepGoal": 4000,
    "friends": [
        48,
        7,
        44,
        8
    ]
    }

let userID = user.id

describe('Sleep', () => {
  const sleep = new Sleep(userID, sleepData);

  it('should be a function', function () {
    expect(Sleep).to.be.a('function');
  });

  it('should be an instance of sleep', function () {
    expect(sleep).to.be.an.instanceOf(Sleep)
  })

  it('should have a current user id', function () {
    expect(sleep.userID).to.equal(4)
  })

  it('should have access to sleep data', function () {
    expect(sleep.rawData).to.equal(sleepData)
  })

  it('should calculate average hours slept per day', function () {
    const avg = sleep.userAverageHoursSleptPerDay();
    expect(avg).to.equal('7.4');
  })

  it('should calculate average quality slept per day', function () {
    const avg = sleep.userAverageQualitySleptPerDay();
    expect(avg).to.equal("3.1")
  })

  it('should find hours slept in a day', function () {
    const hrsSlept = sleep.hoursSleptPerDay("2019/06/15");
    expect(hrsSlept).to.equal(5.4);
  })

  it('should find quality slept in a day', function () {
    const qualSlept = sleep.qualitySleptPerDay("2019/06/15");
    expect(qualSlept).to.equal(3);
  })

  it('should calculate hours slept over week', function () {
    const hrsOverWeek = sleep.calculateHrsSleptPerDayOverWeek("2019/06/15");
    expect(hrsOverWeek).to.eql([5.4, 8.3, 5.7, 5.9, 5.2, 8.3, 10.6])
  })

  it("should calculate quality slept over week", function () {
    const qualOverWeek = sleep.calculateQualSleepPerDayOverWeek("2019/06/15");
    expect(qualOverWeek).to.eql([3, 4.5, 1.1, 2.5, 2.3, 1.9, 2.7])
  })

  it("should calculate average sleep quality for all users", function () {
    const avgQualAllUsers = sleep.allUserSleepQuality();
    expect(avgQualAllUsers).to.equal('3.0')
  })
});

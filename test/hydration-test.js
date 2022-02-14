import { expect } from 'chai';
import Hydration from '../src/Hydration';
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
    8,
  ],
};

let userID = user.id;

describe('Hydration', () => {
  const hydration = new Hydration(userID, hydrationData, "2019/06/15");

  it('should be a function', function () {
    expect(Hydration).to.be.a('function');
  });

  it('should be an instance of sleep', function () {
    expect(hydration).to.be.an.instanceOf(Hydration);
  });

  it('should have a current user id', function () {
    expect(hydration.userID).to.equal(4);
  });

  it('should have access to hydration data', function () {
    expect(hydration.rawData).to.equal(hydrationData);
  });

  it('should show date', function () {
    expect(hydration.date).to.equal("2019/06/15");
  });

  it('should show week', function () {
    const hydrationWeek = hydration.calculateOuncesPerDayOverWeek()
    expect(hydrationWeek).to.eql([
      { userID: 4, date: '2020/01/16', numOunces: 28 },
      { userID: 4, date: '2020/01/17', numOunces: 38 },
      { userID: 4, date: '2020/01/18', numOunces: 61 },
      { userID: 4, date: '2020/01/19', numOunces: 74 },
      { userID: 4, date: '2020/01/20', numOunces: 96 },
      { userID: 4, date: '2020/01/21', numOunces: 90 },
      { userID: 4, date: '2020/01/22', numOunces: 68 },
    ]);
  });

  it('should calculate average water consumed per day', function () {
    const avg = hydration.calculateAvgWater();
    expect(avg).to.equal('63.1');
  });

  it('should calculate ounces per day by date', function () {
    const ouncesPerDay = hydration.calculateOuncesPerDayByDate("2019/06/15");
    expect(ouncesPerDay).to.equal(85);
  });
  
  it('should calculate ounces per day over a week', function () {
    const ouncesPerWeek = hydration.calculateOuncesPerDayOverWeek();
    const ouncesPerWeekByDay = ouncesPerWeek.map(entry => entry.numOunces);
    expect(ouncesPerWeekByDay).to.eql([28, 38, 61, 74, 96, 90, 68]);
  });
});

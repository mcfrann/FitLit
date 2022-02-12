import { expect } from 'chai';
import Sleep from '../src/Sleep';

let userID = 4;
let userData = [{
    "id": 1,
    "name": "Luisa Hane",
    "address": "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
    "email": "Diana.Hayes1@hotmail.com",
    "strideLength": 4.3,
    "dailyStepGoal": 10000,
    "friends": [
    16,
    4,
    8
    ]
    },
    {
    "id": 2,
    "name": "Jarvis Considine",
    "address": "30086 Kathryn Port, Ciceroland NE 07273",
    "email": "Dimitri.Bechtelar11@gmail.com",
    "strideLength": 4.5,
    "dailyStepGoal": 5000,
    "friends": [
    9,
    18,
    24,
    19
    ]
    },
    {
    "id": 3,
    "name": "Herminia Witting",
    "address": "85823 Bosco Fork, East Oscarstad MI 85126-5660",
    "email": "Elwin.Tromp@yahoo.com",
    "strideLength": 4.4,
    "dailyStepGoal": 5000,
    "friends": [
    19,
    11,
    42,
    33
    ]
    },
    {
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
    },
    {
    "id": 5,
    "name": "Erick Schaden",
    "address": "514 Mayert Walk, Jordaneside SC 55023-6523",
    "email": "Vanessa_Gerhold@gmail.com",
    "strideLength": 3.1,
    "dailyStepGoal": 8000,
    "friends": [
    13,
    44,
    49,
    33,
    10
    ]
    }]
let sleepData = [{
    "userID": 1,
    "date": "2019/06/15",
    "hoursSlept": 6.1,
    "sleepQuality": 2.2
    },
    {
    "userID": 2,
    "date": "2019/06/15",
    "hoursSlept": 7,
    "sleepQuality": 4.7
    },
    {
    "userID": 3,
    "date": "2019/06/15",
    "hoursSlept": 10.8,
    "sleepQuality": 4.7
    },
    {
    "userID": 4,
    "date": "2019/06/15",
    "hoursSlept": 5.4,
    "sleepQuality": 3
    },
    {
    "userID": 5,
    "date": "2019/06/15",
    "hoursSlept": 4.1,
    "sleepQuality": 3.6
    }]

describe('Sleep', () => {
  const sleep = new Sleep(userID, sleepData);

  it('should be a function', function () {
    expect(sleep).to.be.a('function');
  });

//   it('should be an instance of user', function () {
//     expect(user).to.be.an.instanceOf(User)
//   })

//   it('should have an id', function () {
//     expect(user.id).to.equal(4)
//   })

//   it('should have a name', function () {
//     expect(user.name).to.equal("Mae Connelly")
//   })

//   it('should have an address', function () {
//     expect(user.address).to.equal("28926 Schinner Islands, Turnermouth NE 23720-3230")
//   })

//   it('should have an email', function () {
//     expect(user.email).to.equal("Marcos_Pollich@hotmail.com")
//   })

//   it('should have a stride length', function () {
//     expect(user.strideLength).to.equal(3.1)
//   })

//   it('should have a daily step goal', function () {
//     expect(user.dailyStepGoal).to.equal(4000)
//   })

//   it('should have friends', function () {
//     expect(user.friends).to.eql([48,7,44,8])
//   })

//   it("should return a user's first name only", function () {
//     expect(user.returnFirstName()).to.equal("Mae")
//   })
});
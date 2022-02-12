
//----------------- Imports--------------------
import fetchAPI from './apiCalls';
import User from '../src/user';
import Hydration from '../src/Hydration'
import UserRepository from './UserRepository';
import Sleep from '../src/Sleep';
import './css/styles.css';

//----------------- Query Selectors ------------
const userInfo = document.querySelector('.user-info');
const userName = document.querySelector('.user-name');
const welcomeMessage = document.querySelector('.welcome-message');
const hydrationWidget = document.querySelector(".user-hydration");
const sleepWidget = document.querySelector(".user-sleep");
const activity = document.querySelector(".user-activity");

//----------------- Global Vars ------------------
let userData = [];
let hydrationData = [];
let sleepData = [];
let activityData = [];
let userRepo = '';
let user = '';
let hydration = '';
let sleep = '';
const fetchUserData = fetchAPI.getUserData();
const fetchHydrationData = fetchAPI.getHydrationData();
const fetchSleepData = fetchAPI.getSleepData();
const fetchActivityData = fetchAPI.getActivityData();

//---------------- Functions --------------------
const getRandomID = array => {
  const randomIndex = array[Math.floor(Math.random() * array.length)];
  return randomIndex;
};

const generateNewUser = (userData) => {
  const getRandomUser = getRandomID(userData);
  user = new User(getRandomUser, hydrationData);
  user.returnCurrentDate()
  user.returnLastWeek()
  userRepo = new UserRepository(userData, user);
  hydration = new Hydration(user.id, hydrationData, user.date);
  hydration.calculateOuncesPerDayOverWeek()
  sleep = new Sleep(user.id, sleepData);
  sleep.userAverageHoursSleptPerDay();
  sleep.userAverageQualitySleptPerDay();
  sleep.hoursSleptPerDay('2020/01/20');
  sleep.hoursSleptPerDay('2020/01/20');
  sleep.qualitySleptPerDay('2020/01/20');
  sleep.allUserSleepQuality();
  sleep.calculateHrsSleptPerDayOverWeek('2019/06/15');
  sleep.calculateQualSleepPerDayOverWeek('2019/06/15');
  console.log(user);
  console.log(hydration);
  console.log(sleep);
  displayCurrentUser();
};

const displayCurrentUser = () => {
  displayUserName(user);
  displayUserInfo(user);
  displayHydrationInfo(hydration);
  displaySleepInfo(sleep);
};


//---------------- Updating DOM --------------------

const displayUserName = user => {
  return welcomeMessage.innerText = `Welcome, ${user.returnFirstName()}!`;
};

const displayUserInfo = user => {
  return userInfo.innerText = `
  ${user.name}
  ${user.email}
  ${user.address}
  ${user.strideLength}
  ${user.dailyStepGoal}
  ${user.friends}

  Average amongst all users: ${user.dailyStepGoal}/${userRepo.averageStepGoal()}
`};



const displayHydrationInfo = user => {
  return hydrationWidget.innerText = `
  Water today: ${hydration.calculateOuncesPerDayByDate()}
  2020/01/16: ${hydration.week[0].numOunces}
  2020/01/17: ${hydration.week[1].numOunces}
  2020/01/18: ${hydration.week[2].numOunces}
  2020/01/19: ${hydration.week[3].numOunces}
  2020/01/20: ${hydration.week[3].numOunces}
  2020/01/21: ${hydration.week[3].numOunces}
  2020/01/22: ${hydration.week[3].numOunces}
`};

//  ${hydration.calculateAvgWater()}

const displaySleepInfo = sleep => {
  return sleepWidget.innerText = `
  ${user.returnFirstName()}'s Sleep Stats
  Today:
  Hours slept: ${sleep.hoursSleptPerDay('2020/01/20')}
  Sleep quality: ${sleep.qualitySleptPerDay('2020/01/20')}
  Over last week:
  Average hours slept: ${sleep.calculateHrsSleptPerDayOverWeek('2019/06/15')}
  Average sleep quality: ${sleep.calculateQualSleepPerDayOverWeek('2019/06/15')}
  All time:
  Average hours slept: ${sleep.userAverageHoursSleptPerDay()}
  Average sleep quality: ${sleep.userAverageQualitySleptPerDay()}
  `
};



//---------------- Scripts ------------------------

Promise.all([fetchUserData, fetchHydrationData, fetchSleepData, fetchActivityData])
.then(values => {
  userData = values[0].userData;
  hydrationData = values[1].hydrationData;
  sleepData = values[2].sleepData;
  activityData = values[3].activityData;
  generateNewUser(userData);
});


//---------------- Default/Example given ------------------------
// console.log(userData,"<>>>>userData")
// // An example of how you tell webpack to use a CSS file
// import './css/styles.css';
//
// // An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/turing-logo.png'
//
// console.log('This is the JavaScript entry file - your code begins here.');
//
// // An example of how you tell webpack to use a JS file
//

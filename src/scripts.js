
//----------------- Imports--------------------
import fetchAPI from './apiCalls';
import User from '../src/user';
import Hydration from '../src/Hydration'
import UserRepository from './UserRepository';
import Sleep from '../src/Sleep';
import Friend from '../src/friend'
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

const generatePageUser = (userData) => {
  generateNewUser(userData, hydrationData, sleepData, activityData);
  generateNewUserRepo(userData, user);
  generateNewHydration(user.id, hydrationData, user.date);
  generateNewSleep(user.id, sleepData);
  generateNewFriends(user.friends, userData, activityData);
  // console.log(user.formattedFriends)
  // console.log(user);
  // console.log(hydration);
  // console.log(sleep);
  displayCurrentUser();
};

const generateNewUser = (userData, hydrationData) => {
  const getRandomUser = getRandomID(userData);
  const newUser = new User(getRandomUser, hydrationData, sleepData, activityData);
  newUser.returnCurrentDate();
  newUser.returnLastWeek();
  return user = newUser;
};

const generateNewUserRepo = (userData, user) => {
  userRepo = new UserRepository(userData, user);
  return userRepo = userRepo;
};

const generateNewHydration = () => {
  const newHydration = new Hydration(user.id, hydrationData, user.date);
  newHydration.calculateOuncesPerDayOverWeek();
  return hydration = newHydration;
};

const generateNewSleep = () => {
  const newSleep = new Sleep(user.id, sleepData);
  newSleep.userAverageHoursSleptPerDay();
  newSleep.userAverageQualitySleptPerDay();
  newSleep.hoursSleptPerDay('2020/01/20');
  newSleep.hoursSleptPerDay('2020/01/20');
  newSleep.qualitySleptPerDay('2020/01/20');
  newSleep.allUserSleepQuality();
  newSleep.calculateHrsSleptPerDayOverWeek('2019/06/15');
  newSleep.calculateQualSleepPerDayOverWeek('2019/06/15');
  return sleep = newSleep;
};

const generateNewFriends = (userFriends, userData, activityData) => {
  let userRealFriends = [];
  userFriends.map(friendId => userRealFriends.push(new Friend(friendId, userData, activityData)));
  userRealFriends.forEach(friend => {
    friend.assignName();
  });
  return user.formattedFriends = userRealFriends;
};

const displayCurrentUser = () => {
  displayUserName(user);
  displayUserInfo(user);
  displayHydrationInfo(user, hydration);
  displaySleepInfo(sleep);
};


//---------------- Updating DOM --------------------

const displayUserName = user => {
  return welcomeMessage.innerText = `Welcome, ${user.returnFirstName()}!`;
};

const displayUserInfo = user => {
  let friendFirstName = user.formattedFriends.map(friend => ' ' + friend.name.split(" ")[0])
  return userInfo.innerText = `
  ${user.name}
  ${user.email}
  ${user.address}
  ${user.strideLength}
  ${user.dailyStepGoal}
  ${friendFirstName}

  Average amongst all users: ${user.dailyStepGoal}/${userRepo.averageStepGoal()}
`};

const displayHydrationInfo = (user, hydration) => {
  return hydrationWidget.innerText = `
  ${user.returnFirstName()}'s Hydration Stats
  
  Oz of water today: ${hydration.calculateOuncesPerDayByDate()}
  2020/01/16: ${hydration.week[0].numOunces}
  2020/01/17: ${hydration.week[1].numOunces}
  2020/01/18: ${hydration.week[2].numOunces}
  2020/01/19: ${hydration.week[3].numOunces}
  2020/01/20: ${hydration.week[4].numOunces}
  2020/01/21: ${hydration.week[5].numOunces}
  2020/01/22: ${hydration.week[6].numOunces}
`};

const displaySleepInfo = sleep => {
  return sleepWidget.innerText = `
  ${user.returnFirstName()}'s Sleep Stats

  Today:

  Hours slept: ${sleep.hoursSleptPerDay('2020/01/20')} | Sleep quality: ${sleep.qualitySleptPerDay('2020/01/20')}

  Over last week:

  Average hours slept: ${sleep.calculateHrsSleptPerDayOverWeek('2019/06/15')} | Average sleep quality: ${sleep.calculateQualSleepPerDayOverWeek('2019/06/15')}

  All time:

  Average hours slept: ${sleep.userAverageHoursSleptPerDay()} | Average sleep quality: ${sleep.userAverageQualitySleptPerDay()}
  `
};


//---------------- Scripts ------------------------

Promise.all([fetchUserData, fetchHydrationData, fetchSleepData, fetchActivityData])
.then(values => {
  userData = values[0].userData;
  hydrationData = values[1].hydrationData;
  sleepData = values[2].sleepData;
  activityData = values[3].activityData;
  generatePageUser(userData);
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

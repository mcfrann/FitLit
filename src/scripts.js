
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
  user = new User(getRandomUser);
  hydration = new Hydration(user.id, hydrationData);
  sleep = new Sleep(user.id, sleepData);
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

  Average amongst all users: ${user.dailyStepGoal}
`};

//NOT WORKING: | ${userRepo.averageStepGoal()

const displayHydrationInfo = user => {
  return hydrationWidget.innerText = `
  ${hydration.calculateAvgWater()}
`};

const displaySleepInfo = sleep => {
  return sleepWidget.innerText = `
  ${sleep.userID}`
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

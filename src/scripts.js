//----------------- Imports--------------------
import fetchAPI from './apiCalls';
import User from '../src/user';
import Hydration from '../src/Hydration';
import UserRepository from './UserRepository';
import Sleep from '../src/Sleep';
import Friend from '../src/friend';
import './css/styles.css';

//----------------- Query Selectors ------------
const userInfo = document.querySelector('.user-info');
const userName = document.querySelector('.user-name');
const welcomeMessage = document.querySelector('.welcome-message');
const hydrationWidget = document.querySelector(".user-hydration");
const sleepWidget = document.querySelector(".user-sleep");
const activityWidget = document.querySelector(".user-activity");

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
  newSleep.userAverageHoursSleptPerDayTotal();
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
  displayActivityInfo();
};

//---------------- Updating DOM --------------------
const displayUserName = user => {
  return welcomeMessage.innerText = `Welcome,
  ${user.returnFirstName()}.`;
};

const displayUserInfo = user => {
  let friendFirstName = user.formattedFriends.map(friend => ' ' + friend.name.split(" ")[0]);
  return userInfo.innerHTML = `
  <h2>About you:</h2>
  <p>${user.name}<br>
  ${user.email}<br>
  ${user.address}<br><br>
  Your stride length:<br>
  ${user.strideLength} feet<br><br>
  Your daily step goal:<br>
  ${user.dailyStepGoal}<br><br>
  Your friends:<br>
  ${friendFirstName}<br><br>
  Your step goal compared to the average step goal amongst all users:<br>
  ${user.dailyStepGoal}/${userRepo.averageStepGoal()}</p><br>
`};

const displayHydrationInfo = (user, hydration) => {
  return hydrationWidget.innerHTML = `

  <p>
    <img src="https://user-images.githubusercontent.com/88151743/153778199-6085b751-5f2d-45b8-b6f4-342bec5fbb5c.png"/>
  </p>

  <h2>Your Hydration Stats:</h2>
  <h3> Oz of water today: ${hydration.calculateOuncesPerDayByDate()}</h3><br>
  Oz of water on ${hydration.week[0].date}: ${hydration.week[0].numOunces}<br><br>
  Oz of water on ${hydration.week[1].date}: ${hydration.week[1].numOunces}<br><br>
  Oz of water on ${hydration.week[2].date}: ${hydration.week[2].numOunces}<br><br>
  Oz of water on ${hydration.week[3].date}: ${hydration.week[3].numOunces}<br><br>
  Oz of water on ${hydration.week[4].date}: ${hydration.week[4].numOunces}<br><br>
  Oz of water on ${hydration.week[5].date}: ${hydration.week[5].numOunces}<br><br>
  Oz of water on ${hydration.week[6].date}: ${hydration.week[6].numOunces}<br><br>
`};

const displaySleepInfo = sleep => {
  return sleepWidget.innerHTML = `
  <p>
    <img src="https://img.icons8.com/external-justicon-lineal-justicon/64/000000/external-sleep-emoji-justicon-lineal-justicon.png"/>
  </p>
  <h2>Your Sleep Stats:</h2>
  Today:<br>
  Hours slept: ${sleep.hoursSleptPerDay('2020/01/20')} | Sleep quality: ${sleep.qualitySleptPerDay('2020/01/20')}<br><br>
  Over last week:<br>
  Average hours slept: ${sleep.calculateHrsSleptPerDayOverWeek('2019/06/15')} | Average sleep quality: ${sleep.calculateQualSleepPerDayOverWeek('2019/06/15')}<br><br>
  All time:<br>
  Average hours slept: ${sleep.userAverageHoursSleptPerDayTotal()} | Average sleep quality: ${sleep.userAverageQualitySleptPerDay()}
`};

const displayActivityInfo = () => {
  return activityWidget.innerHTML = `
    <p>
  <img src="https://img.icons8.com/ios/50/000000/walking--v1.png"/>
    <p>
  <h2>Your Activity Data:</h2>
`};

//---------------- Scripts ------------------------
Promise.all([fetchUserData, fetchHydrationData, fetchSleepData, fetchActivityData])
.then(values => {
  userData = values[0].userData;
  hydrationData = values[1].hydrationData;
  sleepData = values[2].sleepData;
  activityData = values[3].activityData;
  generatePageUser(userData);
});

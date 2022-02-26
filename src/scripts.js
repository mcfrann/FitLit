//----------------- Imports--------------------
import fetchAPI from './apiCalls';
import domUpdates from './domUpdates';
import User from '../src/user';
import Hydration from '../src/Hydration';
import UserRepository from './UserRepository';
import Sleep from '../src/Sleep';
import Activity from '../src/Activity';
import './css/styles.css';


//----------------- Global Vars ------------------
let userData = null;
let hydrationData = null;
let sleepData = null;
let activityData = null;
let currentUserRepo = null;
let currentUser = null;
let currentHydration = null;
let currentSleep = null;
let currentActivity = null;
const fetchUserData = fetchAPI.getUserData();
const fetchHydrationData = fetchAPI.getHydrationData();
const fetchSleepData = fetchAPI.getSleepData();
const fetchActivityData = fetchAPI.getActivityData();

//---------------- Functions --------------------
const renderPage = () => {
  Promise.all([fetchUserData, fetchHydrationData, fetchSleepData, fetchActivityData])
    .then(values => {
      userData = values[0].userData;
      hydrationData = values[1].hydrationData;
      sleepData = values[2].sleepData;
      activityData = values[3].activityData;
      generatePageUser(userData);
    })
};

const getRandomID = array => {
  const randomIndex = array[Math.floor(Math.random() * array.length)];
  return randomIndex;
};

const generatePageUser = (userData) => {
  generateNewUser(userData, hydrationData);
  currentUser.generateFormattedFriends(currentUser.friends, userData);
  generateNewUserRepo(userData, currentUser);
  generateNewHydration(currentUser.id, hydrationData, currentUser.date);
  generateNewSleep(currentUser.id, sleepData);
  generateNewActivity(currentUser, currentUser.date, activityData);
  runActivityMethods(activityData)
  displayCurrentUser(currentUser, currentHydration, currentUserRepo, currentSleep, currentActivity);
};

const generateNewUser = (userData, hydrationData) => {
  const getRandomUser = getRandomID(userData);
  const newUser = new User(getRandomUser, hydrationData, sleepData, activityData);
  newUser.findUserHydration(hydrationData)
  newUser.returnCurrentDate();
  newUser.returnLastWeek();
  return currentUser = newUser;
};

const generateNewUserRepo = (userData, user) => {
  let userRepo = new UserRepository(userData, user);
  return currentUserRepo = userRepo;
};

const generateNewHydration = () => {
  const newHydration = new Hydration(currentUser.id, hydrationData, currentUser.date);
  newHydration.findUserID(hydrationData);
  newHydration.calculateOuncesPerDayOverWeek();
  return currentHydration = newHydration;
};

const generateNewSleep = () => {
  const newSleep = new Sleep(currentUser.id, sleepData);
  newSleep.findUserID(sleepData);
  newSleep.getUserAverageHoursSleptPerDayTotal();
  newSleep.getUserAverageQualitySleptPerDay();
  newSleep.getHoursSleptPerDay('2020/01/20');
  newSleep.getQualitySleptPerDay('2020/01/20');
  newSleep.getAllUserSleepQuality();
  newSleep.calculateHrsSleptPerDayOverWeek('2019/06/15');
  newSleep.calculateQualSleepPerDayOverWeek('2019/06/15');
  return currentSleep = newSleep;
};

const generateNewActivity = (user, activityData) => {
  const newActivity = new Activity(user, activityData);
  return currentActivity = newActivity;
}

const runActivityMethods = (activityData) => {
  currentActivity.findUserActivity(activityData);
  currentActivity.findNumSteps();
  currentActivity.findMinutesActive();
  currentActivity.findStairsClimbed();
  currentActivity.findMilesWalked('2019/06/15');
  currentActivity.findMinutesActiveWeekAverage('2019/06/15');
  currentActivity.determineStepGoalReached('2019/06/15');
  currentActivity.findExceededGoalDays();
  currentActivity.findStairRecord();
  currentActivity.findAvgStairsAllUsers('2019/06/15');
  currentActivity.findAvgStepsAllUsers('2019/06/15');
  currentActivity.findMinutesActiveOnDate('2019/06/15');
}

const displayCurrentUser = (user, hydration, userRepo, sleep, activity) => {
  domUpdates.displayUserName(user);
  domUpdates.displayUserInfo(user, userRepo);
  domUpdates.displayHydrationInfo(user, hydration);
  domUpdates.displaySleepInfo(sleep);
  domUpdates.displayActivityInfo(activity);
};

//---------------- Scripts ------------------------

window.onload = (event) => (event, renderPage());

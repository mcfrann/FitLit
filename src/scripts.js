//----------------- Imports--------------------
import fetchAPI from './apiCalls';
import domUpdates from './domUpdates';
import User from './User';
import Hydration from '../src/Hydration';
import UserRepository from './UserRepository';
import Sleep from '../src/Sleep';
import Activity from '../src/Activity';
import './css/styles.css';

//----------------- Global Vars ------------------
let globalCurrentUserRepo = null;

const fetchUserData = fetchAPI.getUserData();
const fetchHydrationData = fetchAPI.getHydrationData();
const fetchSleepData = fetchAPI.getSleepData();
const fetchActivityData = fetchAPI.getActivityData();

const renderPage = () => {
  Promise.all([fetchUserData, fetchHydrationData, fetchSleepData, fetchActivityData])
  .then(values => {
    const userData = values[0].userData.map(data => new User(data.id, data.name, data.address, data.email, data.strideLength, data.dailyStepGoal, data.friends))
    const hydrationData = values[1].hydrationData.map(data => new Hydration(data.userID, data.date, data.numOunces))
    const sleepData = values[2].sleepData.map(data => new Sleep(data.userID, data.date, data.hoursSlept, data.sleepQuality))
    const activityData = values[3].activityData.map(data => new Activity(data.userID, data.date, data.numSteps, data.minutesActive, data.flightsOfStairs))
    generateNewUserRepo(userData, hydrationData, sleepData, activityData)
    globalCurrentUserRepo.buildUserDataArrays()
    globalCurrentUserRepo.determineCurrentUser(getRandomID(globalCurrentUserRepo.userData).id)
    globalCurrentUserRepo.findAverageStepGoal()
    globalCurrentUserRepo.currentUser.returnFirstName()
    globalCurrentUserRepo.generateFormattedFriends()
    console.log(globalCurrentUserRepo)
  });
};

const generateNewUserRepo = (userData, hydrationData, sleepData, activityData) => {
  let userRepo = new UserRepository(userData, hydrationData, sleepData, activityData);
  return globalCurrentUserRepo = userRepo;
};

const getRandomID = array => {
  const randomIndex = array[Math.floor(Math.random() * array.length)];
  return randomIndex;
};

window.onload = (event) => (event, renderPage());
//---------------- Functions --------------------
// let globalUserData = null;
// let globalHydrationData = null;
// let globalSleepData = null;
// let globalActivityData = null;

// let globalCurrentUser = null;
// let globalCurrentHydration = null;
// let globalCurrentSleep = null;
// let globalCurrentActivity = null;


// const renderPage = () => {
  //   Promise.all([fetchUserData, fetchHydrationData, fetchSleepData, fetchActivityData])
//   .then(values => {
//     globalCurrentUser = generateNewUser(values[0].userData, values[1].hydrationData)
//     generateNewUserRepo(values[0].userData, globalCurrentUser)
//     generateNewSleep(globalCurrentUser, values[2].sleepData)
//     generateNewActivity(globalCurrentUser, values[3].activityData)
    
    
    // instantiateClasses(globalUserData, globalHydrationData, globalSleepData, globalActivityData)
    // runInitialMethods(globalCurrentUser, globalCurrentHydration, globalUserData, globalHydrationData, globalSleepData, globalActivityData)
    // generatePageUser(userData);
  // })
  // .then(_ => instantiateClasses(globalCurrentUser, globalUserData, globalHydrationData, globalSleepData, globalActivityData))
  // .then(_ => runInitialMethods(globalCurrentUser, globalCurrentHydration, globalUserData, globalHydrationData, globalSleepData, globalActivityData))
  // .then(_ => runRemainingMethods(userData))
  // .then(_ => generatePageUser(userData))
// };


// const generateNewUser = (userData, hydrationData) => {
//   const getRandomUser = getRandomID(userData);
//   const newUser = new User(getRandomUser, userData, hydrationData)
//     newUser.findUserHydration(hydrationData)
//     newUser.generateFormattedFriends()
//     newUser.returnCurrentDate()
//     newUser.returnLastWeek()
//   return newUser;
// };
// const generatePageUser = (userData) => {
  //   generateNewUser(userData, hydrationData);
  //   currentUser.generateFormattedFriends(currentUser.friends, userData);
  //   generateNewUserRepo(userData, currentUser);
  //   generateNewHydration(currentUser.id, hydrationData, currentUser.date);
  //   generateNewSleep(currentUser.id, sleepData);
  //   generateNewActivity(currentUser, currentUser.date, activityData);
  //   runActivityMethods(activityData)
  //   displayCurrentUser(currentUser, currentHydration, currentUserRepo, currentSleep, currentActivity);
  // };
  
  // const generateNewUser = (userData, hydrationData) => {
  //   const getRandomUser = getRandomID(userData);
  //   const newUser = new User(getRandomUser, hydrationData, sleepData, activityData);
  //   newUser.findUserHydration(hydrationData)
  //   newUser.returnCurrentDate();
  //   newUser.returnLastWeek();
  //   return currentUser = newUser;
  // };
  
  // const generateNewUserRepo = (userData, user) => {
    //   let userRepo = new UserRepository(userData, user);
    //   return globalCurrentUserRepo = userRepo;
    // };
    
    // const generateNewHydration = () => {
    //     const newHydration = new Hydration(currentUser.id, hydrationData, currentUser.date);
    //     newHydration.findUserID(hydrationData);
    //     newHydration.calculateOuncesPerDayOverWeek();
    //     return currentHydration = newHydration;
    //   };
      
    //   const generateNewSleep = () => {
    //       const newSleep = new Sleep(currentUser.id, sleepData);
    //       newSleep.findUserID(sleepData);
    //       newSleep.getUserAverageHoursSleptPerDayTotal();
    //       newSleep.getUserAverageQualitySleptPerDay();
    //       newSleep.getHoursSleptPerDay('2020/01/20');
    //       newSleep.getQualitySleptPerDay('2020/01/20');
    //       newSleep.getAllUserSleepQuality();
    //       newSleep.calculateHrsSleptPerDayOverWeek('2019/06/15');
    //       newSleep.calculateQualSleepPerDayOverWeek('2019/06/15');
    //       return currentSleep = newSleep;
    //     };
        
    //     const generateNewActivity = (user, activityData) => {
    //       const newActivity = new Activity(user, activityData);
    //       return currentActivity = newActivity;
    //     }
    //     const runActivityMethods = (activityData) => {
    //         currentActivity.findUserActivity(activityData)  
    //         runRemainingActivityMethods()
    // //       }
          
    //       const runRemainingActivityMethods = () => {
    //         currentActivity.findNumSteps();
    //         currentActivity.findMinutesActive();
    //         currentActivity.findStairsClimbed();
    //         currentActivity.findMilesWalked('2019/06/15');
    //         currentActivity.findMinutesActiveWeekAverage('2019/06/15');
    //         currentActivity.determineStepGoalReached('2019/06/15');
    //         currentActivity.findExceededGoalDays();
    //         currentActivity.findStairRecord();
    //         currentActivity.findAvgStairsAllUsers('2019/06/15');
    //         currentActivity.findAvgStepsAllUsers('2019/06/15');
    //         currentActivity.findMinutesActiveOnDate('2019/06/15');
    //       }
          
    //       const displayCurrentUser = (user, hydration, userRepo, sleep, activity) => {
    //         domUpdates.displayUserName(user);
    //         domUpdates.displayUserInfo(user, userRepo);
    //         domUpdates.displayHydrationInfo(user, hydration);
    //         domUpdates.displaySleepInfo(sleep);
    //         domUpdates.displayActivityInfo(activity);
    //       };
          
    //       //---------------- Scripts ------------------------
          
          
    //       //---------------------------------------------------------------------  
    //       const instantiateClasses = (userData, hydrationData, sleepData, activityData) => {

    //         const newUser = generateNewUser(userData, hydrationData);
    //         globalCurrentUser = newUser

    //         generateNewUserRepo(userData, globalCurrentUser);
    //         generateNewHydration(globalCurrentUser, hydrationData, globalCurrentUser);
    //         generateNewSleep(globalCurrentUser.id, sleepData);
    //         generateNewActivity(globalCurrentUser, globalCurrentUser.date, activityData);
    //       }
          
    //       const runInitialMethods = (currentUser, userData, hydrationData, sleepData, activityData) => {
    //         runUserMethods(currentUser, userData, hydrationData)
    //         runHydrationMethods(hydrationData)
    //         runSleepMethods(sleepData)
    //         runActivityMethods(activityData)
    //       }
          
    //       const runRemainingMethods = () => {
    //         globalCurrentActivity.runRemainingActivityMethods()
    //       }
                    
    //       const generatePageUser = (userData) => {
    //         displayCurrentUser(currentUser, currentHydration, currentUserRepo, currentSleep, currentActivity);
    //       };
          
          
    //       // const generateNewUserRepo = (userData, currentUser) => {
    //       //   let userRepo = new UserRepository(userData, currentUser);
    //       //   return globalCurrentUserRepo = userRepo;
    //       // };
          
    //       const generateNewHydration = (currentUser, hydrationData) => {
    //         const newHydration = new Hydration(currentUser, hydrationData);
    //         return globalCurrentHydration = newHydration;
    //       };
          
    //       const generateNewSleep = (currentUser, sleepData) => {
    //         const newSleep = new Sleep(currentUser.id, sleepData);
    //         return globalCurrentSleep = newSleep;
    //       };
          
    //       const generateNewActivity = (user, activityData) => {
    //         const newActivity = new Activity(user, activityData);
    //         return globalCurrentActivity = newActivity;
    //       }

    //       const runUserMethods = (currentUser, userData, hydrationData) => {
    //         globalCurrentUser.generateFormattedFriends(currentUser.friends, userData);
    //         globalCurrentUser.returnCurrentDate();
    //         globalCurrentUser.returnLastWeek();
    //       }
          
    //       const runHydrationMethods = (hydrationData) => {
    //         globalCurrentHydration.findUserID(hydrationData);
    //         globalCurrentHydration.calculateOuncesPerDayOverWeek();            
    //       }
          
    //       const runSleepMethods = (sleepData) => {
    //         newSleep.findUserID(sleepData);
    //         newSleep.getUserAverageHoursSleptPerDayTotal();
    //         newSleep.getUserAverageQualitySleptPerDay();
    //         newSleep.getHoursSleptPerDay('2020/01/20');
    //         newSleep.getQualitySleptPerDay('2020/01/20');
    //         newSleep.getAllUserSleepQuality();
    //         newSleep.calculateHrsSleptPerDayOverWeek('2019/06/15');
    //         newSleep.calculateQualSleepPerDayOverWeek('2019/06/15');
    //       }
          
    //       const runActivityMethods = (activityData) => {
    //         globalCurrentActivity.findUserActivity(activityData)  
    //       }
//-------------------------------------------------

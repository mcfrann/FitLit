
//----------------- Imports--------------------
import fetchAPI from './apiCalls';
import User from '../src/user';
import UserRepository from './UserRepository';
import './css/styles.css';

//----------------- Query Selectors ------------
const userInfo = document.querySelector('.user-info');
const userName = document.querySelector('.user-name');
const welcomeMessage = document.querySelector('.welcome-message');
const hydration = document.querySelector(".user-hydration")
const sleep = document.querySelector(".user-sleep")
const activity = document.querySelector(".user-activity")



//----------------- Global Vars ------------------
let userData = [];
let hydrationData = [];
let sleepData = [];
let activityData = [];
let userRepo = '';
let user = '';
const fetchUserData = fetchAPI.getUserData()
// const fetchHydrationData = fetchAPI.getHydrationData()
// const fetchSleepData = fetchAPI.getSleepData()
// const fetchActivityData = fetchAPI.getActivityData()



//---------------- Functions --------------------
const getRandomID = array => {
  const randomIndex = array.userData[Math.floor(Math.random() * array.userData.length)];
  return randomIndex;
};


const generateNewUser = (userData) => {
  const getRandomUser = getRandomID(userData)
  user = new User(getRandomUser)
  // hydration = new Hydration(hydrationData.filter(entry => {
  //   entry.id === user.id
  // }))
  displayCurrentUser()
}

const displayCurrentUser = () => {
  displayUserName(user);
  displayUserInfo(user);
  // displayHydration(hydration);
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
//
// const displayHydration = user => {
//   return hydration.innerText = `
//   ${hydration.calculateAvgWater()}
//   `
// }




//---------------- Scripts ------------------------

// Promise.all([fetchUserData, fetchHydrationData, fetchSleepData, fetchActivityData])
// .then(values => {
//   // generateUserRepo(values[0])
//   generateNewUser(values[0], values[1], values[2], values[3])
// })

Promise.all([fetchUserData])
.then(values => {
  // console.log(fetchUserData)
  // generateUserRepo(values[0])
  generateNewUser(values[0])
  // generateNewUser(values[1])
  // console.log(values[1])
})


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

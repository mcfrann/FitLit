
//----------------- Imports--------------------
import fetchAPI from './apiCalls';
import User from '../src/user';
import UserRepository from './UserRepository';
import './css/styles.css';

//----------------- Query Selectors ------------
const userInfo = document.querySelector('.user-info');
const userName = document.querySelector('.user-name');
const welcomeMessage = document.querySelector('.welcome-message');

//----------------- Global Vars ------------------
let userData = [];
let hydrationData = [];
let sleepData = [];
// let activityData = [];
let userRepo = '';
let user = '';
const fetchUserData = fetchAPI.getUserData()
// fetchHydrationData, fetchSleepData



//---------------- Functions --------------------
const getRandomID = array => {
  const randomIndex = array.userData[Math.floor(Math.random() * array.userData.length)];
  return randomIndex;
};


const generateNewUser = (userData) => {
  const getRandomUser = getRandomID(userData)
  user = new User(getRandomUser)
  displayCurrentUser()
}

const displayCurrentUser = () => {
  displayUserName(user);
  displayUserInfo(user);
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



//---------------- Scripts ------------------------

Promise.all([fetchUserData]).then(values => {
  // generateUserRepo(values[0])
  generateNewUser(values[0])
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

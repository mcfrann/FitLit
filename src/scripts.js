
//----------------- Imports--------------------
// import { getUsers, getSleep, getHydration } from './apiCalls';
import getAll from './apiCalls';
import User from '../src/user';
import UserRepository from './UserRepository';
import './css/styles.css';

//----------------- Query Selectors ------------
const userInfo = document.querySelector('.user-info');
const userName = document.querySelector('.user-name');
const welcomeMessage = document.querySelector('.welcome-message');

//----------------- Global Vars ------------------
const userData = [];
const userHydrationData = [];
const sleepData = [];
let userRepo = '';
let user = '';

//---------------- Functions --------------------
const getRandomID = array => {
  const randomIndex = Math.floor(Math.random() * array.length);
  const randomID = array[randomIndex].id;
  return randomID;
};

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
  Average amongst all users: ${user.dailyStepGoal} | ${userRepo.averageStepGoal()}
`};

const generateUserRepo = userData => userRepo = new UserRepository(userData);

const displayCurrentUser = () => {
  displayUserName(user);
  displayUserInfo(user);
};

//---------------- Scripts ------------------------
// getUsers().then(data => {
//   data.userData.forEach(user => userData.push(user));
//   generateUserRepo(userData);
//   userRepo.findID(getRandomID(userData));
//   user = new User(userRepo.currentUser);
//   displayCurrentUser();
//   console.log(user.id);
// });


// getHydration().then(data => {
//   console.log(user.id);
//   data.hydrationData.forEach(entry => {
//     if (entry.userID === user.id) {
//       userHydrationData.push(entry)
//     }
//   })
//   console.log(userHydrationData);
// });

getAll().then(data => {
  console.log(data)
})


// getSleep().then(data => {
//   data.activityData.forEach(user => sleepData.push(user));
//   console.log(activityData);
// })







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

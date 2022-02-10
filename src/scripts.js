
//----------------- Imports--------------------
// import { getUsers, getSleep, getHydration } from './apiCalls';
// import { getAll, userData, sleepData, hydrationData, activityData } from './apiCalls';
// import { getUsers, getSleep, getHydration } from './apiCalls';
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
// let hydrationData = [];
// let sleepData = [];
// let activityData = [];
let userRepo = '';
let user = '';
const fetchUserData = fetchAPI.getUserData()

//---------------- Functions --------------------
const getRandomID = array => {
  // console.log(array.userData)
  const randomIndex = array.userData[Math.floor(Math.random() * array.userData.length)];
  // userData[Math.floor(Math.random() * userData.length)]
  // console.log(randomIndex)
  // const randomID = array[randomIndex];
  return randomIndex;
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
  Average amongst all users: ${user.dailyStepGoal}
`};

//NOT WORKING: | ${userRepo.averageStepGoal()

Promise.all([fetchUserData]).then(values => {
  // generateUserRepo(values[0])
  generateNewUser(values[0])
})

const generateNewUser = (userData) => {
  const getRandomUser = getRandomID(userData)
  // console.log(getRandomUser)
  user = new User(getRandomUser)
  displayCurrentUser()
  console.log(user)
  // console.log(userRepo)
}
// const generateUserRepo = userData => userRepo = new UserRepository(userData);

const displayCurrentUser = () => {
  displayUserName(user);
  displayUserInfo(user);
};

//---------------- Scripts ------------------------
// getAll()
// console.log(userData)



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

// generateUserRepo(userData);
// userRepo.findID(getRandomID(userData));
// user = new User(userRepo.currentUser);
// displayCurrentUser();

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

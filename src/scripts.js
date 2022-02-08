// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********
import userData from './data/users';
import User from '../src/user';
import UserRepository from './UserRepository';
import './css/styles.css';

const userInfo = document.querySelector('.user-info')
const userName = document.querySelector('.user-name')
const welcomeMessage = document.querySelector('.welcome-message')

const userRepo = new UserRepository(userData);
userRepo.findID(4)
const user = new User(userRepo.currentUser);

const displayUserName = user => {
  return welcomeMessage.innerText = `Welcome, ${user.returnFirstName()}!`
}

const displayUserInfo = user => {
  return userInfo.innerText = `
  ${user.name}
  ${user.email}
  ${user.address}
  ${user.strideLength}
  ${user.dailyStepGoal}
  ${user.friends}
  Average amongst all users: ${user.dailyStepGoal} | ${userRepo.averageStepGoal()}
  `
}

window.addEventListener("load", displayUserName(user), displayUserInfo(user));





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

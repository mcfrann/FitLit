
const urls = [
    'https://fitlit-api.herokuapp.com/api/v1/users',
    'https://fitlit-api.herokuapp.com/api/v1/sleep',
    'https://fitlit-api.herokuapp.com/api/v1/activity',
    'https://fitlit-api.herokuapp.com/api/v1/hydration'
];

let requests = urls.map(url => fetch(url));
let userData = [];
let sleepData = [];
let hydrationData = [];
let activityData = [];


export const getAll = () => {
   return Promise.all(requests)
  .then(responses => Promise.all(responses.map(r => r.json())))
  .then(data => data.map(data => {
    if (data.userData) {
      data.userData.forEach(entry => userData.push(entry))
    };
    
    if (data.sleepData) {
      data.sleepData.forEach(entry => sleepData.push(entry));
    };
    
    if (data.hydrationData) {
      data.hydrationData.forEach(entry => hydrationData.push(entry));
    };
    
    if (data.activityData) {
      data.activityData.forEach(entry => activityData.push(entry));
    };
    return {userData, sleepData, hydrationData, activityData}
  }));
};


    // const getUsers = () => {
    //     return fetch('https://fitlit-api.herokuapp.com/api/v1/users')
    //     .then(response => response.json());
    // };
// Your fetch requests will live here!
// const urls = [
//     'https://fitlit-api.herokuapp.com/api/v1/users',
//     'https://fitlit-api.herokuapp.com/api/v1/sleep',
//     'https://fitlit-api.herokuapp.com/api/v1/activity',
//     'https://fitlit-api.herokuapp.com/api/v1/hydration'
// ];
// //
let userData = [];
// let sleepData = [];
// let hydrationData = [];
// let activityData = [];

const fetchAPI = {
  getUserData() {
    return fetch('https://fitlit-api.herokuapp.com/api/v1/users')
        .then(response => response.json())
  }
}

// let requests = urls.map(url => fetch(url));




// const getAll = () => {
//   Promise.all(requests)
//   .then(responses => Promise.all(responses.map(r => r.json())))
//   .then(users => users.map(user => {
//     if (user.userData) {
//       console.log(user.userData)
//       return userData = user.userData
//       // console.log("userData:", userData)
//     } else if (user.sleepData) {
//       return sleepData = user.sleepData
//     } else if (user.hydrationData) {
//       return hydrationData = user.hydrationData
//     } else if (user.activityData) {
//       return activityData = user.activityData
//     }
//   }))
//   console.log(userData)
// }
//




// const getUsers = () => {
//     return fetch('https://fitlit-api.herokuapp.com/api/v1/users')
//     .then(response => response.json());
// };

// const getSleep = () => {
//     return fetch('https://fitlit-api.herokuapp.com/api/v1/sleep')
//     .then(response => response.json());
// }

// const getHydration = () => {
//     return fetch('https://fitlit-api.herokuapp.com/api/v1/hydration')
//     .then(response => response.json());
// }

// export { getUsers, getSleep, getHydration };

// export { getAll, userData, sleepData, hydrationData, activityData }

export default fetchAPI

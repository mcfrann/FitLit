// Your fetch requests will live here!
// const userData = [];

// const urls = [
//     'https://fitlit-api.herokuapp.com/api/v1/users',
//     'https://fitlit-api.herokuapp.com/api/v1/sleep',
//     'https://fitlit-api.herokuapp.com/api/v1/activity',
//     'https://fitlit-api.herokuapp.com/api/v1/hydration'
// ];

// let requests = urls.map(url => fetch(url));

// Promise.all(requests)
//     .then(responses => responses.forEach(response.json()))
//     .then(data => data.userData.forEach(user => userData.push(user)))
        
        
    //     Promise.all(responses.map(responses => responses.userData())))
    // .then(texts => {
const getUsers = () => {
     return fetch('https://fitlit-api.herokuapp.com/api/v1/users')
        .then(response => response.json())
        
};
// const getUsers = () => {
//      return fetch('https://fitlit-api.herokuapp.com/api/v1/users')
//         .then(response => response.json())
//         .then(data => data.userData.forEach(user => userData.push(user)));
// };

// console.log('apiCalls: ', userData);

export default  getUsers  ;
// export default { userData, getUsers } ;


// console.log('I will be a fetch request!')


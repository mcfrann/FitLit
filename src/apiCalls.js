// Your fetch requests will live here!
const urls = [
    'https://fitlit-api.herokuapp.com/api/v1/users',
    'https://fitlit-api.herokuapp.com/api/v1/sleep',
    'https://fitlit-api.herokuapp.com/api/v1/activity',
    'https://fitlit-api.herokuapp.com/api/v1/hydration'
];

// let requests = urls.map(url => fetch(url));

const getAll = requests => Promise.all(urls.map(url => fetch(url))).then(responses => responses.json());



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

export default getAll



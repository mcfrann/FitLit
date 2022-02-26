import newHydration from "./scripts";
//ADDED ^

const fetchAPI = {
  getUserData() {
    return fetch('http://localhost:3001/api/v1/users')
        .then(response => response.json())
  },
  getHydrationData() {
    return fetch('http://localhost:3001/api/v1/hydration')
        .then(response => response.json())
  },
  getSleepData() {
    return fetch('http://localhost:3001/api/v1/sleep')
        .then(response => response.json())
  },
  getActivityData() {
    return fetch('http://localhost:3001/api/v1/activity')
        .then(response => response.json())
  },
  //ADDED:
  postHydrationData(newHydration) {
    fetch('http://localhost:3001/api/v1/hydration', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newHydration)
      // .then(response => response.json())
    })
  },
};

export default fetchAPI;

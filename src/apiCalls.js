

const fetchAPI = {
  getUserData() {
    return fetch('https://fitlit-api.herokuapp.com/api/v1/users')
        .then(response => response.json())
  },
  getHydrationData() {
    return fetch('https://fitlit-api.herokuapp.com/api/v1/hydration')
        .then(response => response.json())
  },
  getSleepData() {
    return fetch('https://fitlit-api.herokuapp.com/api/v1/sleep')
        .then(response => response.json())
  },
  getActivityData() {
    return fetch('https://fitlit-api.herokuapp.com/api/v1/activity')
        .then(response => response.json())
  }
};

export default fetchAPI

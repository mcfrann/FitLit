

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
  postHydrationData(newHydro) {
    fetch('http://localhost:3001/api/v1/hydration', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newHydro)
    })
  },
  postSleepData(newSleep) {
    fetch('http://localhost:3001/api/v1/sleep'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newSleep)
    }
  }
};

export default fetchAPI;

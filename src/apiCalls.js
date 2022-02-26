

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
    .then(response => {
      if(!response.ok) {
        throw new Error('Please fill out all input fields!')
      } else {
        alert('Your hydration data has been submitted!')
        return response.json()
      }
    })
  },
  postSleepData(newSleep) {
    fetch('http://localhost:3001/api/v1/sleep', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newSleep)
    })
    .then(response => {
      if(!response.ok) {
        throw new Error('Please fill out all input fields!')
      } else {
        alert('Your sleep data has been submitted!')
        return response.json()
      }
    })
  }
};

export default fetchAPI;

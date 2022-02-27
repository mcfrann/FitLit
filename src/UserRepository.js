class UserRepository {
  constructor(userData, hydrationData, sleepData, activityData) {
    this.userData = userData;
    this.hydrationData = hydrationData;
    this.sleepData = sleepData;
    this.activityData = activityData;
  };

  buildUserDataArrays() {
    const updatedUserData = [...this.userData]
    updatedUserData.map(user => {
      user.hydrationData = this.hydrationData.filter(data => data.userID === user.id)
      user.sleepData = this.sleepData.filter(data => data.userID === user.id)
      user.activityData = this.activityData.filter(data => data.userID === user.id)
    })
    this.userData = updatedUserData
    console.log(updatedUserData)
  }

  findAverageStepGoal() {
    let average = this.userData.reduce((acc, user) => {
      return acc += user.dailyStepGoal / this.userData.length;
    }, 0);
    return average;
  };
};

export default UserRepository;

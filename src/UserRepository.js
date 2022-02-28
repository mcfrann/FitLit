class UserRepository {
  constructor(userData, hydrationData, sleepData, activityData) {
    this.userData = userData;
    this.hydrationData = hydrationData;
    this.sleepData = sleepData;
    this.activityData = activityData;
  };

  buildUserDataArrays() {
    const updatedUserData = [...this.userData];
    updatedUserData.map(user => {
      user.hydrationData = this.hydrationData.filter(data => data.userID === user.id);
      user.sleepData = this.sleepData.filter(data => data.userID === user.id);
      user.activityData = this.activityData.filter(data => data.userID === user.id);
    });
    this.userData = updatedUserData;
  };
  
  determineCurrentUser(id) {
    return this.currentUser = this.userData.find(user => id === user.id);
  };

  findAverageStepGoal() {
    let average = this.userData.reduce((acc, user) => {
      return acc += user.dailyStepGoal / this.userData.length;
    }, 0);
    return this.allUsersAvStepGoal = average;
  };

   generateFormattedFriends() {
    let friendsNames = [];
    this.currentUser.friends.forEach(id => {
      this.userData.find(user => {
        if(id === user.id){
          return friendsNames.push(user.name);
        };
      });
    });
    return this.currentUser.friends = friendsNames;
  };

  calculateAvg(number, length) {

  }

  calculateAvgWaterForUsers() {
    // const updatedUserData = [...this.userData];
    // const result = updatedUserData.map(user => {
    //   user.hydrationData.reduce((hydroAvg, user) => {
    //   return hydroAvg += user.hydrationData.numOunces / this.userHydrationData.length;
    // }, 0);
    // return waterAverage.toFixed(1);
  };
};


export default UserRepository;

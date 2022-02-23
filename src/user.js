class User {
  constructor(user, hydration, sleep, activity) {
    this.id = user.id;
    this.name = user.name;
    this.address = user.address;
    this.email = user.email;
    this.strideLength = user.strideLength;
    this.dailyStepGoal = user.dailyStepGoal;
    this.friends = user.friends;
    this.formattedFriends = null;
    this.userHydration = null;
    this.date = null;
    this.week = null;
  };

  findUserHydration(hydration) {
    this.userHydration = hydration.filter(data => data.userID === this.id);
  };

  returnFirstName() {
    return this.name.split(" ")[0];
  };

  returnCurrentDate() {
    return this.date = this.userHydration[this.userHydration.length - 1].date;
  };

  returnLastWeek() {
    return this.week = this.userHydration.map(entry => entry.date).reverse().filter((entry, index) => (index <= 6)).reverse();
  };

  generateFormattedFriends(userFriends, userData) {
    let friendsNames = [];
    userFriends.forEach(id => {
      userData.find(user => {
        if(id === user.id){
          return friendsNames.push(user.name);
        };
      });
    });
    return this.formattedFriends = friendsNames;
  };
};

export default User;

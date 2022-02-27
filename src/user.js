class User {
  constructor(id, name, address, email, strideLength, dailyStepGoal, friends) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.email = email;
    this.strideLength = strideLength;
    this.dailyStepGoal = dailyStepGoal;
    this.friends = friends;
    // this.formattedFriends = null;
    // this.userHydration = user.userHydration | null;
    // this.date = null;
    // this.week = null;
  };

  returnFirstName() {
    return this.name.split(" ")[0];
  };

  returnCurrentDate() {
    console.log(this.userHydration)
    return this.date = this.userHydration[this.userHydration.length - 1].date;
  };

  returnLastWeek() {
    return this.week = this.userHydration.map(entry => entry.date).reverse().filter((entry, index) => (index <= 6)).reverse();
  };

  generateFormattedFriends() {
    let friendsNames = [];
    this.friends.forEach(id => {
      this.userData.find(user => {
        if(id === user.id){
          return friendsNames.push(user.name);
        };
      });
    });
    return this.formattedFriends = friendsNames;
  };
};

export default User;

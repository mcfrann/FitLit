class User {
  constructor(user, hydration, sleep, activity) {
    this.id = user.id;
    this.name = user.name;
    this.address = user.address;
    this.email = user.email;
    this.strideLength = user.strideLength;
    this.dailyStepGoal = user.dailyStepGoal;
    this.friends = user.friends;
    this.userHydration = hydration.filter(data => data.userID === this.id);
    this.date = ''
    this.week = []
  };

  returnFirstName() {
    return this.name.split(" ")[0];
  }

  returnCurrentDate() {
    return this.date = this.userHydration[this.userHydration.length - 1].date
  }

  returnLastWeek() {
    return this.week = this.userHydration.map(entry => entry.date).reverse().filter((entry, index) => (index <= 6)).reverse()
  }
};

export default User;

class User {
  constructor(user, activity) {
    this.id = user.id;
    this.name = user.name;
    this.address = user.address;
    this.email = user.email;
    this.strideLength = user.strideLength;
    this.dailyStepGoal = user.dailyStepGoal;
    this.friends = user.friends;
  };

  returnFirstName() {
    return this.name.split(" ")[0];
  };
};

export default User

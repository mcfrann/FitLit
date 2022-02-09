
class UserRepository {
  constructor(userData) {
    this.userData = userData;
    this.currentUser = this.userData[4];
  };

  findID(id) {
    this.currentUser = (this.userData.find(user => user.id === id));
  };
      
  averageStepGoal() {
    let average = this.userData.reduce((acc, user) => {
      return acc += user.dailyStepGoal / this.userData.length;
    }, 0);
    return average;
  };
};

export default UserRepository;

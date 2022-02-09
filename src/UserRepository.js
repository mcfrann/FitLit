
class UserRepository {
    constructor(userData) {
        this.userData = userData;
        this.currentUser = this.userData[4];
    }

    findID(id) {
      // console.log(id)
      // console.log(this.userData)
      // this.userData.forEach(user => console.log(user.id))
      // console.log(this.userData.find(user => user.id === id))
        // this.currentUser = (this.userData[4]);
        this.currentUser = (this.userData.find(user => user.id === id));
        console.log(this.currentUser)
      }
      
    averageStepGoal() {
      let average = this.userData.reduce((acc, user) => {
        return acc += user.dailyStepGoal / this.userData.length
      }, 0)
      return average
    }
}

export default UserRepository;

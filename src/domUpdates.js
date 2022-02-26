const userInfo = document.querySelector('.user-info');
const userName = document.querySelector('.user-name');
const welcomeMessage = document.querySelector('.welcome-message');
const hydrationWidget = document.querySelector('.user-hydration');
const sleepWidget = document.querySelector('.user-sleep');
const activityWidget = document.querySelector('.user-activity');


const domUpdates = {

  displayUserName(user){
    return welcomeMessage.innerText = `Welcome,
    ${user.returnFirstName()}.`;
  },

  displayUserInfo(user, userRepo) {
    let friendFirstName = user.formattedFriends.map(friend => ' ' + friend.split(" ")[0]);
    return userInfo.innerHTML = `
    <h2>About you:</h2>
      <p>${user.name}<br>
      ${user.email}<br>
      ${user.address}<br><br>
      Your stride length:<br>
      ${user.strideLength} feet<br><br>
      Your daily step goal:<br>
      ${user.dailyStepGoal}<br><br>
      Your friends:<br>
      ${friendFirstName}<br><br>
      Your step goal compared to the average step goal amongst all users:<br>
      ${user.dailyStepGoal}/${userRepo.findAverageStepGoal()}</p><br>
  `},

  displayHydrationInfo(user, hydration) {
    return hydrationWidget.innerHTML = `
    <br>
    <img src="https://user-images.githubusercontent.com/88151743/153778199-6085b751-5f2d-45b8-b6f4-342bec5fbb5c.png" alt="water drop"/>
    <br>
    <h2>Your Hydration Stats:</h2>
      <h3> Water consumption today: ${hydration.calculateOuncesPerDayByDate()} oz</h3>
        <p>${hydration.week[0].date}: ${hydration.week[0].numOunces} oz<br><br>
        ${hydration.week[1].date}: ${hydration.week[1].numOunces} oz<br><br>
        ${hydration.week[2].date}: ${hydration.week[2].numOunces} oz<br><br>
        ${hydration.week[3].date}: ${hydration.week[3].numOunces} oz<br><br>
        ${hydration.week[4].date}: ${hydration.week[4].numOunces} oz<br><br>
        ${hydration.week[5].date}: ${hydration.week[5].numOunces} oz<br><br>
        ${hydration.week[6].date}: ${hydration.week[6].numOunces} oz</p><br><br>
  `},

  displaySleepInfo(sleep) {
    return sleepWidget.innerHTML = `
    <br>
    <img src="https://img.icons8.com/external-justicon-lineal-justicon/64/000000/external-sleep-emoji-justicon-lineal-justicon.png" alt="sleeping person emoji"/>
    <br>
    <h2>Your Sleep Stats:</h2>
      <h3>Today:</h3>
        <p>Hours slept: ${sleep.getHoursSleptPerDay('2020/01/20')} | Sleep quality: ${sleep.getQualitySleptPerDay('2020/01/20')}<br>
      <h3>Over last week:</h3>
        <p>Average hours slept: ${sleep.calculateHrsSleptPerDayOverWeek('2019/06/15')} | Average sleep quality: ${sleep.calculateQualSleepPerDayOverWeek('2019/06/15')}<br>
      <h3>All time:</h3>
        <p>Average hours slept: ${sleep.getUserAverageHoursSleptPerDayTotal()} | Average sleep quality: ${sleep.getUserAverageQualitySleptPerDay()}</p><br>
  `},

  displayActivityInfo(hydration){
    return activityWidget.innerHTML = `
    <br>
      <img src="https://img.icons8.com/ios/50/000000/walking--v1.png" alt="person walking"/>
    <br>
    <h2>Your Activity Stats:</h2>
      <h3> Water consumption today: ${hydration.calculateOuncesPerDayByDate()} oz</h3>
        <p>${hydration.week[0].date}: ${hydration.week[0].numOunces} oz<br><br>
        ${hydration.week[1].date}: ${hydration.week[1].numOunces} oz<br><br>
        ${hydration.week[2].date}: ${hydration.week[2].numOunces} oz<br><br>
        ${hydration.week[3].date}: ${hydration.week[3].numOunces} oz<br><br>
        ${hydration.week[4].date}: ${hydration.week[4].numOunces} oz<br><br>
        ${hydration.week[5].date}: ${hydration.week[5].numOunces} oz<br><br>
        ${hydration.week[6].date}: ${hydration.week[6].numOunces} oz</p><br><br>



  `},
}

export default domUpdates

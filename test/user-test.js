import { expect } from 'chai';
import User from '../src/user';
import UserRepository from '../src/UserRepository';
import userData from '../src/data/users'

describe('User', () => {
  const userRepo = new UserRepository(userData);
  userRepo.findID(4)
  const user = new User(userRepo.currentUser);


  it('should be a function', function () {
    expect(User).to.be.a('function');
  });

  it('should be an instance of user', function () {
    expect(user).to.be.an.instanceOf(User)
  })

  it('should have an id', function () {
    expect(user.id).to.equal(4)
  })

  it('should have a name', function () {
    expect(user.name).to.equal("Mae Connelly")
  })

  it('should have an address', function () {
    expect(user.address).to.equal("28926 Schinner Islands, Turnermouth NE 23720-3230")
  })

  it('should have an email', function () {
    expect(user.email).to.equal("Marcos_Pollich@hotmail.com")
  })

  it('should have a stride length', function () {
    expect(user.strideLength).to.equal(3.1)
  })

  it('should have a daily step goal', function () {
    expect(user.dailyStepGoal).to.equal(4000)
  })

  it('should have friends', function () {
    expect(user.friends).to.eql([48,7,44,8])
  })

  it("should return a user's first name only", function () {
    expect(user.returnFirstName()).to.equal("Mae")
  })
});

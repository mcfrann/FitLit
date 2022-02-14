import { expect } from 'chai';
import Friend from '../src/friend';
import userData from '../src/data/users';

describe('User Repository', () => {
  const friend = new Friend(4, userData);

  it('should be a function', function () {
    expect(Friend).to.be.a('function');
  });
  
  it('should be an instance of friend', function () {
    expect(friend).to.be.an.instanceOf(Friend);
  });
  
  it('should be an instance of sleep', function () {
    let name = friend.assignName();
    expect(name).to.equal('Mae Connelly');
  });
});

class Friend {
    constructor(friendId, userData) {
        this.userData = userData;
        this.id = friendId;
        this.name = null;
        this.steps = null;
    };

    assignName() {
        let thisFriend = this.userData.find(user => (user.id === this.id));
        return this.name = thisFriend.name;
    };
};

export default Friend;
class User {
    constructor(username, email){
        // set up properties
        this.username = username;
        this.email = email;
        this.score = 0;
    }
    login(){
        console.log(`${this.username} just logged in`);
        return this;
    }
    logout(){
        console.log(`${this.username} just logged out`);
        return this;
    }
    incScore(){
        this.score += 1;
        console.log(`${this.username} has score ${this.score}`);
        return this;
    }
}

class Admin extends User{
    constructor(username, email, title){
        super(username, email);
        this.title = title;
    }
    deleteUser(user){
        users = users.filter(u => u.username !== user.username);
    }
}

const userOne = new User('Mario', 'mario@mail');
const userTwo = new User('Luigi', 'luigi@mail');
const userThree = new Admin('Shaun', 'shaun@mail');

console.log(userOne, userTwo, userThree);

let users = [userOne, userTwo, userThree];
console.log(users);

userThree.deleteUser(userTwo);
console.log(users);

// userOne.login();
// userOne.logout();
// userOne.incScore();
// userOne.incScore();

// userOne.login().incScore().incScore().logout();

// userOne.login().logout();

// the 'new' keyword
// 1 - it creates a new empty object{}
// 2 - it binds the calue of 'this' to the new empty object
// 3 - it calls the constructor function to 'build' the object
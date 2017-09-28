# mlab-students (boilerplate)
clydeatuic Demo for Express + MongoDB + Heroku = Web Application

### Live Demo
* [https://mlab-students.herokuapp.com/](https://mlab-students.herokuapp.com/)

### Requisites
* Node
* Git
* Heroku Account and Heroku-CLI
* Sublime
* mLab: Cloud-hosted MongoDB

### Steps
1. Clone this repo and setup development environment
  ```console
  $ git clone https://github.com/clydeatuic/mlab-students.git your-name
  $ cd your-name
  ```
2. Create a ```.env``` file, copy the following content then replace the values using mLab credentials.
  ```javascript
  DB_URI=mongodb://username:password@host.domain.com:port/database
  ```
3. Go to your github and create a new repo.
4. Change the URI of the clone repository and replace it to your newly created github repo
  ```console
  $ git remote set-url origin http://github.com/YOU/YOUR_REPO.git
  ```
5. Download node dependencies
  ```console
  $ npm install
  ```
6. Add your codes in the current directory to the staging area then setup config variables for ```name``` and ```email```. Commit any changes into your local repo then push it to your remote github repository.
  ```console
  $ git add .
  $ git config user.name "your-name"
  $ git config user.email "your-email-address"
  $ git commit -m "your-message-here"
  $ git push -u origin master
  ```
7. Using Heroku-CLI, login using your heroku credentials.
  ```console
  $ heroku login
  ```
8. Create new heroku app and push your codes to heroku server
  ```console
  $ heroku create lastname-mlab-students
  $ git push heroku master
  ``` 
9. It's time :) tell heroku to open your web app
  ```console
  $ heroku open
  ```

10. Well Done. Congrats! :balloon::balloon::balloon::confetti_ball::tada::confetti_ball::balloon::balloon::balloon:

### Summary: Guide Script
```console
$ git clone https://github.com/clydeatuic/mlab-students.git your-name
$ cd your-name
$ git remote set-url origin http://github.com/YOU/YOUR_REPO.git
$ npm install

$ git add .
$ git config user.name "your-name"
$ git config user.email "your-email-address"
$ git commit -m "your-message-here"
$ git push -u origin master

$ heroku login
$ heroku create your-name-express-mongo
$ git push heroku master
$ heroku open
```

### Activity
Modify this boilerplate/codes to create Login-Register Web Application. The said web app should have the following requirements:

* Register Test Cases

- [x] should provide sign-up form to every new user
- [x] should check if the email provided is not a valid email format
- [x] should verify if password and confirm password matched

* Login Test Cases

- [x] should prompt if such credential is not valid
- [x] should allow valid user to sign-in
- [x] should redirect valid user to the dashboard/home page

* Dashboard Test Cases

- [x] should display the name of the valid user
- [x] should provide a UI that allows valid user to update password
- [x] should allow valid user to sign-out

* Logout Test Cases
- [x] should redirect to login UI after signing out

Due Date: October 06, Friday, 9:00 AM.

### Useful Related Sites
* [express js](https://expressjs.com/en/4x/api.html)
* [mongodb](https://docs.mongodb.com/)
* [mongoose js](http://mongoosejs.com/)
* [scotch.io](https://scotch.io/tutorials/build-a-restful-api-using-node-and-express-4)
* [zellwk](https://zellwk.com/blog/crud-express-mongodb/)
* [madhums](https://github.com/madhums/node-express-mongoose/blob/master/package.json)

#### A star in this repo is very much appreciated! Thanks :octocat:

>FIRST, SOLVE THE PROBLEM.
THEN, WRITE THE CODE.
~ John Johnson
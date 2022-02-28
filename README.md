# FitLit Starter Kit Overview:

FitLit is a wellness application that shows a user their recent performance by showing data related to their activity levels, hydration habits, and sleep behavior. Upon page load, a user can view their personal information and friends names that also use the app on the left hand side. Their activity, hydration, and sleep data are all separated into separate columns for easy viewing. The information displayed includes, but is not limited to, how many steps they have taken per day, the number of ounces of water drank per day for the past week, and their all-time average sleep quality/number of hours slept nightly.

![gif](https://user-images.githubusercontent.com/88151743/153728601-80e996d1-0ea9-4c6b-aff7-2179e2c1bdd5.gif)

The spec sheet can be found [here](http://frontend.turing.io/projects/fitlit.html).

## Goals and Objectives:

- Implement ES6 classes that communicate to each other as needed.
- Use object and array prototype methods to perform data manipulation.
- Create a dashboard that is easy to use and displays information in a clear way.
- Write modular, reusable code that follows SRP (Single Responsibility Principle).
- Implement a robust testing suite using TDD.
Make network requests to retrieve data.

## Technologies Used/ Contributors:

This wellness application is a group project built by [Geena Jackson](https://github.com/gjax78), [Francesca McConnell](https://github.com/mcfrann), and [George Lemmon](https://github.com/galemmon) during their time at [Turing School of Software and Design](https://turing.edu/). It was built using Javascript, HTML, CSS, and packages used include Mocha and Chai. Project Management included the use of GitHub Projects and GitHub Issues, as well as Excalidraw for the wireboard.

** Gap in code disparity due to adding large data files to test our implementation code. Original disparity is less than 10%. 

## Setup:

To access this project on your local machine, fork this repo and `git clone` SSH down. `cd` into the folder and run `npm install` to install dependencies.

Go to the fitlit-api repo [here](https://github.com/turingschool-examples/fitlit-api). In a separate terminal tab, `git clone` this repo down to your machine in a different folder. `cd` into it then run `npm install`, then `npm start`. You now have access to the local server this project uses for its data.

Now you can go back to the terminal tab for this project and run `npm start`. Copy and paste the provided web address into your browser and the site should have full functionality!

## Wins:

- Our team defined our team dynamic and working preferences early, and we referenced them often. We also redefined them accordingly when the project got tough.  We communicated heavily throughout the duration of the project.
- We successfully implemented new processes with little background information in a short amount of time.

## Challenges:
- One of the teammates was out sick for a day, while going through the most difficult part of the project. However, because of our DTR that we set at the beginning, our team successfully communicated and we were able to finish the project before the given deadline.
- Diving into fetch API head first was a steep learning curve. Luckily with the help of mentors, Turing alumni, and cohort mates, we feel well-versed and better prepared for what's ahead.
- Upon the start of the second part of this project, our team realized that there was a more simple way to update the data by including most of the class methods in the userRepo versus having them spread out among all the classes, however we ran out of time to implement our realization before the due date. The final submission is an unfinished project that does not display the activity data to the page due to a bug.

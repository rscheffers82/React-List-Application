# React To-Do

A personal project used to sharpen my skills in `React` and `Redux` and building a serverless app with [Firebase](https://firebase.google.com) . This app lets you add tasks to a list and search existing to-do items. Completed tasks are automatically archived and can be made visible again with the Show completed select box. Prior to this version, data was stored locally in the browser. In the latest version, data is stored in Firebase. Authentication is through google OAuth.


### Any live example of this app?
I sure do! It's deployed on Heroku, just click [here](http://list11.herokuapp.com) to see it in action.


### So, how do I run this locally? I want to play around!
1. Clone or download this repo *
2. Open the folder in your terminal
3. Install dependancies with `npm install`
4. type `npm run start`


####Additional steps needed to make Firebase work:
1. Create a project on [Firebase](https://firebase.google.com)
2. Once done click "Add Firebase to your web app" 
1. Create a `development.env` file in the `./config` folder with the details from step 2. e.g.
```
API_KEY=AIzaSyBaEKQBxs_nyr3XzkVZCpDx9Z4LGlLLPz
AUTH_DOMAIN=my-app-cb1dd.firebaseapp.com
DATABASE_URL=https://my-app-cb1dd.firebaseio.com
STORAGE_BUCKET=my-app-cb1dd.appspot.com
MESSAGING_SENDER_ID=1844570891908
```
** <i>This project runs on a node server, please ensure [node](https://nodejs.org/en/) is installed.</i>


### What about a test-suite?
That's included, just type `npm run test` to fire it up.


### Where can I find more of your projects?
Visit my [Portolio page](http://royscheffers.com) or browse some of my other repo's on [GitHub](https://github.com/rscheffers82).

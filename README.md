# Fitness Challenge App
This repository is the home of the fitness challenge app code. The app is a website running with React.

## Instructions for Running
Clone the repository to local machine and navigate to the directory in terminal.  
Run the following commands:
- `$npm install` (sudo may be necessary)
- `$./modules_to_install` to install the needed dependencies via script
- `$npm start` (to run the server)
	- The server should start in terminal and automatically open the localhost page.
	- If localhost does not automatically load, navigate to localhost:3000 in your browser

## Instructions for Running Backend:
- Navigate to ./fitnesschallengeapp_backend folder first
- Run `$npm run start:dev`

## Instructions for Database Setup:
- Install PostgreSQL online [here](https://www.postgresql.org/download/)
- Navigate to ./fitnesschallengeapp_backend/server/config/config.json
- Put your postgres password into the config.json file
- Set up database using newly installed psql application. Copy and paste the contents of DDL.txt into the cli window.

This will set up the database for the backend code to communicate with.  
If you edit the database, make sure to run `\c fitness;` to connect to the fitness database instead of postgres default database.

There is some sample code for interacting with the database in ./src/components/Sample.jsx.

If editing the backend, must include changes to the routes, models, and controllers.

This database setup only needs to be ran one time initially, unless changes are made to the database.

## React README Initialization
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

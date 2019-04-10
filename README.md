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

## Branching Structure
Development is done in individual branches. When you are ready to add a feature, merge your branch into the "staging" branch. If everything in "staging" is looking good, then merge "staging" into "master".

Branches will be made for each iteration to be turned in.

## Testing
Manual testing of user stories will take place upon completion of the story. Automated testing will take place once the manual testing is complete. Test cases have been set up to ensure proper rendering of all pages without errors. Additional test cases will be added when developer imports or creates new pages on the website.
### Instructions for Running Tests
To Run Test Cases:
- `$npm run test`

Code Coverage Can be Ran by:
- `$npm run test:coverage`

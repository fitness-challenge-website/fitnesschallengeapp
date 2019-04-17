# Fitness Challenge App
This repository is the home of the fitness challenge app code. The app is a website running with React.

## Instructions for Running
Clone the repository to local machine and navigate to the directory in terminal.  
Run the following commands:
- `$npm install` (sudo may be necessary)
- `$npm start` (to run the server)
	- The server should start in terminal and automatically open the localhost page.
	- If localhost does not automatically load, navigate to localhost:3000 in your browser

## Instructions for Running Backend:
- The backend must also be ran to interact with the database.
- Navigate to ./fitnesschallengeapp_backend folder first
- Run `$npm run start:dev`

## Instructions for Database Setup:
The database for our web application has been setup and hosted in an AWS EC2 instance.  
This is up and running currently. The following is for reference of configuration.

The host address is: `ec2-18-219-86-139.us-east-2.compute.amazonaws.com`  
Database: `fitness`  
Port: `5432`  
Username: either `fitness` or `postgres`  
Password: `fitnesschallenge`  

The backend application is automatically setup to be connected with the remote DB.

There is some sample code for interacting with the database in ./src/components/Sample.jsx.

If editing the backend, must include changes to the routes, models, and controllers.

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

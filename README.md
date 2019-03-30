
1. Install PostgreSQL online (https://www.postgresql.org/download/)
2. In ./fitnesschallengeapp_backend/server/config/config.json, put your password of postgres
3. Setting up database. DDL is below

```
create database fitness;

create table "User"(
	uid serial primary key,
	username varchar(100) not null,
	Password varchar(255) not null,
	f_name varchar(100) not null,
	l_name varchar(100) not null,
	email varchar(255),
	age integer,
	weight float,
	height float,
	"createdAt" Date
);

create table Activity(
	aid serial primary key,
	a_name varchar(255) not null,
	avg_calorie integer
);

create table "Group"(
	gid serial primary key,
	g_name varchar(255) not null,
	"createdAt" Date
);

create table Badges(
	bid serial primary key,
	b_name varchar(355),
	"level" integer
);

create table Friends(
	fid serial primary key,
	req_uid integer references "User"(UID),
	res_uid integer references "User"(UID),
	status varchar(1) not null,
	"createdAt" Date
);

create table User_Badges(
	uid integer references "User"(UID),
	bid integer references Badges(BID),
	"updatedAt" Date
);

create table user_activity(
	uid integer references "User"(UID),
	aid integer references activity(AID),
	duration integer,
	weight integer,
	rep integer,
	distance integer,
	speed float
);

create table User_Group(
	ugid serial primary key,
	req_uid integer references "User"(UID),
	res_uid integer references "User"(UID),
	gid integer references "Group"(GID),
	status varchar(1),
	"joinAt" Date
);


const url = "http://localhost:3210/api";
export const  = data => {
  return axios
  .post(url + "/user", {
  })
  .then(res => {
    console.log(res);
  });
}


USAGE:
1. Run in the fitnesschallengeapp_backend folder first.
$npm run start:dev
2. Example code below

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

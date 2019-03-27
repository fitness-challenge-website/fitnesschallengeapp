1. Install PostgreSQL online (https://www.postgresql.org/download/)
2. In ./fitnesschallengeapp_backend/server/config/config.json, put your password of postgres
3. Setting up database. DDL is below
---------------------------------------------------------------------
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
---------------------------------------------------------------------

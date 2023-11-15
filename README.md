# MVC-techblog

## Project Description
The goal of this project was to create a frontend and backend for a tech blog. The end user will visit the homepage and login into their profile. From there, they will see a dashboard where they are able to add comments. In the navigation bar, they will find a dashboard, login, logout and home section. 

## Technical Requirements

Technical requirements include:
* Express
* bcrypt package
* session package
* sequelize
* Node.js
* Express handlebars

## Usage

Github Link:https://github.com/lavollmer/MVC-techblog

Screenshots:

Heroku Deployment: https://mvc-techblog-lv-55feb36d5d2d.herokuapp.com/

## Credits

This project was done in conjunction with the U of MN Bootcamp 2023.

User.js model code taken from 14-MVC Activity 21 User model.

Signup, login and logout logic and code inspired by Activity 9, Activity 24 SOLVED folder and Activity 16 in MVC-14.

Xpert Learning Assistant from U of MN bootcamp site provided code for schema.sql table:
ALTER TABLE Article
DROP FOREIGN KEY article_ibfk_1;

ALTER TABLE Comment
DROP FOREIGN KEY comment_ibfk_1;

ALTER TABLE techblog_db MODIFY COLUMN comment VARCHAR(255) DEFAULT 'default_comment';

## License
None
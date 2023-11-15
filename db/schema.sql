-- DROP DATABASE --
DROP DATABASE IF EXISTS techblog_db;

-- CREATE DATABASE --
CREATE DATABASE techblog_db;

-- Use DATABASE --
USE techblog_db;

-- Create user Table --
CREATE TABLE User (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(100) NOT NULL,
  password_user VARCHAR (100) NOT NULL
);

-- Create article Table--
CREATE TABLE Article (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(500) NOT NULL,
  content VARCHAR(500) NOT NULL,
  article_id INT,
  FOREIGN KEY (article_id) REFERENCES User(id)
);

-- Create comment Table--
CREATE TABLE Comment (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  comment VARCHAR(500) NOT NULL,
  comment_id INT,
    FOREIGN KEY (comment_id) REFERENCES User(id)
);

-- code taken from previous homework, which was from xpert learning assistant on U of MN Bootcamp site --
-- ALTER TABLE Article
-- DROP FOREIGN KEY producttag_ibfk_2;

-- ALTER TABLE Article
-- DROP FOREIGN KEY producttag_ibfk_1;

ALTER TABLE Article
DROP FOREIGN KEY article_ibfk_1;

ALTER TABLE Comment
DROP FOREIGN KEY comment_ibfk_1;

ALTER TABLE techblog_db MODIFY COLUMN comment VARCHAR(255) DEFAULT 'default_comment';
-- create table users
create table users(
   id INT NOT NULL AUTO_INCREMENT,
   user_name varchar(50),
   parent int ,
   PRIMARY KEY ( id )
)

-- insert data to table users
INSERT INTO users (user_name,parent) VALUES 
("Ali", 2),
("Budi", 0),
("Cecep", 1)

-- query get parent user
SELECT 	a.id,
		a.user_name as UserName,
		b.user_name as ParentUserName 
FROM users a 
LEFT JOIN users b on a.parent=b.id



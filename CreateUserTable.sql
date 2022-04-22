use SmartBox;

#drop table Users;

create table Users(
user_id int not null auto_increment,
firstName varcharacter(100) not null,
lastName varcharacter(100) not null,
email varcharacter(100) not null,
userPass varcharacter(100) not null,
primary key (user_id)
);
use SmartBox;

#drop table Counties;

create table Counties(
county_id int not null auto_increment,
county_name varcharacter(100) not null,
state varcharacter(50) not null,
primary key (county_id)
);
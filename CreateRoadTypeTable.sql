use SmartBox;

#drop table Users;

create table Road_Type(
type_id int not null auto_increment,
type_name varcharacter(200) not null,
primary key (type_id)
);
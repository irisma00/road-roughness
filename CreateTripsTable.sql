use SmartBox;

#drop table Trips;

create table Trips(
trip_id int not null auto_increment,
creater_id int not null,
smartbox_id int not null,
create_date timestamp default now(), 
county_id int not null,
address varcharacter(600) not null,
file_url varcharacter(200) not null,
foreign key (county_id) references Counties (county_id),
foreign key (creater_id) references Users (user_id),
primary key (trip_id)
);
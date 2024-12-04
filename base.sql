create table utilisateur (
  id int primary key,
  email char(50) unique,
  mdp char(50) not null
);
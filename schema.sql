CREATE DATABASE shooting_star_locations;
USE shooting_star_locations;

CREATE TABLE locations (
    id integer PRIMARY KEY AUTO_INCREMENT,
    world integer NOT NULL,
    loc VARCHAR(255) NOT NULL,
    min datetime NOT NULL,
    max datetime NOT NULL,
    founder VARCHAR(255) NOT NULL
);

INSERT INTO shooting_star_locations(world, loc, min, max, founder)
values
(100, 'Location 1', '2023-01-01 12:30:00', '2023-01-01 12:40:00', 'BOB')
(100, 'Location 2', '2023-01-01 13:30:00', '2023-01-01 13:40:00', 'JOHN')
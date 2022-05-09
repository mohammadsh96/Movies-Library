-- ALTER TABLE movie
-- ADD id VARCHAR(20) NULL,
DROP TABLE movie ;
CREATE TABLE IF NOT EXISTS movie (
    id varchar(255),
    title varchar(255),
    time varchar(255),
    summary varchar(255)
   
);


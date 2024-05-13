DROP DATABASE IF EXISTS userInventory_db;
CREATE DATABASE userInventory_db;

-- use inventory_db database --
USE userInventory_db;

CREATE TABLE shoes (
    id INT NOT NULL, /* need to change to auto-increment*/
    color VARCHAR(20) NOT NULL,
    style VARCHAR(20)
);




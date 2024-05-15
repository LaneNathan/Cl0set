DROP DATABASE IF EXISTS userInventory_db;
CREATE DATABASE userInventory_db;

-- use inventory_db database --
USE userInventory_db;

CREATE TABLE shoes (
    id INT NOT NULL, /* need to change to auto-increment*/
    color VARCHAR(20) NOT NULL,
    style VARCHAR(20)
);



-- Create a database if it doesn't exist
CREATE DATABASE IF NOT EXISTS user_db;

-- Use the created database
USE user_db;

-- Create a users table
CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


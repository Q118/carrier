-- Write SQL queries do the following:

-- Create the carriers_db.
-- Switch to or use the carriers_db.
-- Create a carriers table with these fields:
    -- *id: an auto incrementing int that serves as the primary key
    -- *carrier_name: string
    -- *carrier_address: string
    -- address_2: string
    -- *city: string
    -- *state_code: string
    -- *zip: string
    -- *contact: string
    -- *phone: string
    -- fax: string
    -- *email: string

CREATE DATABASE IF NOT EXISTS carriers_db;
USE carriers_db;

CREATE TABLE IF NOT EXISTS carriers (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    carrier_name VARCHAR(255) NOT NULL,
    -- registration BOOL NOT NULL DEFAULT FALSE,
    carrier_address VARCHAR(255) NOT NULL,
    address_2 VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    state_code VARCHAR(255) NOT NULL,
    zip VARCHAR(255) NOT NULL,
    contact VARCHAR(255) NOT NULL,
    phone VARCHAR(255) NOT NULL,
    fax VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL
);
# Awesome Project Build with TypeORM

Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `data-source.ts` file
3. Run `npm start` command

CREATE DATABASE IF NOT EXISTS xtay;
USE DATABASE xtay;
CREATE SCHEMA xtay AUTHORIZATION pg_database_owner;
CREATE SCHEMA management AUTHORIZATION pg_database_owner;
CREATE SCHEMA reservation AUTHORIZATION pg_database_owner;
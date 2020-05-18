# cfl-backend

practice repo for CFL backend

setup

1. npm i
2. create a .env file & add USERNAME and PASSWORD to your postgreSQL account
3. add NODE_ENV=development to .env file.
4. specify PORT in .env file

to set up postgreSQL database locally (for Mac, not sure if this works on windows),
    in terminal:
1. psql postgres
2. CREATE DATABASE cfl OWNER '<your postgres username>';
    '\du' in postgres terminal will show you your users
3. run migrations and seeds in a new command line 
    knex migrate:latest
    knex seed:run
4. 'psql cfl' in a new command window, will open up a postgres terminal where you can query the new database
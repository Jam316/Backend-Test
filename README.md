# Backend Test
Node.JS + Sequelize

## Getting Started
1. Install the dependecies by running `npm run install` in the root folder.
2. Start the server by running `npm run start:dev` it will redirect you to the browser.

## Database Local Setup
1. Create your own database to your local machine.
1. Go to config folder and change the database credentials.
2. Migrate pre-made models by running `npm run migrate:up` to create tables in the database.
3. Seed data by running `npm run seed` to insert all values in the database.

## Fetch API Endpoint
Navigate `http://localhost:3002/getTop3ReadBook?country_code=SG` to the browser to get data result.

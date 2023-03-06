# Botify Backend Setup

Create a copy of `.env.example` and name it `.env`. These values are loaded into the environment and used within the app. 

- PGUSER: set this to your rit cs account
- PGPASSWORD: set this to you rit cs password
- PGHOST: set this to localhost
- PGDATABASE: set this to p320_27
- PGPORT: set this to 5432
- APP_PORT: set this to the port you want this app to run on


Run `npm i` to install packages

Run `ssh -N -L 5432:localhost:5432 <your-user-name>@starbug.cs.rit.edu`

Run `npm run start:dev` to start backend with nodemon so it updates with changes


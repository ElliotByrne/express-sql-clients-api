# TurnPoint Clients - ExpressJS CRUD API

This project was created as a demonstration of my NodeJS skills for a job opportunity at TurnPoint.

## Get started

First, make sure you've got the SQL database running.

1. `npm install`
2. `npm run start`
3. You should now see the log `Table created or existing` in your terminal. This means an sqlite database has been created locally.
4. Your endpoints should now be available at `localhost:3000`

Please clone the Client Table project to see an example of this API in action.

`git clone https://github.com/ElliotByrne/vite-react-ts-client-setup-wizard.git`

## Endpoints

### GET

`http://localhost:3000/clients`

### POST

1. Post a new client: `http://localhost:3000/clients`
2. Delete multiple clients: `http://localhost:3000/clients/delete`

### PUT

`http://localhost:3000/clients/{$ID}`

### DELETE

`http://localhost:3000/clients/{$ID}`

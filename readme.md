Run `npm i` to install all Node packages.

After making a new database and adding its name to your own `.env` file, run the following commands:

```
npm run migrate
npm run seed
```

You should now see two new tables, `suggestions` and `votes`, with seeded data in the `suggestions` table.

Run `npm run start` to start the server.

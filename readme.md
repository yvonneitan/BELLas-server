
Please run `npm i` for all the packages.

run `npm run start` to start the server 

Database: 

Please create a new Database on your local name `suggestion`

in your sql server run 
```
ALTER TABLE suggestions
    -> ADD COLUMN email VARCHAR(255) NOT NULL,
    -> ADD COLUMN name VARCHAR(255) NOT NULL,
    -> ADD COLUMN problem TEXT NOT NULL;
```
it should help you to create email name problem tables. 

last step: 
`npx knex seed:run` run this in your termnal, if you got `Ran 1 seed files` then you should be good 

Testing the connection: 
after start your server go to  http://localhost:8080/ you should see `Bell Hackathon Server`

after set up your database, run a get call in postman or browser: http://localhost:8080/suggestions, you should see 5 suggestions I pre-set up in the seeds, they now should be in your database. 

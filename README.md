# carrier
A sample app to add, delete, update and view carrier information

JEAR needs the ability to add, delete, update and view carrier information. Code a page that tracks at a minimum the information in the table below. 
Ideally this would be in visual studio using web forms with Sql Server database.

## To Run Locally:
1. Download and open files in IDE
2. Run `npm install` in the root of the app
3. Then `cd db` and run  `mysql -u root -p`.
4. With the `mysql>` command line tool running, enter the command `source schema.sql`. This will run the schema file and all of the queries in it to build our database.
5. Now insert the pre-defined entries by running the command: `source seeds.sql`.
6. Close out of the MySQL command line tool by running: `exit`.
7. The `cd ..` back to the root of the app and run `npm start`
8. Open up `localhost:8080` in your browser
9. Start CRUDing

 
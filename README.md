express tea-express-raw-sql
tea-express-raw-sql
git init
git add -A
git commit -m "inital commit"

express tea(somethingc omeback)
npm install
create .gitignore file

(saving so we can see individual commits)
git add -N .gitignore
git add -p .gitignore
TOTALLY MISSED THE REST


//create a postgres database now

➜  tea-express-raw-sql git:(master) ✗ psql -d postgres
psql (9.4.0)
Type "help" for help.

postgres=# CREATE DATABASE tea_express_raw_sql;
CREATE DATABASE
postgres=# \c
You are now connected to database "postgres" as user "chaseterzian".
postgres=# \c tea_express_raw_sql
You are now connected to database "tea_express_raw_sql" as user "chaseterzian".
tea_express_raw_sql=#

//sort of directions on how to get to that database
//added a bunch of shit
//get it loaded into app....ready but lot pulled in?

//server start
DEBUG=tea-express-raw-sql:* npm start

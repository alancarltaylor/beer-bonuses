# Beer bonuses

Installation:

```
createdb beer-bonuses
npm Install
cp .env.example .env
knex migrate:latest

```
#TODO

-document knex setup w/dotenv / .gitignore
-document process store

#create users
-require knex
-check email, name, and password are all there
  -if not, return an errors
-if we're ok
  -hash password
  -knex insert stuff from req.body
  -create a token
  -send back id, email, name, token

# create angular app

-cdn angular + router
-ng-app / module
-two routes
-html5 mode
-express wildcard route
-maybe layout??
-home controller/ template
-form / on submit
  -http call
  -handles success
  -store token
  -redicrect to home page
  -show errors
  -redirect to errorpage

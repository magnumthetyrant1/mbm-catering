# MBM Catering
## To run the website do the following:
   1. Clone the git repository locally
   2. Run:

   ~~~bash
   npm install && bower install
   ~~~

   3. Run:

   ~~~bash
   nodemon server.js
   ~~~

   4. open browser at ***http://localhost:3000/***

## to deploy to heroku:

 ~~~bash
 git push heroku master
 ~~~

check that the app is running:
~~~bash
heroku ps:scale web=1
~~~

Open the app:
~~~bash
heroku open
~~~

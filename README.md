# Cypress-Example

### This project runs a cypress automated test on a local ambient. The tests makes a register on a ONG website and logs in via data passed by query to the API, it responses will be used to create a ID to login with the newly registered account. All requests in the process are validated on code. 

>In order to execute this project you will need node js and cypress in your system

#### install dependences on folder backend:

* cd backend
* npm install

#### install dependences on folder frontend:

* cd frontend
* npm install

#### after start both on each folder

* npm start

#### When the aplication is up start cypress to run the tests

* ./node_modules/.bin/cypress open

#### Follow the instructions on screen to run tests E2E

## Generating Reports

> Local

#### To run and generate reports localy just run this code com terminal:

* npx cypress open

#### after that follow this on the cypress application:

* select e2e test mode
* choose a browser to run the tests
* select the spec to be tested 
* if there's any specs check the "main" variable at ./package.json to see where the test files should be
* wait until the test are done

> Remote
#### for this you will need to install mochawesome:

* npm i -D mochawesome

#### To run and generate reports remotely just run this code com terminal:

* npx cypress run --reporter mochawesome

#### after that the tests will run automatically, you can check the reports at:

* ./cypress/videos -> should show a .mp4 video record from the test
* ./cypress/videos -> should show screenshots from the test
* ./mochawesome-reports -> should have a json file and a html file, open the html file on a browser to se the report log


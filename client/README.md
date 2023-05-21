
## TaskPlanner

In order to get the server running, first make sure you are running the same Node.js version as the on that was used in the project:

    nvm install
    nvm use

Then, make sure you install all the dependencies:

    npm install

Or, if you are using Yarn:

    yarn install

After that, make sure you make a copy of the **.env-example** file, rename it to **.env**, then put the server url on the **REACT_APP_API_URL** field. It should look something like this:

    REACT_APP_API_URL="http://localhost:3333"

To run the project, you can use Yarn or NPM, as follows:

    npm start
    yarn start

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


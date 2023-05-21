## TaskPlanner

In order to get the server running, first make sure you are running the same Node.js version as the on that was used in the project:

    nvm install
    nvm use

Then, make sure you install all the dependencies:

    npm install

Or, if you are using Yarn:

    yarn install

To run the project, you can use Yarn or NPM, as follows:

    npm run dev
    yarn dev

The backend runs on port 3333 by default.

### Routes

 - /tasks - GET - lists all tasks
 - /tasks/[id] - GET - find task by id
 - /tasks - POST - add new task
	- headers: "Content-Type: application/json"
	- data: "{
				"title": "Example task",
				"description": "Description example",
				"finished": false
		}"
-	/tasks?id=[number] - PATCH- update task
	- headers: "Content-Type: application/json"
	- data: "{
				"title": "Example task",
				"description": "New description example",
				"finished": true
		}"
- /tasks?id=[number] - DELETE - delete task by id
- /tasks?id=[number] - PUT - finish/open task

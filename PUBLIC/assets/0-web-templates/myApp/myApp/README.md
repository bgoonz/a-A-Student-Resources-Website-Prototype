This project was created using [Microsoft Web Template Studio](https://github.com/Microsoft/WebTemplateStudio).

## Getting Started

The best way to launch the application is using the [Visual Studio Code Tasks](https://code.visualstudio.com/docs/editor/tasks). In the `vscode/tasks.json` file you can find all the tasks configured for this project.

To launch a task click on the menu `Terminal > Run Task` and select the task to launch (or press `Ctrl+Shift+P` and choose the `Tasks:Run Task` command).

To run the project:

1. Install dependencies using `Install dependencies` task.
2. Start development app using `Start App` task.

## File Structure
```
.
├── .vscode/ - Visual Studio Code configuration files
├── backend/ - Backend App
│ ├── scripts/ - scripts to publish
│ ├── sql/ - Handles all interactions with the cosmos database
│ ├── .env - API Keys
│ ├── constants.py - Defines the constants for the endpoints and port
│ └── server.py - Configures Port and HTTP Server and provides API routes
├── frontend/ - Frontend App
│ ├── public/ - public static files
│ ├── scripts/ - scripts to publish
│ ├── src/ - react app folder
│ │ ├── components - React components for each page
│ │ ├── App.js - React routing
│ └─└── index.js - React root component
└── README.md
```

### Frontend

The frontend is based on [create-react-app](https://github.com/facebook/create-react-app).

The most important scripts in the `package.json` are:
  - start: serves the frontend in development on http://localhost:3000/.
  - build: Builds the app for production to the `build` folder.
  - publish: Builds the app for production and moves the output to the `publish` folder.
  - test: Launches the test runner in the interactive watch mode.

To start the frontend application manually:
  1. Open a terminal and navigate to the `frontend` folder path.
  2. Use `yarn install` or `npm install` to install frontend dependencies.
  3. Use `yarn start` or `npm start` to start frontend app in development.

### Backend

The backend is based on [Flask](https://github.com/pallets/flask).

To start the backend application manually:
  1. Open a terminal and navigate to the `backend` folder path.
  2. Use `pip install -r requirements.txt` to install backend dependencies.
  3. Use `python3 server/server.py || python server/server.py || py -3 server/server.py` to start backend app in development. It is served on http://localhost:3001/

### Cosmos Database

**DO NOT share the keys publicly.**

The Cosmos database will take approximately 5 minutes to deploy.
Upon completion of deployment, a notification will appear in VS Code and your connection string will be replaced.

Additional documentation can be found here: [Web Template Studio Cosmos Docs](https://github.com/Microsoft/WebTemplateStudio/blob/dev/docs/services/azure-cosmos.md).

## Deployment

To deploy the application in an Azure App Service follow the deployment instructions:

- [Deployment using Web Template Studio Deploy command](https://github.com/microsoft/WebTemplateStudio/blob/dev/docs/generated-apps/deployment.md)

Consider adding authentication and securing backend API's by following [Azure App Service Security](https://docs.microsoft.com/en-us/azure/app-service/overview-security).

## Additional Documentation

- React - https://reactjs.org/
- React Router - https://reacttraining.com/react-router/
- Flask - http://flask.pocoo.org/
- Bootstrap CSS - https://getbootstrap.com/
- Cosmos DB - https://docs.microsoft.com/en-us/azure/cosmos-db/create-sql-api-python

# Search Proxy

## Description

This project is a web application built using NestJs, NextJs, React, Redux, and TypeScript. The application allows users to perform searches, view search history, and display search results with pagination. 
The application is styled with Ant Design components and utilizes Redux Toolkit for state management.

## Features

- **Search Functionality**: Users can enter search queries and view results.
- **Search History**: The application keeps track of past searches and displays them in a sidebar.
- **Pagination**: Search results are paginated for easier navigation.
- **Api documentation on backend**: Swagger is utilized in the backend in order to document the endpoints and their data.
- **i18n**: A simple translation system was created for this app in order to be quick and efficient.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **NextJs**: A React framework, utilized as React states to use a framework for new projects.
- **Redux Toolkit**: A library that simplifies Redux state management.
- **TypeScript**: A typed superset of JavaScript that enhances code quality and developer productivity.
- **Ant Design**: A UI library that provides a set of high-quality React components.
- **Axios**: A promise-based HTTP client for making API requests.
- **TypeOrm**: Used as the ORM.
- **SQLite**: Used as a persistent data store for history.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js**
- **npm**

### Installation

1. Clone the repository
2. In root folder of project, type npm start, wait until everything finishes logging as all dependencies will be installed and frontend will built for prod
3. Frontend will run on http://localhost:3000/ and backend will run on port 300.

## Notes
- Swagger can be reached at http://localhost:3001/api when the project is running
- You will see log lines
from Nest:

``` Nest application successfully started```

and from Nextjs something similar to

```
▲ Next.js 14.2.4
Local:        http://localhost:3000
✓ Starting...
✓ Ready
```

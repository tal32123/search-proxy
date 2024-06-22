# Project Name

## Description

This project is a web application built using NestJs, NexJs, React, Redux, and TypeScript. The application allows users to perform searches, view search history, and display search results with pagination. 
The application is styled with Ant Design components and utilizes Redux Toolkit for state management.

## Features

- **Search Functionality**: Users can enter search queries and view results.
- **Search History**: The application keeps track of past searches and displays them in a sidebar.
- **Pagination**: Search results are paginated for easier navigation.
- **Responsive Design**: The layout adjusts for different screen sizes, ensuring a good user experience on both desktop and mobile devices.
- **Api documentation on backend**: Swagger is utilized in the backend in order to document the endpoints and their data.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Redux Toolkit**: A library that simplifies Redux state management.
- **TypeScript**: A typed superset of JavaScript that enhances code quality and developer productivity.
- **Ant Design**: A UI library that provides a set of high-quality React components.
- **Axios**: A promise-based HTTP client for making API requests.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js**
- **npm**

### Installation

1. Clone the repository
2. In root folder of project, type npm start and all dependencies will be installed and frontend and backend will be ran on ports 3000 and 3001, respectively.

## Notes
- There is a history endpoint which can post as requested, however, I found it to make much more sense to log the history when doing the search in case there is a failure, the history will still be logged. 
    -This endpoint can still be tested in using swagger.
- Swagger can be reached app http://localhost:3001/api when the project is running
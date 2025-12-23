# Commercial Web Frontend

This is a React + Vite project for the commercial web frontend.

## Project Setup

1.  Open the terminal in the `web` directory.
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the development server:
    ```bash
    npm run dev
    ```

## Features

-   **User Management**: Login (Password/Code), Logout.
-   **Item Management**: List, Create, Edit, Delete, Search.
-   **Order Management**: List, Detail, Update Status, Delete.
-   **UI Library**: Ant Design.
-   **Routing**: React Router v6.
-   **HTTP Client**: Axios with interceptors.

## Configuration

-   **API Proxy**: Configured in `vite.config.js` to proxy `/api` requests to `http://localhost:8080`. Change the target if your backend runs on a different port.

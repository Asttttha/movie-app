# Movies list

This is a simple and responsive movie list web app that features two main components. The home page displays a list of movies fetched from API, and each card contains all necessary attributes of the movie. Clicking on a card redirects you to the IMDb page of that movie. This web app is designed for seamless navigation and provides a great user experience across all devices. API credentials are stored in an `.env` file for security.

#### _Deployed link [here](https://movie-app-astttthas-projects.vercel.app/)_

## Technologies Used

- **React.js**: For building the user interface
- **Redux**: For state management
- **Axios**: For API integration
- **Custom CSS**: For styling the app
- **React-hot-toast**: For user notifications
- **React-icons**: For icons
- **React-router-dom**: For routing
- **Google Fonts**: For fonts

## Features

- **Responsive Design**: Ensures the app works well on all devices.
- **API Integration**: Dynamically fetches and displays movie data.
- **Favorites Management**: Users can add or remove movies from their favorites list.
- **Notifications**: Uses react-hot-toast to notify users about their actions.


## Setup

To get a local copy up and running follow these simple steps.

### Prerequisites

- Node.js installed
- npm (Node package manager) installed (or yarn)

### Installation

1. **Clone the repo**

```sh
git clone https://github.com/Asttttha/movie-app.git
```

2. **Navigate to the project directory**

```sh
cd movie-app
```

3. **Install dependencies**

```sh
npm install axios react-redux redux @reduxjs/toolkit @redux-devtools/extension react-icons redux-thunk react-router-dom react-hot-toast
```

4. **Start the development server**

```sh
npm start
```

## Environment Variables

Create a `.env` file in the root of your project to store API credentials:

```plaintext
REACT_APP_API_URL= example@url.com
```


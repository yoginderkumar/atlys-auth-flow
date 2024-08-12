# Atlys Flowbird

## Overview

This project is a mini frontend application built to implement an authentication flow, following a [Design](https://www.figma.com/design/S4bZXDniOieMhyGIpTnVu5/Frontend-Developer%3A-Atlys?node-id=13-10&t=SQLWKMFyiivgKFIi-0) provided via Figma. The focus is on delivering a high-quality user interface with smooth animations, modular and maintainable code, and a seamless user experience.

The application is developed using React with TypeScript to ensure type safety and scalability. TailwindCSS is utilized for styling, allowing for rapid development and adherence to the design specifications. The project emphasizes the importance of clean component API design, responsiveness, and UI state management.

## Live Demo

[atlys-auth-yogi](https://atlys-auth-yogi.netlify.app)
Credentials :- 
- Email :- yoginderkumar2510@gmail.com
- Password :- password

## Features

- **User registration**: User should be able to create new account(Register) if they don't have an account.
- **User login**: User can login to existing account with the credentials shared above.
- **Posts**: I You should be able to view/create posts once you have logged in with right credentials.
- **Responsive design**: I have tried to keep it as responsive as I could (Hope it doesn't break in small screens).


## Technologies Used

- React
- TypeScript
- TailwindCSS
- emoji-picker-react
- react-hot-toast
- UUID

## Getting Started

### Prerequisites

- Node.js (version 14 or later recommended)
- npm or yarn

### Installation

1. Clone the repository:

```
git clone https://github.com/yoginderkumar/atlys-auth-flow.git
```

2. Navigate to the project directory:

```
cd atlys-auth-flow
```

3. Install dependencies:

```
npm install
```

## Usage

1. Start the development server:

```
npm start
```

2. Open your browser and visit `http://localhost:3000` to access the application.

## Project Structure

- `src/components`: Contains the all UI components for the application.
  - `Icons.tsx`: Provides all the icons used in the application.
  - `index.ts`: It is just an exporter for all the components.
- `src/Auth`: Contains the authentication files.
  - `LoginForm.tsx`: Holds the logic for login.
  - `RegisterForm.tsx`: Holds the logic for register.
- `src/constants`: Contains all the constant data files.
  - `posts.ts`: Holds all the hard coded posts.
  - `users.ts`: Holds all the hard coded users.
- `src/pages`: Contains home page to the auth and feed flow for now.
- `src/services`: Contains services for API interaction.
  - `auth.ts`: Defines mock API for the authentication flow.
  - `posts.tsx`: Defines mock API for the posts flow.
- `src/types`: Contains types/interfaces for type-safety for the data defined.
  - `posts.ts`: Provides all the post-related types used.
  - `auth.ts`: Provides all the post-related types used.
- `src/context`: Contains contexts for app to be shared.
  - `Authentication.tsx`: Contains auth context for now to safely emit the the authenticated user.

## Dependencies

The project utilizes the following dependencies:

- `react`: The core React library.
- `react-dom`: Provides DOM-specific methods for React.
- `tailwind`: Used for styling components with CSS.
- `emoji-picker-react`: Used for letting user pick an emoji while creating posts.
- `uuid`: Used for creating unique IDs for posts and users


## Performance Optimizations

To ensure a smooth and responsive user experience, the following performance optimizations have been implemented:

- **Memoization**: Components and functions are memoized using the `memo` higher-order component and the `useMemo` hook, preventing unnecessary re-renders and improving performance.

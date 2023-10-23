# Description

The project was created as a solution to a task set by the Donatix company in connection with my application for a junior position.The solution to the problem was implemented using the JavaScript framework - React.js

# Project structure

Like any application created with React, this one is located in the directory --> src

The structure is implemented as follows:

-- components
-- context
-- App.js
-- index.css
-- index.js

## components

### Button

The Button component is created as per the assignment requirement as a reusable component.The main styling of the component is implemented using a separate file --> Button.css.

### Filter

The Filter component was created in order to solve the requirement to create a filtered result according to: category, name and price.Here is implemented the logic through which the data is filtered according to the user's interaction.

### Footer

The footer component was created to give the current project a finished look. Every modern spa app invariably contains a footer section. That is why this component is included in order to meet these requirements. The styling of the component is implemented through a separate file --> Footer.css.

### Home

The component was created as the main component to represent the home page of the application. It is represented by the components - Filter and ProductCard.

### Navigation

Similar to the footer component, the navigation was created as a response to the requirements of a spa application. Because the solution to the given task is implemented by a single page, the navigation does not actually include other elements at the moment. However, if necessary, it can also be added with the help of a react router to implement the navigation between the different pages.

### ProductCard

The component was created to meet the requirement to present the result.

## context

Contexts are created to easily pass data between components.

### Category Context

The logic responsible for sending the request to the server and processing the received response is implemented here. Through the context, the data received from the server is easily forwarded to a component where it can be used as intended.

### Product Context

The logic responsible for sending the request to the server and processing the received response is implemented here. Through the context, the data received from the server is easily forwarded to a component where it can be used as intended.

## App.js && ## index.js

By default, index.js and App.js is where React implements the rendering of the created components.

## index.css

This is where the global styling settings are created.


# GitHub repository

This is a link to the source code of the application --> https://github.com/Medi-Demirev/GREET_API_TASK

# Firebase Deploy

This is a link to the deployed application --> https://greet-api-task.web.app/

# Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


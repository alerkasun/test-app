# Food Trucks Project

## Overview
This project is a practical engineering challenge that was designed to be completed within 2-3 hours. It involves a web application that displays food trucks on a map, showcasing their locations and providing additional information upon interaction.

## Getting Started

To run this project, you'll need Docker installed on your machine. Once Docker is set up, you can clone this repository and execute the following command to start the application:

```bash
docker-compose up --build
```

This command builds the necessary Docker containers for the backend and frontend of the application and starts the services.

## Features

### Current Features
- **Display Food Trucks**: The application displays markers on the map for various food trucks, sourced from the provided data.
- **Information Pop-up**: Clicking on a truck marker displays a popup with information about the food truck, such as name, address, and food items offered.
- **Ratings and Reviews**: Each food truck is rated, and users can view generated reviews that provide insights into the quality and popularity of the food offered.
- **Advanced Filtering**: Users can filter food trucks based on ratings, the presence of reviews, and specific keywords, enhancing the searchability and user experience.

### Planned Features
Due to the time constraints of the test challenge, not all planned features could be implemented. Future enhancements include:
- **Working Hours**: Integration of working hours for each food truck, allowing users to see when trucks are operational.
- **Navigation to Trucks**: Implementation of a navigation feature that would allow users to get directions to a specific food truck directly from the map interface.

## Technologies Used
- **Frontend**: React.js with Leaflet for map interaction.
- **Backend**: Ruby on Rails API to serve food truck data.
- **Database**: PostgreSQL, utilized for storing food truck information.
- **Docker**: Used to containerize and manage application components seamlessly.

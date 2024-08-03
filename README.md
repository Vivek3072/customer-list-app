# Customer Details Portal

**Project Url** - https://customer-list-app.netlify.app/

This is a single-page application (SPA) developed in React and TypeScript that shows a customer details portal. The portal contains a list of customers on the left side, and upon clicking a customer, their details are shown on the right side. The customer details include the customer name, title, address, and a 3x3 grid of 9 photos that refresh every 10 seconds. The selected customer is highlighted.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A strongly typed programming language that builds on JavaScript.
- **Axios**: A promise-based HTTP client for making requests to the Unsplash API.
- **Unsplash API**: Used to fetch random photos.
- **Vite**: A frontend build tool that provides a faster and leaner development experience for modern web projects.
- **CSS**: For styling the application.

## Features

- **Customer List**: Displays a list of customers.
- **Customer Details**: Shows the details of the selected customer, including name, title, address, and a photo grid.
- **Photo Grid**: Displays a 3x3 grid of photos that refresh every 10 seconds.
- **Highlighting**: Highlights the selected customer in the list.
- **Countdown Timer**: Shows a timer indicating when the next set of photos will be fetched.

## Prerequisites

- Node.js (>= 12.x)
- npm (>= 6.x)

## Getting Started

### Clone the repository
- git clone https://github.com/your-username/customer-details-portal.git
- cd customer-details-portal

### Environment Variables
- Create a .env file in the root directory of the project and add your Unsplash API access key:
- **VITE_UNSPLASH_ACCESS_KEY** = your_unsplash_access_key

### Run the application
- npm run dev
- The development server will run on http://localhost:5173/
## Components
### App.tsx
- The main component that holds the state of the customers and the selected customer ID. It renders the CustomerList and CustomerDetails components.

### CustomerList.tsx
- Displays the list of customers. It highlights the selected customer and allows users to select a customer.

### CustomerDetails.tsx
- Displays the details of the selected customer, including a timer that shows when the next set of photos will be fetched. It also renders the ImageGrid component.

### ImageGrid.tsx
- Fetches and displays a grid of 9 photos from the Unsplash API. It updates the photos every 10 seconds.

### types.ts
- Contains the TypeScript types used in the application.

## CSS
### App.css
- Contains the basic styles for the application, including the layout and timer styles.

## How to Use

- Start the development server using npm run dev.
- The application will open in your default browser.
- Click on a customer from the list on the left to view their details on the right.
- The photos in the grid will refresh every 10 seconds, and a countdown timer will show the time remaining for the next refresh.

## Troubleshooting

- Ensure you have added the Unsplash API access key in the .env file.
- Make sure you are connected to the internet to fetch photos from the Unsplash API.
- If you encounter any errors, check the browser console for more details.


## Contributing

Contributions are welcome! If you have ideas for improvements, new features, or bug fixes, feel free to open an issue or submit a pull request. Don't forget to give it a star ⭐.

## Connect with Me

Feel free to connect with me on social media or check out my portfolio website:

- [GitHub](https://github.com/Vivek3072)
- [LinkedIn](https://www.linkedin.com/in/vivek-srivas/)
- [Instagram](https://www.instagram.com/vvk_srvstv_/)
- [Portfolio](https://vivek-srivastava.netlify.app/)

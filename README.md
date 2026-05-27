# E-Commerce Mobile App (React Native + MERN)
![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
A full-stack, cross-platform e-commerce mobile application built from scratch using **React Native** and the **MERN Stack**. Designed with modern UI/UX principles (Figma conversion), featuring seamless state management via **Redux Toolkit** and a robust, fault-tolerant backend.
## 🚀 Features
- **Cross-Platform Compatibility:** Fully optimized and deployable on both iOS and Android platforms.
- **Redux State Management:** Efficient global state handling for complex cart operations, achieving high code reusability.
- **MERN Backend:** Scalable RESTful API built with Node.js, Express, and MongoDB.
- **Fault-Tolerant Architecture:** Backend gracefully falls back to an in-memory caching layer if the MongoDB connection is unavailable, ensuring the UI never crashes during demos.
- **Premium UI:** Highly responsive UI components translated directly from professional Figma designs, featuring micro-interactions and consistent styling.
## 📁 Project Structure
```
ecommerce-mobile-app/
│
├── backend/               # Node.js, Express, Mongoose
│   ├── data/              # Mock product data
│   ├── models/            # MongoDB schemas
│   ├── server.js          # Express server entry point
│   └── package.json       
│
└── frontend/              # React Native, Expo, Redux
    ├── app/               # Expo Router screens (Home, Cart)
    ├── store/             # Redux store & slices
    └── package.json       
```
## 🛠️ Installation & Setup
### Prerequisites
- [Node.js](https://nodejs.org/) (v16+)
- [Expo CLI](https://docs.expo.dev/)
- (Optional) [MongoDB](https://www.mongodb.com/) running locally on port `27017`
### 1. Backend Setup
Navigate to the backend directory, install dependencies, and start the server.
```bash
cd backend
npm install
npm start
```
*Note: The server runs on `http://localhost:5000`. If you do not have MongoDB running, the backend will automatically switch to offline mock data mode!*
### 2. Frontend Setup
Navigate to the frontend directory, install dependencies, and start the React Native bundler.
```bash
cd frontend
npm install
npm run web      # Run on browser
# OR
npm run android  # Run on Android emulator
```
*Tip: Download the **Expo Go** app on your physical mobile device and scan the QR code in the terminal to view the app directly on your phone.*
## 💻 Technical Highlights
- Minimized prop-drilling by leveraging **Redux Toolkit** for shopping cart mechanics.
- Implemented **Axios** for clean, promise-based API integration with robust error handling.
- Designed with **Flexbox** to ensure pixel-perfect responsive layouts across varying screen sizes.
---
*Developed by Dhruv Pradhan for showcasing cross-platform mobile and web application development skills.*

# MERN-Stack-Projects
A Series of MERN Projects


# 01 : Book store

MERN STACK PROJECT : Book Store

Folder : backend
=> npm init -y
=> add module : type module
=> add scripts 
	-- "start" :"node index.js"
	-- "dev" : "nodemon index.js"



=> npm i express nodemon


mongodb Url : https://account.mongodb.com

mongoose Url : https://mongoosejs.com/

# Models
- bookModel.js
- schema




# Cors Policy 
- npm i cors 
- import cors from 'cors'
- app.use(cors())
or
- app.use(cors({
    origin: 'https://localhost:3002',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type']
}))











==> Frontend
npm create vite@latest 
- project name
- react
- Javsacript

=> cd project name
- npm i 


=> Add tailwind css 
connamds
- npm install -D tailwindcss postcss autoprefixer
- npx tailwindcss init -p

- open index.css and clear then paste
@tailwind base;
@tailwind components;
@tailwind utilities;

- delete app.css


=> app.jsx is main file


--- React Router DOM
- npm i react-router-dom
--- in main.jsx
- import { BrowserRouter } from 'react-router-dom'
  <BrowserRouter>
    <App />
  </BrowserRouter>
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'styles/tailwind.css'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import Contact from 'pages/contact'
import Homepage from 'pages/homepage'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={"/" ${id}} element={<Homepage />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

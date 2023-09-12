import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './components/login'
import "./css/style.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>
      <Login apiUrl="http://127.10.10.10:3000/api/login/user" />
    </div>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css'

// renders the component tree inside the element with id root
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // Component Tree
  <React.StrictMode> 
    <App /> 
  </React.StrictMode>,
)

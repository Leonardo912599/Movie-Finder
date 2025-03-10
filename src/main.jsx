import React from 'react'
import ReactDOM from 'react-dom/client'
import AppPeliculas from './AppPeliculas'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <AppPeliculas />
    </React.StrictMode>,
  </BrowserRouter>
)

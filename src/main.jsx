import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

//Oppretter en React-rot i HTML-elementet med id "root"
createRoot(document.getElementById('root')).render(

  //Gjengir hovedkomponenten (App) i root-elementet
  <StrictMode>
    <App />
  </StrictMode>,
)

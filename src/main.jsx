import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RickmortyApp } from './components/RickmortyApp'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RickmortyApp />
  </StrictMode>
)

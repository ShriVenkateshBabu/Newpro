import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Dataprovider from './DataContext/Dataprovider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
   <Dataprovider>
    <App />
   </Dataprovider>
   </BrowserRouter> 
  </StrictMode>,
)

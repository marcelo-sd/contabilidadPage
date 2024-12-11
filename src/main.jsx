import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar Bootstrap

createRoot(document.getElementById('root')).render(

<BrowserRouter>
  <App />
  </BrowserRouter>
  )
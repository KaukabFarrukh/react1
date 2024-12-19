import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'; 
import './index.css'
import App from "./App";
import { ColorProvider } from './contexts/ColorContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ColorProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ColorProvider>
  </StrictMode>,
);

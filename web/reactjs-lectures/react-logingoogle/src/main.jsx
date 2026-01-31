import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google';

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <GoogleOAuthProvider clientId="29832835019-k46mhhuvon90ojg6bep2pm7mmq5v76s0.apps.googleusercontent.com">
      
      <App />

    </GoogleOAuthProvider>
  
  </StrictMode>,
)

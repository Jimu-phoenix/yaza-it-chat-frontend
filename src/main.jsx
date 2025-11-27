import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ClerkProvider } from '@clerk/clerk-react'

const clerk_Key = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if(!clerk_Key) throw new Error("Clerk key unavailable")

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={clerk_Key}>
    <App />
    </ClerkProvider>
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import UserContextProvider from './context/UserContextProvider.jsx'
UserContextProvider

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </StrictMode>,
)

import { lazy, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
// Lazy Import
const App = lazy(() => import("./App.jsx"));
// Suspense Loading (Custom)
import Suspense from './utils'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <BrowserRouter>
    <Suspense>
      <App />
    </Suspense>
  </BrowserRouter>
  // </StrictMode>,
)

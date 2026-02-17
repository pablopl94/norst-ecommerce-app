import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { EcommerceApp } from './EcommerceApp'
import './index.css'
import './translates/i18next.config'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <EcommerceApp />
  </StrictMode>,
)

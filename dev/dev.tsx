import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { 
  CroquetDevMenu,
  CroquetQRCode,
} from '@components'

import 'primereact/resources/themes/lara-light-cyan/theme.css'

const container = document.getElementById('root')
createRoot(container!).render(
  <StrictMode>
    <CroquetDevMenu />
    <CroquetQRCode />
  </StrictMode>
)

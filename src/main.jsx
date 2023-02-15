import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Page from './landingpage'
import Formulario from './replypage'
import FullPage from './fullpage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Page/>
  </BrowserRouter>
)


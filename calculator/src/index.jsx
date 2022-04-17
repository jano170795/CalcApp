import React from 'react'
//Old
//import ReactDOM  from 'react-dom'
//import {render} from 'react-dom'
import {createRoot} from 'react-dom/client'
import App from './App'

//Old
//const element = <App/>
//ReactDOM.render( element, document.getElementById('root'))

//New
const container = document.getElementById('root');
const root = createRoot(container)
root.render(<App tab="home" />)
// forma normal con JS
// const element = document.createElement('h1')
// element.innerText = 'Hello React'
// const container = document.getElementById('root')
// container.appendChild(element)

// con react
import React from 'react'
import ReactDOM from 'react-dom'
import './components/styles/Welcome.css'
import App from './components/App'

const container = document.getElementById('root')

// ReactDOM.render(__QUE vamos a renderar__, __DONDE vamos a render__)
ReactDOM.render(<App />, container)
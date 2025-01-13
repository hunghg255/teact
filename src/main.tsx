import './style.css'
import ReactDOM from './lib/teact/teact-dom'
import React from './lib/teact/teact'
import App from './App'

const app = document.querySelector<HTMLDivElement>('#app')!

ReactDOM.render(<App />, app)

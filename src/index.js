import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import registerServiceWorker from './registerServiceWorker'

import Layout from './Layout'
import PropertyList from "./components/PropertyList"

import './styles/index.css'

// Main App
class App extends Component {
  // Set initial state
  state = {
    userId: null
  }

  constructor(props) {
    super(props)

    // Lets test for a userID, if none is present lets create a new one
    this.state.userId = localStorage.getItem('userId')
    if (!this.state.userId) {
      this.state.userId = (Math.floor(Math.random() * (1000)) + 1)
      localStorage.setItem('userId', this.state.userId)
    }
  }

  render() {
    return (
      <Layout component={<PropertyList userId={this.state.userId} />} />
    )
  }
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)

registerServiceWorker()

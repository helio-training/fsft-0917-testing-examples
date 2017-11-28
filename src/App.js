import React, { Component } from 'react'
import People from './components/People'
import PeopleData from './fixtures/people'

class App extends Component {
  render() {
    return (
      <div>
        <h1>People</h1>
        <People data={PeopleData} />
      </div>
    )
  }
}

export default App

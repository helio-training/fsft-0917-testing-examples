import React, { Component } from 'react'
import PropTypes from 'prop-types'

const renderPerson = ({ id, name }) => (
  <li key={id}>{name}</li>
)

export const filterPeople = (people = [], searchParameter = '') =>
  people.filter(person => new RegExp(searchParameter, 'i').test(person.name))

export default class extends Component {

  static propTypes = {
    data: PropTypes.array.isRequired,
  }

  constructor(props) {
    super(props)

    this.state = {
      search: '',
      people: props.data || [],
    }
  }

  render() {
    const { people } = this.state
    const { data } = this.props

    return (
      <div>
        <form>
          <input
            type="search"
            placeholder="Search People"
            onChange={e => this.setState({
              search: e.target.value,
              people: [...filterPeople(data, e.target.value)],
            })} />
        </form>
        <ul>
          {people.map(person => renderPerson(person))}
        </ul>
      </div>
    )
  }
}
import React from 'react'
import People, { filterPeople } from './People'
import { shallow } from 'enzyme'
import Data from '../fixtures/people'

it(`renders out all the people in <li> tags`, () => {
  const wrapper = shallow(<People data={Data} />)
  expect(wrapper.find('li').exists()).toBeTruthy()
})


it(`filters people properly when found`, () => {
  const people = [
    { name: 'Bob'},
    { name: 'Wes'},
    { name: 'Tyler'}
  ]
  expect(filterPeople(people, 'b').length).toEqual(1)
})

it(`filter parameter doens't match the data`, () => {
  const people = [
    { name: 'Bob'},
    { name: 'Wes'},
    { name: 'Tyler'}
  ]
  expect(filterPeople(people, 'z').length).toEqual(0)
})
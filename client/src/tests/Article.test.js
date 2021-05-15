import React from 'react'
import '../components/Article.js'
import ArticleObj from '../components/Article.js'
import { mount, shallow } from 'enzyme'
import Card from 'react-bootstrap/Card'
import Article from '../components/Article'

//render without crashing
test('render without crashing', () => {
  const wrapper = mount(<ArticleObj />)

  expect(wrapper.find(Card)).toBeTruthy()
  expect(wrapper.find(Card.Header)).toBeTruthy()
  expect(wrapper.find(Card.Body)).toBeTruthy()
})

// //print expected title
// test('Print expected title', () => {

//     const wrapper = mount(<ArticleObj title="Sample" author="Ellai" />)
//     const header = wrapper.find(Card.Header).text()
//     expect(header).toEqual("Sample")
// })

// //print expected body
// test('Print expected body', () => {
//     const wrapper = mount(<ArticleObj title="Sample" author="Ellai" />)
//     const body = wrapper.find(Card.Body).text()
//     expect(body).toEqual("Author: Ellai")
// })

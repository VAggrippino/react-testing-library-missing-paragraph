import React from 'react'
import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'
import Main from './Main'

test('has a heading', () => {
  render(<Main />)
  const heading = screen.getByRole('heading', {level: 1})
})

test('has a paragraph', () => {
  render(<Main />)
  const paragraph = screen.getByRole('paragraph')
})
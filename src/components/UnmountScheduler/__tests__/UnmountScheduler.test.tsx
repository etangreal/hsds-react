import * as React from 'react'
import { mount, render } from 'enzyme'
import { UnmountScheduler } from '../UnmountScheduler'

describe('className', () => {
  test('Has default className', () => {
    const wrapper = render(<UnmountScheduler />)

    expect(wrapper.hasClass('c-UnmountScheduler')).toBeTruthy()
  })

  test('Can render custom className', () => {
    const customClassName = 'blue'
    const wrapper = render(<UnmountScheduler className={customClassName} />)

    expect(wrapper.hasClass(customClassName)).toBeTruthy()
  })
})

describe('HTML props', () => {
  test('Can render default HTML props', () => {
    const wrapper = render(<UnmountScheduler data-cy="blue" />)

    expect(wrapper.attr('data-cy')).toBe('blue')
  })
})

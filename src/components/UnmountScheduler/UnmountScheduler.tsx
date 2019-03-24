import * as React from 'react'
import propConnect from '../PropProvider/propConnect'
import getValidProps from '@helpscout/react-utils/dist/getValidProps'
import { classNames } from '../../utilities/classNames'
import { noop } from '../../utilities/other'
import { UnmountSchedulerUI } from './UnmountScheduler.css'
import { COMPONENT_KEY } from './UnmountScheduler.utils'

export interface Props {
  className?: string
  children?: any
  innerRef: (node: HTMLElement) => void
}

export class UnmountScheduler extends React.PureComponent<Props> {
  static className = 'c-UnmountScheduler'
  static defaultProps = {
    innerRef: noop,
  }

  getClassName() {
    const { className } = this.props
    return classNames(UnmountScheduler.className, className)
  }

  render() {
    const { children, innerRef, ...rest } = this.props

    return (
      <UnmountSchedulerUI
        {...getValidProps(rest)}
        className={this.getClassName()}
        innerRef={innerRef}
      >
        {children}
      </UnmountSchedulerUI>
    )
  }
}

const PropConnectedComponent = propConnect(COMPONENT_KEY)(UnmountScheduler)

export default PropConnectedComponent

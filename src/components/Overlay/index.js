import React from 'react'
import PropTypes from 'prop-types'
import classNames from '../../utilities/classNames'
import { noop } from '../../utilities/other'

export const propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  fixed: PropTypes.bool,
  transparent: PropTypes.bool
}

const defaultProps = {
  onClick: noop
}

const Overlay = props => {
  const {
    children,
    className,
    fixed,
    onClick,
    transparent,
    ...rest
  } = props

  const componentClassName = classNames(
    'c-Overlay',
    fixed && 'is-fixed',
    transparent && 'is-transparent',
    className)

  return (
    <div className={componentClassName} role='dialog' onClick={onClick} {...rest}>
      {children}
    </div>
  )
}

Overlay.propTypes = propTypes
Overlay.defaultProps = defaultProps

export default Overlay

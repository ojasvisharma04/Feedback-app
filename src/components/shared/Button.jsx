import React, { version } from 'react'
import PropTypes from 'prop-types'
import { isDisabled } from '@testing-library/user-event/dist/utils'

function Button({children, type, isDisabled, version}) {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
      {children}
    </button>
  )
}

Button.defaultProps={
    version:'primary',
    isDisabled: false,
    type:'button'
}

Button.propTypes={
    children: PropTypes.node.isRequired,
    version: PropTypes.string,
    type: PropTypes.string,
    isDisabled: PropTypes.bool,
}
export default Button

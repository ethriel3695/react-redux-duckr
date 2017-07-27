import React from 'react'
import PropTypes from 'prop-types'
import { button } from './styles.css'

GitHubAuthButton.propTypes = {
  onAuth: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
}

export default function GitHubAuthButton (props) {
  return (
    <button onClick={onAuth} className={button}>
      {isFetching === true
        ? 'Loading'
        : 'Login with github'}
    </button>
  )
}
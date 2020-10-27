import React from "react"
import PropTypes from "prop-types"
import { navigate } from "gatsby"
import { isLoggedIn } from "../utils/auth"

const Cookies = require('js-cookie');

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  // if (!isLoggedIn() && location.pathname !== `/app/login`) {
  if (!Cookies.get('session') && location.pathname !== `/app/login`) {
    // If we’re not logged in, redirect to the home page.
    navigate(`/app/login`)
    return null
  }

  return <Component {...rest} />
}

PrivateRoute.propTypes = {
  component: PropTypes.any.isRequired,
}

export default PrivateRoute

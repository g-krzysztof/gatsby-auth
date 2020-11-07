import React from "react"
import { navigate } from "gatsby"
import View from "./View"
import { handleLogin } from "../utils/auth"
import styles from "./Form/form.module.css";

const Cookies = require('js-cookie')

class Login extends React.Component {
  state = {
    username: ``,
    password: ``,
    displayLogButton: true,
    error: false
  }

  clearSubmitButton = () => {
    this.setState({
      displayLogButton: true
    })
  }

  setError = (errorMessage) => {
    this.setState({
      error: errorMessage
    })
  }

  handleUpdate(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  async handleSubmit(event) {
    event.preventDefault()
    this.setState({
      displayLogButton: false
    })
    handleLogin(this.state, this.clearSubmitButton, this.setError)
  }

  render() {
    if (Cookies.get('session')) {
      navigate(`/app/profile`)
    }

    return (
      <View title="Log In">
        <form
            className={styles.form}
            method="post"
            onSubmit={event => {
              this.handleSubmit(event)
            }}
        >
          <p className={styles[`form__instructions`]}>
            Welcome on <code>auth</code> page.
          </p>
          <label className={styles[`form__label`]}>
            E-mail
            <input
                className={styles[`form__input`]}
                type="text"
                name="username"
                onChange={event=>this.handleUpdate(event)}
            />
          </label>
          <label className={styles[`form__label`]}>
            Password
            <input
                className={styles[`form__input`]}
                type="password"
                name="password"
                onChange={event=>this.handleUpdate(event)}
            />
          </label>
          {this.state.error ? <div>{this.state.error}</div> : null}
          {this.state.displayLogButton ? <input className={styles[`form__button`]} type="submit" value="Log In" /> : <div>Spinner</div>}
        </form>
      </View>
    )
  }
}

export default Login

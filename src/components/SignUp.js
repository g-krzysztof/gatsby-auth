import React from "react"
import { Link } from "gatsby"
import View from "../components/View"
import styles from "../components/Form/form.module.css";

class SignUp extends React.Component {

    state = {
        username: ``,
        password: ``,
        displayLogButton: true,
        error: false
    }

    render()
    {
        return(
                <View title="Register new account.">
                    <form
                        className={styles.form}
                        method="post"
                        onSubmit={event => {
                            this.handleSubmit(event)
                            // navigate(`/app/profile`)
                        }}
                    >
                        <p className={styles[`form__instructions`]}>
                            Provide your <code>e-mail</code> and <code>password</code>.
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
                        <label className={styles[`form__label`]}>
                            Secret code
                            <input
                                className={styles[`form__input`]}
                                type="text"
                                name="secret"
                                onChange={event=>this.handleUpdate(event)}
                            />
                        </label>
                        {this.state.error ? <div>{this.state.error}</div> : null}
                        {this.state.displayLogButton ? <input className={styles[`form__button`]} type="submit" value="Register" /> : <div>Spinner</div>}
                    </form>
                </View>
        )
    }
}

export default SignUp

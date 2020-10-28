import React from "react"
import {Link, navigate} from "gatsby"
import View from "../components/View"
import styles from "../components/Form/form.module.css";
import {handleLogin} from "../utils/auth";

class SignUp extends React.Component {

    state = {
        name: ``,
        email: ``,
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
        // handleLogin(this.state, this.clearSubmitButton, this.setError)
        //  handleLogin = ({ username, password }, clearSubmitButton, setError) => {

            const data = { name: this.state.name, email: this.state.email, password: this.state.password };

            fetch('https://express-api-krissg.netlify.app/.netlify/functions/api/user/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
                .then(response => {
                    if(response.status === 400){
                        return response.json()
                            .then(data=>{
                                this.clearSubmitButton()
                                this.setError(data.error)
                            })
                    }
                    if(data.status === 200){
                        // Cookies.set('session', data.json.token);
                        // setUser({
                        //     name: data.json.name,
                        //     legalName: data.json.user,
                        //     email: data.json.token,
                        // });
                        return navigate(`/app/success`)
                    }

                })
                .catch((error) => {
                    console.error('Error:', error);
                    this.clearSubmitButton()
                });

            return false
        // }
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
                            Name
                            <input
                                className={styles[`form__input`]}
                                type="text"
                                name="name"
                                onChange={event=>this.handleUpdate(event)}
                            />
                        </label>
                        <label className={styles[`form__label`]}>
                            E-mail
                            <input
                                className={styles[`form__input`]}
                                type="text"
                                name="email"
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

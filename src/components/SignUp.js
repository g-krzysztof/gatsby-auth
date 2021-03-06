import React from "react"
import {Link, navigate} from "gatsby"
import View from "../components/View"
import styles from "../components/Form/form.module.css";
import {handleLogin} from "../utils/auth";

import { PrimaryButton } from "@fluentui/react";
import { TextField } from '@fluentui/react';

const dotenv = require('dotenv');
dotenv.config();

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

            const data = { name: this.state.name, email: this.state.email, password: this.state.password };

            fetch(`${process.env.API_PATH}user/register`, {
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
                    if(response.status === 200){
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
                        <TextField
                            label="name"
                            // className={styles[`form__input`]}
                            type="text"
                            name="name"
                            onChange={event=>this.handleUpdate(event)}
                        />
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
                        <div style={{height: '20px'}}></div>
                        {this.state.error ? <div>{this.state.error}</div> : null}
                        {this.state.displayLogButton ? <PrimaryButton type="submit" >Register</PrimaryButton> : <div>Spinner</div>}
                    </form>
                </View>
        )
    }
}

export default SignUp

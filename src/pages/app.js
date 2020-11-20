import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/Layout"
import Profile from "../components/Profile"
import Memory from "../components/Memory"
import Airly from "../components/Airly"
import Details from "../components/Details"
import Login from "../components/Login"
import SignUp from "../components/SignUp"
import Success from "../components/Success"
import PrivateRoute from "../components/PrivateRoute"
import Status from "../components/Status"

const App = () => (
        <Layout>
            <Status />
            <Router>
                <PrivateRoute path="/app/details" component={Details} />
                <PrivateRoute path="/app/profile" component={Profile} />
                <PrivateRoute path="/app/memory" component={Memory} />
                <PrivateRoute path="/app/airly" component={Airly} />
                <Login path="/app/login" />
                <SignUp path="/app/register" />
                <Success path="/app/success" />
            </Router>
        </Layout>
)

export default App

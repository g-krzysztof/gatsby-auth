import React, { Component } from 'react';
import { getCurrentUser } from "../../utils/auth";
import {navigate} from "gatsby";

const { legalName } = getCurrentUser()

class Airly extends Component {

    state = {
        key: 'S5mt8gla3XqNdNBXIkMbUNYE5uF8YuJo'
    }

    getDevice = () =>{

        fetch('https://airapi.airly.eu/v2/installations/nearest?lat=50.108991&lng=18.973205', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'apikey': 'S5mt8gla3XqNdNBXIkMbUNYE5uF8YuJo'
            }
        })
            .then(response => {
                if(response.status === 400){
                    return response.json()
                        .then(data=>{
                            console.log(data)
                        })
                }
                if(response.status === 200){
                    return response.json()
                        .then(data=>{
                            console.log(data)
                        })
                }

            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    getData = () =>{

        fetch('https://airapi.airly.eu/v2/measurements/installation?installationId=6348', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'apikey': 'S5mt8gla3XqNdNBXIkMbUNYE5uF8YuJo'
            }
        })
            .then(response => {
                if(response.status === 400){
                    return response.json()
                        .then(data=>{
                            console.log(data)
                        })
                }
                if(response.status === 200){
                    return response.json()
                        .then(data=>{
                            console.log(data)
                        })
                }

            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    render() {
        return (
            <div>
                API key: {this.state.key}
                50.108991,
                18.973205,
                i6348
                <br/>
                <button onClick={this.getDevice}>Get Device</button>
                <button onClick={this.getData}>Get Data</button>
            </div>
        );
    }
}

export default Airly;
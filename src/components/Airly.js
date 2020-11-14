import React from "react"
import View from "./View"
import { getCurrentUser } from "../utils/auth"
import AirlyPage from "./Airly/Airly";
import MyMap from "./Airly/MyMap";
import LeafletMap from "./Airly/Leaflet";

const Airly = () => {
    const { name } = getCurrentUser()

    return (
        <View title="Your Profile">
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <p>Check your air, {name}!</p>
                <AirlyPage />
                <div style={{width: '400px', height: '400px'}}>
                    <LeafletMap />
                </div>
            </div>
        </View>
    )
}

export default Airly

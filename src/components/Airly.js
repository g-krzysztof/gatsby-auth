import React from "react"
import View from "./View"
import { getCurrentUser } from "../utils/auth"
import AirlyPage from "./Airly/Airly";
import LeafletMap from "./Airly/Leaflet";

const Airly = () => {
    const { name } = getCurrentUser()

    return (
        <>
            {typeof window !== 'undefined' &&
            <LeafletMap
                position={[52,-0.5]}
                zoom={8}
                markerText={"Hello, this is a marker"}
            />
            }
            </>
    )
}

export default Airly

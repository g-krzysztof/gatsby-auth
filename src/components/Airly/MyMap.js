import Leaflet, { LatLng } from "leaflet";
import React from "react";
// import { Map, TileLayer, Popup, Marker } from "react-leaflet";
import { Map, TileLayer, Popup, Marker } from "react-leaflet";
// import Search from "react-leaflet-search";
import 'leaflet/dist/leaflet.css';
import LeafletMap from "./Leaflet";

// import icon from 'leaflet/dist/images/marker-icon.png';
// import iconShadow from 'leaflet/dist/images/marker-shadow.png';
// import iconRetina from 'leaflet/dist/images/marker-icon-2x.png';
//
// let DefaultIcon = Leaflet.icon({
//     ...Leaflet.Icon.Default.prototype.options,
//     iconUrl: icon,
//     iconRetinaUrl: iconRetina,
//     shadowUrl: iconShadowr
// });
// Leaflet.Marker.prototype.options.icon = DefaultIcon;
//
// class SimpleExample extends React.Component {
//     provider;
//     state;
//     constructor(props) {
//         super(props);
//         this.state = {
//             count: 0,
//             search: new LatLng(41.009633, 28.965165),
//             maxZoom: 13,
//             maxBounds: [
//                 [-90, -180],
//                 [90, 180]
//             ],
//             bounds: [
//                 {
//                     lat: 33.100745405144245,
//                     lng: 24.510498046875
//                 },
//                 {
//                     lat: 33.100745405144245,
//                     lng: 46.48315429687501
//                 },
//                 {
//                     lat: 44.55916341529184,
//                     lng: 46.48315429687501
//                 },
//                 {
//                     lat: 44.55916341529184,
//                     lng: 24.510498046875
//                 }
//             ]
//         };
//     }
//
//     customPopup(SearchInfo) {
//         return (
//             <Popup>
//                 <div>
//                     <p>I am a custom popUp</p>
//                     <p>
//                         latitude and longitude from search component:{" "}
//                         {SearchInfo.latLng.toString().replace(",", " , ")}
//                     </p>
//                     <p>Info from search component: {SearchInfo.info}</p>
//                     <p>
//                         {SearchInfo.raw &&
//                         SearchInfo.raw.place_id &&
//                         JSON.stringify(SearchInfo.raw.place_id)}
//                     </p>
//                 </div>
//             </Popup>
//         );
//     }
//
//     render() {
//         if (typeof window !== 'undefined') {
//             return (
//                 <Map
//                     style={{width: '400px', height: '400px'}}
//                     className="simpleMap"
//                     scrollWheelZoom={true}
//                     bounds={this.state.bounds}
//                     maxZoom={this.state.maxZoom}
//                     maxBounds={this.state.maxBounds}
//                 >
//                     <TileLayer
//                         noWrap={true}
//                         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                     />
//                     <Marker position={[41.076602, 30.052495]}>
//                         <Popup>Marker 1</Popup>
//                     </Marker>
//                     <Marker position={[41.076602, 31.052495]}>
//                         <Popup>Marker 2</Popup>
//                     </Marker>
//                     <Search
//                         // customProvider={this.provider}
//                         //   onChange={(info) => {
//                         //     console.log("FROM onChange: ", info);
//                         //   }}
//                         position="topleft"
//                         inputPlaceholder="Custom placeholder"
//                         // search={this.state.search}
//                         showMarker={false}
//                         zoom={7}
//                         closeResultsOnClick={true}
//                         openSearchOnLoad={false}
//                         // these searchbounds would limit results to only Turkey.
//                         providerOptions={{
//                             searchBounds: [
//                                 new LatLng(33.100745405144245, 46.48315429687501),
//                                 new LatLng(44.55916341529184, 24.510498046875)
//                             ],
//                             region: "tr"
//                         }}
//
//                         // default provider OpenStreetMap
//                         // provider="BingMap"
//                         // providerKey="AhkdlcKxeOnNCJ1wRIPmrOXLxtEHDvuWUZhiT4GYfWgfxLthOYXs5lUMqWjQmc27"
//                     >
//                         {(info) => (
//                             <Marker position={info?.latLng}>{this.customPopup(info)}</Marker>
//                         )}
//                     </Search>
//                 </Map>
//             );
//         }
//     }
// }
//
// function MyMap() {
//     return (
//         <div>
//             <SimpleExample />
//         </div>
//     );
// }
//
// export default MyMap;

class SimpleExample extends React.Component {

    render(){
        return(
            <Map center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} style={{height: '400px'}}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </Map>
        )
    }
}

function MyMap() {
    return (
        <div>
            {/*<SimpleExample />*/}
            <LeafletMap />
        </div>
    );
}

export default MyMap;



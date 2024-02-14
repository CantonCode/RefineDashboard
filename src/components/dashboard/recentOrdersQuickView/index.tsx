import Card from "antd/es/card/Card"
import { IOrder } from "../../../interfaces"
import { ContentWrapper, Title } from "./styled"
import { MapView } from "./map"
import 'mapbox-gl/dist/mapbox-gl.css';
import { Map, Marker } from "react-map-gl";




export const RecentOrdersQuickView: React.FC<{ sharedState: IOrder, cords: any }> = ({ sharedState, cords }) => {


    return (
        <div style={{ height: "100%", width: "100%", backgroundColor: "white", padding: "2rem", borderRadius: '0.4rem' }}>
            <Map
                mapboxAccessToken="pk.eyJ1IjoiY2FudG9uY29kZSIsImEiOiJjbHNiZ2Nibm8wMjFrMm10ZDZzcXI2OGo4In0.kPqfrcmL29ztsk5zVoTkhg"
                initialViewState={{
                    longitude: -122.4,
                    latitude: 37.8,
                    zoom: 4
                }}
                mapStyle="mapbox://styles/mapbox/streets-v9"
                longitude={cords.longitude}
                latitude={cords.latitude}
            >
                <Marker longitude={cords.longitude} latitude={cords.latitude} anchor="bottom" ></Marker>
            </Map>



            {cords.longitude}
        </div>
    )
}
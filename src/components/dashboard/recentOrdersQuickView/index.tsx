import Card from "antd/es/card/Card"
import { IOrder } from "../../../interfaces"
import { ContentWrapper, Title } from "./styled"
import { MapView } from "./map"
import 'mapbox-gl/dist/mapbox-gl.css';
import { Layer, Map, Marker, CircleLayer, Source } from "react-map-gl";
import { FeatureIdentifier, LineLayer } from "mapbox-gl";
import { FeatureCollection } from "geojson";
import { useEffect, useRef } from "react";





export const RecentOrdersQuickView: React.FC<{ sharedState: IOrder, cords: any }> = ({ sharedState, cords }) => {
    const geojson: FeatureCollection = {
        type: 'FeatureCollection',
        features: [
          {type: 'Feature',properties:{}, geometry: {type: 'LineString', 
          coordinates:[[cords.longitude,cords.latitude],
        [cords.longitude+10,cords.latitude-2]]}},
        {type: 'Feature',properties:{}, geometry: {type: 'LineString', 
          coordinates:[[cords.longitude,cords.latitude],
        [cords.longitude-7,cords.latitude-2]]}}
        ]
      };

      const geojson2: FeatureCollection = {
        type: 'FeatureCollection',
        features: [
          {type: 'Feature',properties:{}, geometry: {type: 'Point', coordinates:[cords.longitude,cords.latitude]}},
        ]
      };
      
      const lineStyle: LineLayer = {
        id: 'line',
        type: 'line',
        paint: {
          'line-width':3,
        },
      };

      const circleStyle: CircleLayer = {
        id: 'point',
        type: 'circle',
        paint: {
          'circle-radius': 7,
          'circle-color': '#007cbf'
        }
      };

      const circleStyle2: CircleLayer = {
        id: 'point1',
        type: 'circle',
        paint: {
          'circle-radius': 10,
          'circle-color': '#ff0000'
        }
      };

      const mapRef = useRef(null)

      useEffect(() => {// Your code that you want to run whenever the info stat is changed
        console.log("CORDS CHANGED")
        mapRef.current?.flyTo({ center: [cords.longitude,cords.latitude] })
    },[cords])

    
      
    return (
        <div style={{ height: "95%", width: "100%", backgroundColor: "white", padding: "1rem", borderRadius: '0.4rem',border:'1px solid black' }}>
            <Map
                ref={mapRef}
                mapboxAccessToken="pk.eyJ1IjoiY2FudG9uY29kZSIsImEiOiJjbHNiZ2Nibm8wMjFrMm10ZDZzcXI2OGo4In0.kPqfrcmL29ztsk5zVoTkhg"
                initialViewState={{
                    longitude: cords.longitude,
                    latitude: cords.latitude,
                    zoom: 3.5
                }}
                mapStyle="mapbox://styles/mapbox/streets-v9"
                // longitude={cords.longitude}
                // latitude={cords.latitude}
                
            >  
            <Source id="my-data-2" type="geojson" data={geojson2}>
                <Layer {...circleStyle2} />
            </Source> 
            <Source id="my-data" type="geojson" data={geojson}>
                <Layer {...lineStyle} />
            </Source>
            <Source id="my-data" type="geojson" data={geojson}>
                <Layer {...circleStyle} />
            </Source>

           
                <Marker longitude={cords.longitude} latitude={cords.latitude} anchor="bottom" >
                    <img style={{ height: '70px', width: '70px',padding:'0.5rem' }} src="https://cdn-icons-png.flaticon.com/512/1061/1061031.png" />
                </Marker>

                <Marker longitude={cords.longitude-7} latitude={cords.latitude-2} anchor="bottom" >
                    <img style={{ height: '70px', width: '70px',padding:'0.7rem' }} src="https://cdn-icons-png.freepik.com/256/3525/3525500.png" />
                </Marker>

                <Marker longitude={cords.longitude + 10} latitude={cords.latitude - 2} anchor="bottom" >
                    <img style={{ height: '70px', width: '70px',padding:'0.7rem' }} src="https://cdn-icons-png.freepik.com/256/3525/3525500.png" />
                </Marker>

            </Map>
        </div>
    )
}
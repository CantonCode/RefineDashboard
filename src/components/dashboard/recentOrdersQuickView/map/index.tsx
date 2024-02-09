import * as React from 'react';
import Map from 'react-map-gl';

export function MapView() {
  return (
    <div style={{height:"100%", width:"100%", backgroundColor:"white",padding:"2rem",borderRadius:'0.4rem'}}>
    <Map
        mapboxAccessToken="pk.eyJ1IjoiY2FudG9uY29kZSIsImEiOiJjbHNiZ2Nibm8wMjFrMm10ZDZzcXI2OGo4In0.kPqfrcmL29ztsk5zVoTkhg"
        initialViewState={{
            longitude: -122.4,
            latitude: 37.8,
            zoom: 14
        }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
    />
</div>
    
  );
}
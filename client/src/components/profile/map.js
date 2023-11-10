//start on mondayimport React from 'react';
import React from 'react';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useQuery } from '@apollo/client';
import { Link, useLocation } from 'react-router-dom';

import { GET_MAP } from '../../utils/queries';


import {   MapContainer,
    ZoomControl,
    TileLayer,
    GeoJSON,
    ImageOverlay } from 'react-leaflet'

import './map.css'
import "leaflet/dist/leaflet.css"


const M = ({ width, height, zoom, center, data }) => {
    const wh = [width, 200];
    const origin = [0, 0];
    const bounds = [origin, wh];
  
    return (
      <div style={{ width: "70%", height: "100vh" }}>
        <MapContainer
          style={{ height: "100%", minHeight: "100%" }}
          bounds={zoom ? undefined : bounds}
          boundsOptions={{
            padding: [0, 0]
          }}
          maxBounds={bounds}
          zoom={center ? zoom : undefined}
          center={zoom ? center : undefined}
          zoomSnap={0} // Important to disable snap after fitBounds
          whenReady={(e) => e.target.fitBounds(bounds)} // Have the map adjust its view to the same bounds as the Image Overlay
        >
          <ImageOverlay
            url={data}
            bounds={bounds}
            className="map_main"
          />
        </MapContainer>
      </div>
    );
  };
  

function CreateMapStation() {
        const location = useLocation()
        const { from } = location.state
        
        const [mapWidthSize, setMapWidthSize] = useState()
        const [mapHeightSize, setMapHeightSize] = useState()

        const { loading, error, data } = useQuery(GET_MAP, {
                variables: {_id: from},
        });

        if(loading) return "Loading..."
        if(error) return `${error.message}`;

        const position = [0, 0]

        const IMG = new Image()
        IMG.src = data.map.imageUrl;
        IMG.onload = () => {
            setMapWidthSize(IMG.width)
            setMapHeightSize(IMG.height)
        }


    return (
        <div>
            <div>
                <h1>{ data.map._id}</h1>
                <h2>{ data.map.name }</h2>
                <h2>{ data.map.imageUrl }</h2>
                <h2>{from}</h2>
            </div>

            <M width={IMG.width} height={IMG.height} center={[0, 0]} data={data.map.imageUrl} />
        </div>
    )
}

export default CreateMapStation;
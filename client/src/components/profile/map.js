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

function CreateMapStation() {
        const location = useLocation()
        const { from } = location.state


        const { loading, error, data } = useQuery(GET_MAP, {
                variables: {_id: from},
        });

        if(loading) return "Loading..."
        if(error) return `${error.message}`;

        const position = [0, 0]

        const IMG = new Image()
        IMG.src = data.map.imageUrl;

        IMG.onLoad = () => {
            console.log(IMG.height)
            console.log(IMG.width)
        }


        const bounds = [
            [34, 9],
            [32, 11]
          ];

    return (
        <div>
            <div>
                <h1>{ data.map._id}</h1>
                <h2>{ data.map.name }</h2>
                <h2>{ data.map.imageUrl }</h2>
                <h2>{from}</h2>
            </div>

        <MapContainer
        center={[33, 9]}
        zoom={6}
        maxZoom={10}

        zoomControl={false}
        >
        <ZoomControl position="bottomleft" />
        

                <ImageOverlay
                        url={data.map.imageUrl}
                        bounds={bounds}
                />
        </MapContainer>
        </div>
    )
}

export default CreateMapStation;
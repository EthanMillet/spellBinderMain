//start on mondayimport React from 'react';
import React from 'react';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useQuery } from '@apollo/client';
import { Link, useLocation } from 'react-router-dom';

import { GET_MAP } from '../../utils/queries';
import { ADD_MAP } from '../../utils/mutations';

import { MapContainer, TileLayer } from 'react-leaflet'

import './map.css'
import "leaflet/dist/leaflet.css"

function CreateMapStation() {


        const position = [51.505, -0.09]

    return (
        <MapContainer center={position} zoom={13}>
                <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
        </MapContainer>
    )
}

export default CreateMapStation;
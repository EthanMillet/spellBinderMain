//start on mondayimport React from 'react';
import React from 'react';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useQuery } from '@apollo/client';
import { Link, useLocation } from 'react-router-dom';

import { GET_MAP } from '../../utils/queries';
import { ADD_MAP } from '../../utils/mutations';


import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'

function CreateMapStation() {


        const position = [51.505, -0.09]

    return (
            <MapContainer center={position} zoom={13} scrollWheelZoom={false}>

            </MapContainer>
    )
}

export default CreateMapStation;
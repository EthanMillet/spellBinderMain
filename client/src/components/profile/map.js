//start on mondayimport React from 'react';
import React from 'react';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useQuery } from '@apollo/client';
import { Link, useLocation } from 'react-router-dom';
import { ADD_TOKEN } from '../../utils/mutations';
import { GET_MAP } from '../../utils/queries';
import { MapContainer, useMapEvents, Marker, Popup, ImageOverlay } from 'react-leaflet'

import './map.css'
import "leaflet/dist/leaflet.css"


const M = ({ width, height, zoom, center, data }) => {
    const [positionState, setPositionState] = useState()
    const wh = [width, 200];
    const origin = [0, 0];
    const bounds = [origin, wh];

  function MapComponent() {
     useMapEvents({
      click: (e) => {
        setPositionState(e.latlng)
      }
    })
    if (positionState !== undefined || positionState != null) {
          return(
      <Marker position={positionState}>
        <Popup>
          <CreateTokenStation position={positionState}/>
        </Popup>
      </Marker>
    )
    }
    return null
}

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
          <MapComponent/>
          <TokenLoaderStation/>
        </MapContainer>
      </div>
    );
  };
  
  function CreateTokenStation(position) {

    const location = useLocation()
    const { from } = location.state

    const [tokenFormState, setTokenFormState] = useState({title: '', content: '', img: ''})  
    const [addToken] = useMutation(ADD_TOKEN);


    const handleTokenFormSubmit = async (event) => {
      event.preventDefault();
      try {
          await addToken({
              variables: {
                  position: "[73.8989223036342, 143.83317663962055]", title: tokenFormState.title, content: tokenFormState.content, tokenImg: "test", mapID: from}
          });
      } catch (e) {
          console.log(e);
      }
  };

  const handleTokenFormChange = (event) => {
      const { name, value } = event.target;
      setTokenFormState({
          ...tokenFormState,
          [name]: value
      })
  }

    return(
<div>
      <div className='modal-header'>
        <h2>Create Token at {position.position.lat} {position.position.lng}</h2>
      </div>

      <div className='modal-body'>
<form className='form-body' onSubmit={handleTokenFormSubmit}>
    <label className='label' htmlFor="name">Name</label>
        <input
        placeholder='title'
        name='title'
        type='title'
        id='title'
            onChange={handleTokenFormChange}/>
            <hr className='form-break'></hr>
    <label className='label' htmlFor='imageUrl'>imageUrl</label>
        <input 
        placeholder='Content'
        name='content'
        type='content'
        id='content'
        onChange={handleTokenFormChange}/>
        <hr className='form-break'></hr>
    <button className="sumbit-button" type="submit">Submit</button>
</form>
      </div>
      
      </div>
    )
  }

  function TokenLoaderStation() {
    const location = useLocation()
    const { from } = location.state

    const { loading, error, data } = useQuery(GET_MAP, {
            variables: {_id: from},
    });

    if(loading) return "Loading..."
    if(error) return `${error.message}`;

    return (
      <div>

      {data.map.tokens?.map((token) => (
        
        <Marker key={token._id} position={[62.3295853023709 , 109.98921765300834]}>
          {console.log(token)}
          <Popup>
            <h2>{token.title}</h2>
            <p>{token.content}</p>
          </Popup>
        </Marker>  
      ))}


      
      </div>
    )
  }

function CreateMapStation() {
        const location = useLocation()
        const { from } = location.state

        const { loading, error, data } = useQuery(GET_MAP, {
                variables: {_id: from},
        });

        if(loading) return "Loading..."
        if(error) return `${error.message}`;

        const IMG = new Image()
        IMG.src = data.map.imageUrl;



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
//start on mondayimport React from 'react';
import React from 'react';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useQuery } from '@apollo/client';
import { Link, useLocation } from 'react-router-dom';
import { ADD_TOKEN } from '../../utils/mutations';
import { GET_MAP } from '../../utils/queries';
import { MapContainer, useMapEvents, Marker, Popup, ImageOverlay } from 'react-leaflet'
import L from 'leaflet';
import './map.css'
import "leaflet/dist/leaflet.css"

const capitalIcon = new L.icon({
  iconUrl: require('../../assets/images/Capital.png'),
  iconSize: [46.2,46.2],    
  iconAnchor: [22, 35],
  popupAnchor: [0, 0]
})

const caveIcon = new L.icon({
  iconUrl: require('../../assets/images/Cave.png'),
  iconSize: [46.2,46.2],    
  iconAnchor: [22, 35],
  popupAnchor: [0, 0]
})

const dockIcon = new L.icon({
  iconUrl: require('../../assets/images/dock.png'),
  iconSize: [46.2,46.2],    
  iconAnchor: [22, 35],
  popupAnchor: [0, 0]
})

const dungeonIcon = new L.icon({
  iconUrl: require('../../assets/images/Dungeon.png'),
  iconSize: [46.2,46.2],    
  iconAnchor: [22, 35],
  popupAnchor: [0, 0]
})

const lighthouseIcon = new L.icon({
  iconUrl: require('../../assets/images/lighthouse.png'),
  iconSize: [46.2,46.2],    
  iconAnchor: [22, 35],
  popupAnchor: [0, 0]
})

const millIcon = new L.icon({
  iconUrl: require('../../assets/images/mill.png'),
  iconSize: [46.2,46.2],    
  iconAnchor: [22, 35],
  popupAnchor: [0, 0]
})

const templeIcon = new L.icon({
  iconUrl: require('../../assets/images/Temple.png'),
  iconSize: [46.2,46.2],    
  iconAnchor: [22, 35],
  popupAnchor: [0, 0]
})

const townIcon = new L.icon({
  iconUrl: require('../../assets/images/Town.png'),
  iconSize: [46.2,46.2],    
  iconAnchor: [22, 35],
  popupAnchor: [0, 0]
})

const villageIcon = new L.icon({
  iconUrl: require('../../assets/images/Village.png'),
  iconSize: [46.2,46.2],    
  iconAnchor: [22, 35],
  popupAnchor: [0, 0]
})

const waterfallIcon = new L.icon({
  iconUrl: require('../../assets/images/Waterfall.png'),
  iconSize: [46.2,46.2],    
  iconAnchor: [22, 35],
  popupAnchor: [0, 0]
})

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
      <div className='mapHolder' style={{ width: "70%", height: "90vh" }}>
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

    const [selectedOption, setSelectedOption] = useState();
    const [tokenFormState, setTokenFormState] = useState({title: '', content: '', img: ''})  
    
    const [addToken] = useMutation(ADD_TOKEN);


    const handleTokenFormSubmit = async (event) => {
      event.preventDefault();
      try {
          await addToken({
              variables: {
                  position: `${position.position.lat}, ${position.position.lng}`, title: tokenFormState.title, content: tokenFormState.content, tokenImg: selectedOption, mapID: from}
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
    <label className='label' htmlFor="name">Title</label>
        <input
        placeholder='title'
        name='title'
        type='title'
        id='title'
            onChange={handleTokenFormChange}/>
            <hr className='form-break'></hr>
    <label className='label' htmlFor='imageUrl'>Content</label>
        <input 
        placeholder='Content'
        name='content'
        type='content'
        id='content'
        onChange={handleTokenFormChange}/>
        <hr className='form-break'></hr>

    <label className='label' htmlFor='imageType'>Icon</label>
      <select value={selectedOption}
        onChange={e => setSelectedOption(e.target.value)}>
        <option value={'Captial'}>Capital</option>
        <option value={'Cave'}>Cave</option>
        <option value={'Dock'}>Dock</option>
        <option value={'Dungeon'}>Dungeon</option>
        <option value={'Lighthouse'}>Lighthouse</option>
        <option value={'Mill'}>Mill</option>
        <option value={'Temple'}>Temple</option>
        <option value={'Town'}>Town</option>
        <option value={'Village'}>Village</option>
        <option value={'Waterfall'}>Waterfall</option>
      </select>

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

    const renderIMG = (token) => {
      if (token === "Capital") {
        return capitalIcon
      } else if (token === "Cave") {
        return caveIcon
      } else if (token === "Dock") {
        return dockIcon
      } else if (token === "Dungeon") {
        return dungeonIcon
      } else if (token === "Lighthouse") {
        return lighthouseIcon
      } else if (token === "Mill") {
        return millIcon
      } else if (token === "Temple") {
        return templeIcon
      } else if (token === "Town") {
        return townIcon
      } else if (token === "Village") {
        return villageIcon
      } else {
        return waterfallIcon
      }
    }

    return (
      <div>

      {data.map.tokens?.map((token) => (
        
        <Marker key={token._id} position={JSON.parse("[" + token.position + "]")} 
        icon={renderIMG(token.tokenImg)}>

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
        <div className='mapCompContainer'>
            <div className='welcomeBanner'>
              <div className='banner'>
                <h2 className='welcomeName'>{ data.map.name }</h2>
              </div>
            </div>
            <div style={{ width: "15%", height: "90vh" }}></div>

            <M width={IMG.width} height={IMG.height} center={[0, 0]} data={data.map.imageUrl} />

            <div style={{ width: "15%", height: "90vh" }}></div>
          </div>
    )
}

export default CreateMapStation;
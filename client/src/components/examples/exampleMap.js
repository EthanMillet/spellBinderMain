//start on mondayimport React from 'react';
import React from 'react';
import { useState } from 'react';
import { MapContainer, useMapEvents, Marker, Popup, ImageOverlay } from 'react-leaflet'
import L from 'leaflet';
import "leaflet/dist/leaflet.css"
import IMG from '../../assets/Lorisalla.png'

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

const M = ({ zoom }) => {
    const [positionState, setPositionState] = useState()
    const wh = [4096, 500];
    const origin = [0, 0];
    const bounds = [origin, wh];
    const center = [0, 0]

  function MapComponent() {
     useMapEvents({
      click: (e) => {
        setPositionState(e.latlng)
      }
    })
    if (positionState !== undefined || positionState != null) {
          return(
      <Marker position={positionState} icon={waterfallIcon}>
        <Popup>
            <h2>This is how you add tokens!</h2>
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
            url={IMG}
            bounds={bounds}
            className="map_main"
          />
          <MapComponent/>
        </MapContainer>
      </div>
    );
  };
  



function CreateMapStation() {


    return (
        <div className='mapCompContainer'>
            <div className='welcomeBanner'>
              <div className='banner'>
              <h2 className='welcomeName'>Welcome to The Example Interactive Map!</h2>
              </div>
            </div>
            <div style={{ width: "15%", height: "90vh" }}></div>

            <M/>

            <div style={{ width: "15%", height: "90vh" }}></div>
          </div>
    )
}

export default CreateMapStation;
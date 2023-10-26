import React from 'react';
import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { Link, useLocation } from 'react-router-dom';
import '../../index.css'
import { GET_BINDER} from '../../utils/queries';


function BinderStation() {
    
const [viewState, setViewState] = useState({name: ''});

// import correct binder _id from props
const location = useLocation()
const { from } = location.state

// load correct binder info
const {loading, error, data } = useQuery(GET_BINDER, {
    variables: { _id: from },
});

    if(loading) return "Loading..."
    if(error) return `${error.message}`;

    
return (    
    <div>    
        
        <div className='subNav'>
        <div className='subNavLeft'>
            <button className='subNavButton'><Link className='subNavLink' to="/createMap" state={{from: data.binder._id}}><span>Create Map</span></Link></button>
            <button className='subNavButton'><Link className='subNavLink' to="/createNote" state={{from: data.binder._id}}><span>Create Note</span></Link></button>
        </div>

        <div className='subNavRight'>
                <button onClick={() => setViewState("News")} className='subNavButton' name='News'>News</button>
                <button onClick={() => setViewState("Community")} className='subNavButton' name='Community'>Community</button>              
                <button onClick={() => setViewState("Account")} className='subNavButton' name='Account'>Account</button>
                <button onClick={() => setViewState("Help")} className='subNavButton' name='Help'>Help</button>
        </div>
        </div>

        <div className='welcomeBanner'>
            <div className='banner'>
                <h2 className='welcomeName'>{ data.binder.name }</h2>
            </div>
        </div>

{/* access map */}
    <div className='mapNotes'>
        <div className='mapNotesContainer'>
        {data.binder.maps.map((maps) => (
            <div key={maps._id}>

                <div className='mapNoteBlock'>
                    <Link to="/map" state={{from: maps._id}}><span class="name" data-value="CODEPEN">{maps.name}</span></Link>
                </div>
            
            </div>

        ))}
        </div>
    </div>
{/* access note */}
<hr></hr>
    <div className='mapNotes'>
    <div className='mapNotesContainer'> 
        {data.binder.notes.map((notes) => (
            <div key={notes._id}>

                <div class="mapNoteBlock">
                    <Link to="/note" state={{from: notes._id}}><span class="name" data-value="CODEPEN">{notes.title}</span></Link>
                </div>
            </div>

        ))}
    </div>
    </div>










</div>
)

}

export default BinderStation;
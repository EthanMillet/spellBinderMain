import React from 'react';
import { useQuery } from '@apollo/client';
import { Link, useLocation } from 'react-router-dom';
import '../../index.css'
import { GET_BINDER} from '../../utils/queries';


function BinderStation() {
    
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
    <div>
        <h1>{ data.binder.name }</h1>
        <h2>{from}</h2>
    </div>

    <Link to="/createMap" state={{from: data.binder._id}}><span>Create Map</span></Link>
    <Link to="/createNote" state={{from: data.binder._id}}><span>Create Note</span></Link>


{/* access map */}
    <div>
        {data.binder.maps.map((maps) => (
            <div key={maps._id}>

                <div class="screen">  
                    <div class="screen-image"></div>  
                    <div class="screen-overlay"></div>  
                    <div class="screen-content">
                    <i class="screen-icon fa-brands fa-codepen"></i>
                <div class="screen-user">
                    <Link to="/map" state={{from: maps._id}}><span class="name" data-value="CODEPEN">{maps.name}</span></Link>
                </div>
                    </div>
        </div>
            
            </div>

        ))}
    </div>
{/* access note */}
<hr></hr>
    <div>
        {data.binder.notes.map((notes) => (
            <div key={notes._id}>

                <div class="screen">  
            <div class="screen-image"></div>  
            <div class="screen-overlay"></div>  
            <div class="screen-content">
                <i class="screen-icon fa-brands fa-codepen"></i>
                <div class="screen-user">
                    <Link to="/note" state={{from: notes._id}}><span class="name" data-value="CODEPEN">{notes.title}</span></Link>
                </div>
            </div>
        </div>
            </div>

        ))}
    </div>










</div>
)

}

export default BinderStation;
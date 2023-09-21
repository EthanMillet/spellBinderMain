import React from 'react';
import { useQuery } from '@apollo/client';
import { Link, useLocation } from 'react-router-dom';

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
            <div>
                <Link to="/map" stat={{from: maps._id}}><span>{maps.name}</span></Link>
            </div>

        ))}
    </div>
{/* access note */}
</div>
)

}

export default BinderStation;
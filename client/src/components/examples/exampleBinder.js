import React from 'react';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useQuery } from '@apollo/client';
import { Link, useLocation } from 'react-router-dom';
import '../../index.css'
import { GET_BINDER} from '../../utils/queries';
import { ADD_MAP } from '../../utils/mutations';

function BinderStation() {

const [viewState, setViewState] = useState({name: ''});

// import correct binder _id from props
const location = useLocation()
const { from } = location.state


const [addMap] = useMutation(ADD_MAP);
const [mapFormState, setMapFormState] = useState({name: '', imageUrl: ''});

// load correct binder info
const {loading, error, data } = useQuery(GET_BINDER, {
    variables: { _id: from },
});

    if(loading) return "Loading..."
    if(error) return `${error.message}`;


    // create map 
    const handleMapFormSubmit = async (event) => {
        event.preventDefault();
        try {
            await addMap({
                variables: {
                    name: mapFormState.name, imageUrl: mapFormState.imageUrl, binderID: from}
            });
        } catch (e) {
            console.log(e)
        }
        window.location.reload();
    };

    const handleMapFormChange = (event) => {
        const { name, value } = event.target;
        setMapFormState({
            ...mapFormState,
            [name]: value
        });
        
    };
    
return (    
    <div className='binderMainBody'>    
        
        <div className='welcomeBanner'>
            <div className='banner'>
                <h2 className='welcomeName'>{ data.binder.name }</h2>
            </div>
        </div>

{/* access map */}
    <div className='binders'>
        <div className='bindercontainer'>
        {data.binder.maps.map((maps) => (
            <div key={maps._id}>

                <div className='binderBlock'>
                    <Link to="/map" state={{from: maps._id}}><span class="name" data-value="CODEPEN">{maps.name}</span></Link>
                </div>
            
            </div>

        ))}


        <div className='login-modal'>

<div className='modal-header'>
<h2>Create Map</h2>
</div>

<div className='modal-body'>
    
<form className='form-body' onSubmit={handleMapFormSubmit}>
    <label className='label' htmlFor="name">Name</label>
        <input
            className='input'
            placeholder="Name"
            name="name"
            type="name"
            id="name"
            onChange={handleMapFormChange}/>
            <hr className='form-break'></hr>
    <label className='label' htmlFor='imageUrl'>imageUrl</label>
        <input 
        className='input'
        placeholder='imageUrl'
        name='imageUrl'
        type='imageUrl'
        id='imageUrl'
        onChange={handleMapFormChange}/>
        <hr className='form-break'></hr>
    <button className="sumbit-button" type="submit">Submit</button>
</form>
</div>
</div>
</div>

    </div>


{/* access note */}
<hr className='divider'></hr>

    <div className='binders'>
    <div className='bindercontainer'> 
        {data.binder.notes.map((notes) => (
            <div key={notes._id}>

                <div class="binderBlock">
                    <Link to="/note" state={{from: notes._id}}><span class="name" data-value="CODEPEN">{notes.title}</span></Link>
                </div>
            </div>

        ))}

        <div className='binderBlock createNote'>
            <Link to='/createNote' state={{from: data.binder._id}}>Create Note</Link>
        </div>
</div>
    </div>
</div>
)

}

export default BinderStation;
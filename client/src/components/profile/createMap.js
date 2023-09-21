import React from 'react';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useQuery } from '@apollo/client';
import { Link, useLocation } from 'react-router-dom';

import { GET_BINDER } from '../../utils/queries';
import { ADD_MAP } from '../../utils/mutations';

function CreateMapStation() {
    const location = useLocation()
    const { from } = location.state

    const [addMap] = useMutation(ADD_MAP);
    const [mapFormState, setMapFormState] = useState({name: '', imageUrl: ''});

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
    };

    const handleMapFormChange = (event) => {
        const { name, value } = event.target;
        setMapFormState({
            ...mapFormState,
            [name]: value
        });
    };

    return (
        <div>
    <div>
        <h1>{ data.binder.name }</h1>
        <h2>{from}</h2>
    </div>

{/* create map */}
<form onSubmit={handleMapFormSubmit}>
<label htmlFor="name">name</label>
    <input
        placeholder='name'
        name='name'
        type='name'
        id='name'
        onChange={handleMapFormChange}/>

    <label htmlFor='imageUrl'>imageUrl</label>
    <input 
        placeholder='imageUrl'
        name='imageUrl'
        type='imageUrl'
        id='imageUrl'
        onChange={handleMapFormChange}/>

<button type="submit">Submit</button>
</form>
</div>
    )
}

export default CreateMapStation;
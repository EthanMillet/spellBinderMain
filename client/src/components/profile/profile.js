import React from 'react';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useQuery } from '@apollo/client';
import { ADD_BINDER } from '../../utils/mutations';
import { GET_USER } from '../../utils/queries';

import { Link } from 'react-router-dom';

import './map.css'

function ProfileStation() {
    const [formState, setFormState] = useState({name: ''});
    const [addBinder] = useMutation(ADD_BINDER);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
        await addBinder({
            variables: { name: formState.name },
            });
            console.log('Added Outfit')
        } catch (e) {
            console.log(e);
        }};

    const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
        ...formState,
        [name]: value,
    });
    };
        
    const { loading, error, data } = useQuery(GET_USER);
    if (loading) return "Loading..."
    if (error) return `Error! ${error.message}`

    return(
        <div>
        <div>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="name">Name</label>
                    <input
                        placeholder="Binder Name"
                        name="name"
                        type="name"
                        id="name"
                        onChange={handleChange}/>
                <button type="submit">Submit</button>
            </form>
        </div>
        <div>
            {data.user.binders.map((binders) => (
                <div key={binders._id}>
                    <Link to="/binder" state={{from: binders._id}}><span>{binders.name}</span></Link>
                </div>
            ))}
        </div>

        </div>
    );
};

export default ProfileStation;

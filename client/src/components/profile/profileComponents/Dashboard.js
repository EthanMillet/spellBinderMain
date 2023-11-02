import React from 'react';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useQuery } from '@apollo/client';
import { ADD_BINDER } from '../../../utils/mutations';
import { GET_USER } from '../../../utils/queries';

import { Link } from 'react-router-dom';

import '../styling/profile.css'

function Dashboard() {

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
        } window.location.reload();};

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


    return (
        <div className='binders'>

        <div className='bindercontainer'>
        {data.user.binders.map((binders) => (
            <div key={binders._id} className='binderBlock'>
                <Link to="/binder" state={{from: binders._id}}><span>{binders.name}</span></Link>
            </div>
        ))}



        <div className='login-modal'>

        <div className='modal-header'>
        <h2>Create Binder</h2>
        </div>

        <div className='modal-body'>
            
        <form className='form-body' onSubmit={handleFormSubmit}>
            <label className='label' htmlFor="name">Name</label>
                <input
                    className='input'
                    placeholder="Binder Name"
                    name="name"
                    type="name"
                    id="name"
                    onChange={handleChange}/>
                    <hr className='form-break'></hr>
            <button className="sumbit-button" type="submit">Submit</button>
        </form>
        </div>

    </div>
    </div>
    
    </div>
    )
}

export default Dashboard;
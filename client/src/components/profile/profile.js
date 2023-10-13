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


    const switchView = (event) => {
        return
    };

    return(
        <div>

            <div className='leftNav'>
                <button className='leftNavHomeButton'>Spell Binder</button>
                <hr></hr>
                <button className='leftNavButton'>Dashboard</button>
                <button className='leftNavButton'>Players</button>
                <button className='leftNavButton'>Campaigns</button>
                <button className='leftNavButton'>Create</button>
                <button className='leftNavButton'>Advanced Tools</button>
                <button className='leftNavButton'>Help</button>

                <hr></hr>
                <button className='leftNavBottomButton'></button>
                <button className='leftNavBottomButton'></button>
                <button className='leftNavBottomButton'></button>
            </div>

            <div className='subNav'>
                <button className='subNavButton'>Your Binders</button>
                <button className='subNavButton'>News</button>
                <button className='subNavButton'>Community</button>
                <button className='subNavButton'>Account</button>
            </div>

            <div className='welcomeBanner'>
                <h2 className='welcomeName'>Welcome {data.user.username}</h2>
            </div>

        <div className='binderDisplay'>
            {data.user.binders.map((binders) => (
                <div key={binders._id}>
                    <Link to="/binder" state={{from: binders._id}}><span>{binders.name}</span></Link>
                </div>
            ))}
        </div>

        <div className='createBinder'>
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

        </div>
    );
};

export default ProfileStation;

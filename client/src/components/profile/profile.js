import React from 'react';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useQuery } from '@apollo/client';
import { ADD_BINDER } from '../../utils/mutations';
import { GET_USER } from '../../utils/queries';

import { Link } from 'react-router-dom';

import './styling/profile.css'

function ProfileStation() {
    const [formState, setFormState] = useState({name: ''});

    const [viewState, setViewState] = useState({name: ''});

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

     handleViewChange() {
        this.setViewState({name: e})
    };
        
    const { loading, error, data } = useQuery(GET_USER);
    if (loading) return "Loading..."
    if (error) return `Error! ${error.message}`


    const switchView = (event) => {
        return
    };

    return(
        <div className='mainContainer'>

            {//<div className='leftNav'>
                //<button className='leftNavHomeButton'>Spell Binder</button>
                //<hr className='divider'></hr>
                //<button className='leftNavButton'>Dashboard</button>
                //<button className='leftNavButton'>Players</button>
                //<button className='leftNavButton'>Campaigns</button>
                //<button className='leftNavButton'>Create</button>
                //<button className='leftNavButton'>Advanced Tools</button>
                //<button className='leftNavButton'>Help</button>

                //<hr className='divider'></hr>

                //<div className='leftNavBottom'>
                    //<button className='leftNavBottomButton'></button>
                    //<button className='leftNavBottomButton'></button>
                    //<button className='leftNavBottomButton'></button>
               //</div>

            //</div>
            }
            
            <div className='midContainer'>

            <div className='subNav'>
                <div className='subNavLeft'>
                    <button onClick={handleViewChange(this.name)} className='subNavButton' name='Dashboard'>Dashboard</button>
                    <button onClick={handleViewChange} className='subNavButton' name='Players'>Players</button>
                    <button onClick={handleViewChange} className='subNavButton' name='Campaigns'>Campaigns</button>
                    <button onClick={handleViewChange} className='subNavButton' name='Create'>Create</button>
                    <button onClick={handleViewChange} className='subNavButton' name='Advanced Tools'>Advanced Tools</button>
                </div>

                <div className='subNavRight'>
                <button onClick={handleViewChange}className='subNavButton' name='News'>News</button>
                <button onClick={handleViewChange} className='subNavButton' name='Community'>Community</button>              
                <button onClick={handleViewChange} className='subNavButton' name='Account'>Account</button>
                <button onClick={handleViewChange} className='subNavButton' name='Help'>Help</button>
                </div>
                
            </div>

            <div className='welcomeBanner'>
                <div className='banner'>
                    <h2 className='welcomeName'>Welcome {data.user.username}</h2>
                </div>
            </div>
        
        <div className='binders'>

            <div className='bindercontainer'>
            {data.user.binders.map((binders) => (
                <div key={binders._id} className='binderBlock'>
                    <Link to="/binder" state={{from: binders._id}}><span>{binders.name}</span></Link>
                </div>
            ))}


        <div className='binderBlock'>
            <h2>Create Binder</h2>
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
        </div>
</div>
        </div>
    );
};

export default ProfileStation;

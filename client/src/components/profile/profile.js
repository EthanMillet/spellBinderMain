import React from 'react';
import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_USER } from '../../utils/queries';
import { useEffect } from 'react';

import { Link } from 'react-router-dom';

import './styling/profile.css'

import Dashboard from './profileComponents/Dashboard';
import Players from './profileComponents/Players';
import Create from './profileComponents/Create';
import AdvancedTools from './profileComponents/AdvancedTools';

function ProfileStation() {
    const [viewState, setViewState] = useState({name: ''});
    var conditionalRender = <Dashboard/>;

    const { loading, error, data } = useQuery(GET_USER);
    if (loading) return "Loading..."
    if (error) return `Error! ${error.message}`

        if (viewState === "Dashboard") {
            conditionalRender = <Dashboard/>;
        } else if (viewState === "Players") {
            conditionalRender = <Players/>;
        } else if (viewState === "Create") {
            conditionalRender = <Create/>;
        } else if (viewState === "Advanced Tools") {
            conditionalRender = <AdvancedTools/>;
        }


    return(
        <div className='mainContainer'>            
            <div className='midContainer'>

            <div className='subNav'>
                <div className='subNavLeft'>
                    <button onClick={() => setViewState("Dashboard")} className='subNavButton' data='Dashboard'>Dashboard</button>
                    <button onClick={() => setViewState("Players")} className='subNavButton' name='Players'>Players</button>
                    <button onClick={() => setViewState("Create")} className='subNavButton' name='Create'>Create</button>
                    <button onClick={() => setViewState("Advanced Tools")} className='subNavButton' name='Advanced Tools'>Advanced Tools</button>
                </div>


                {
                //<div className='subNavRight'>
                //<button onClick={() => setViewState("News")} className='subNavButton' name='News'>News</button>
                //<button onClick={() => setViewState("Community")} className='subNavButton' name='Community'>Community</button>              
                //<button onClick={() => setViewState("Account")} className='subNavButton' name='Account'>Account</button>
                //<button onClick={() => setViewState("Help")} className='subNavButton' name='Help'>Help</button>
                //</div>
                }
            </div>

            <div className='welcomeBanner'>
                <div className='banner'>
                    <h2 className='welcomeName'>Welcome {data.user.username}</h2>
                </div>
            </div>
        
        <div className='conditionalRender'>
            {conditionalRender}
        </div>
</div>
</div>
    );
};

export default ProfileStation;

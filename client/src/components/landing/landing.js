import React from 'react';
import { Link } from 'react-router-dom';
import binder from '../../assets/8-Communications.png';
import map from '../../assets/21-Geography.png';
import note from '../../assets/84-Notes.png';
import './landing.css'

const Landing = () => {
    return (
        <div className="landing">
            <div className="landing-header">

                <div className='IntroLeft'>
                    <h2 className='IntroText'>Where Worlds Are Built...</h2>
                    <button className='IntroButton'>Sign Up For Free</button>
                </div>

                <div className='IntroRight'>
                    <div className='IntroCard'>
                        <h2 className=''>Spell Binder</h2>
                        <p>
                            Spell Binder is a set of worldbuilding tools that helps you create, 
                            organize and store your world setting.
                        </p>
                        <p>
                            With wiki-like articles, 
                            interactive maps, historical timelines, 
                            an RPG Campaign Manager and a full novel-writing software, 
                            we have all the tools you'll need to run your RPG Campaign 
                            or write your novel!
                        </p>
                    </div>
                </div>

            </div>

            <div className='landing-body'>
                <div className='bodyCard'>
                    <img className="bodyImg" src={binder} alt="Binder"/>
                    <h2>Binders</h2>
                    <p>
                        Accent colors should be used sparingly to draw attention to 
                        important design elements. 
                        Overuse of accent colors can make your design look haphazard.
                    </p>
                    <button>See More...</button>
                </div>

                <div className='bodyCard'>
                <div className='bodyCard'>
                    <img className="bodyImg" src={map} alt="Map"/>
                    <h2>Maps</h2>
                    <p>
                        Accent colors should be used sparingly to draw attention to 
                        important design elements. 
                        Overuse of accent colors can make your design look haphazard.
                    </p>
                    <button>See More...</button>        
                </div>

                <div className='bodyCard'>
                    <img className="bodyImg" src={note} alt="Note"/>
                    <h2>Notes</h2>
                    <p>
                        Accent colors should be used sparingly to draw attention to 
                        important design elements. 
                        Overuse of accent colors can make your design look haphazard.
                    </p>
                    <button>See More...</button>
                </div>

            </div>

        </div>
        </div>
    );
};

export default Landing;
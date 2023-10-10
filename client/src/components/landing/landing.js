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
                    <div className='rightContainer'>
                    <div className='introCard'>
                        <h2 className='introCardTitle'>Spell Binder</h2>
                        <p className='introCardContent'>
                            Spell Binder is a set of worldbuilding tools that helps you create, 
                            organize and store your world setting.
                            With wiki-like articles, 
                            interactive maps, historical timelines, 
                            an RPG Campaign Manager and a full novel-writing software, 
                            we have all the tools you'll need to run your RPG Campaign 
                            or write your novel!
                        </p>
                    </div>
                    </div>
                </div>

            </div>

            <div className='landing-body'>

                <div className='cardContainer'>
                <div className='bodyCard'>
                    <div className='cardTitle'>
                        <img className="bodyImg" src={binder} alt="Binder"/>
                        <h2>Binders</h2>
                    </div>

                    <div className='cardContent'>
                    <p className='cardInfo'>
                        Accent colors should be used sparingly to draw attention to 
                        important design elements. 
                        Overuse of accent colors can make your design look haphazard.
                    </p>
                    <button className='cardButton'>See More...</button>
                </div></div>

                <div className='bodyCard'>
                    <div className='cardTitle'>
                        <img className="bodyImg" src={map} alt="Map"/>
                        <h2>Maps</h2>
                    </div>

                    <div className='cardContent'>
                    <p className='cardInfo'>
                        Accent colors should be used sparingly to draw attention to 
                        important design elements. 
                        Overuse of accent colors can make your design look haphazard.
                    </p>
                    <button className='cardButton'>See More...</button>        
                </div>
        </div>
                <div className='bodyCard'>
                    <div className='cardTitle'>
                        <img className="bodyImg" src={note} alt="Note"/>
                        <h2>Notes</h2>
                    </div>
                    <div className='cardContent'>
                    <p className='cardInfo'>
                        Accent colors should be used sparingly to draw attention to 
                        important design elements. 
                        Overuse of accent colors can make your design look haphazard.
                    </p>
                    <button className='cardButton'>See More...</button>
                </div>
                </div>
                </div>
            </div>

        <div className='featuresThing'>
            <div className='binderFeature'>

            </div>

            <div className='mapFeature'>

            </div>

            <div className='noteFeature'>

            </div>
        </div>

        <div className='showCaseThing'>
            <div className='binderShowcase'></div>
            <div className='mapShowcase'></div>
            <div className='noteShowcase'></div>
        </div>

        <div className='learnMore'>
            <div className='mobileApp'></div>
            <div className='Pricing'></div>
            <div className='About'></div>
        </div>

        <div className='footer'>
            <h2>Write</h2>
            <h2>Learn</h2>
            <h2>Explore</h2>
            <h2>Contact</h2>
        </div>


        </div>
    );
};

export default Landing;
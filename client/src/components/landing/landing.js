import React from 'react';
import { Link } from 'react-router-dom';
import binder from '../../assets/8-Communications.png';
import map from '../../assets/21-Geography.png';
import note from '../../assets/84-Notes.png';
import './landing.css'

import featureBinder from '../../assets/binder.jpg'
import folder from '../../assets/91-Folder.png'
import laptop from '../../assets/87-Laptop.png'
import history from '../../assets/24-History.png'
import resource from '../../assets/78-Resources.png'
import psych from '../../assets/17-Psychology.png'

import featureMap from '../../assets/globe.jpg'
import globe from '../../assets/icons/143-Globe 2.png'
import mapPin from '../../assets/icons/146-Map 2.png'
import pin from '../../assets/icons/147-Pin.png'
import tokenImg from '../../assets/icons/145-Map 1.png'

import featureNote from '../../assets/stickyNotes.jpg'
import quill from '../../assets/icons/10-English.png'
import page from '../../assets/icons/81-Report.png'
import papers from '../../assets/icons/82-Paper.png'
import scroll from '../../assets/icons/75-Diploma 2.png'
import calendar from '../../assets/icons/58-Calendar.png'


const Landing = () => {
    return (
        <div className="landing">
            <div className="landing-header">

                <div className='IntroLeft'>
                    <h2 className='IntroText'>Where Worlds <br/> Are Built...</h2>
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
        <hr className='form-break'></hr>
            <h2 className='featureTitle'>The Best Worldbuilding Tool</h2>
            <div className='binderFeature'>
                <div className='binderLeft'>
                    <h2 className='binderLeftTitle'>Binders</h2>
                    <p className='binderLeftContent'>Accent colors should be used sparingly to draw
                     attention to important design elements. 
                    Overuse of accent colors can make your design look haphazard.
                    Accent colors should be used sparingly to draw attention to important
                    design elements. Overuse of accent colors 
                    can make your design look haphazard.</p>

                    <div className='CircleContainer'>
                        <div className='contentCircle'><img src={folder} alt='Circle' className='circleImg'/></div>
                        <div className='contentCircle'><img src={laptop} alt='Circle' className='circleImg'/></div>
                        <div className='contentCircle'><img src={history} alt='Circle' className='circleImg'/></div>
                        <div className='contentCircle'><img src={resource} alt='Circle' className='circleImg'/></div>
                        <div className='contentCircle'><img src={psych} alt='Circle' className='circleImg'/></div>
                    </div>
                </div>

                <div className='binderRight'>
                    <img src={featureBinder} alt='Example'/>
                </div>

            </div>

            <hr className='form-break'></hr>

            <div className='binderFeature'>
                <div className='binderLeft'>
                    <h2 className='binderLeftTitle'>Maps</h2>
                    <p className='binderLeftContent'>Accent colors should be used sparingly to draw
                     attention to important design elements. 
                    Overuse of accent colors can make your design look haphazard.
                    Accent colors should be used sparingly to draw attention to important
                    design elements. Overuse of accent colors 
                    can make your design look haphazard.</p>

                    <div className='CircleContainer'>
                        <div className='contentCircle'><img src={globe} alt='Circle' className='circleImg'/></div>
                        <div className='contentCircle'><img src={mapPin} alt='Circle' className='circleImg'/></div>
                        <div className='contentCircle'><img src={pin} alt='Circle' className='circleImg'/></div>
                        <div className='contentCircle'><img src={page} alt='Circle' className='circleImg'/></div>
                        <div className='contentCircle'><img src={tokenImg} alt='Circle' className='circleImg'/></div>
                    </div>
                </div>

                <div className='binderRight'>
                    <img src={featureMap} alt='Example'/>
                </div>

            </div>

            <hr className='form-break'></hr>

            <div className='binderFeature'>
                <div className='binderLeft'>
                    <h2 className='binderLeftTitle'>Notes</h2>
                    <p className='binderLeftContent'>Accent colors should be used sparingly to draw
                     attention to important design elements. 
                    Overuse of accent colors can make your design look haphazard.
                    Accent colors should be used sparingly to draw attention to important
                    design elements. Overuse of accent colors 
                    can make your design look haphazard.</p>

                    <div className='CircleContainer'>
                        <div className='contentCircle'><img src={quill} alt='Circle' className='circleImg'/></div>
                        <div className='contentCircle'><img src={page} alt='Circle' className='circleImg'/></div>
                        <div className='contentCircle'><img src={papers} alt='Circle' className='circleImg'/></div>
                        <div className='contentCircle'><img src={scroll} alt='Circle' className='circleImg'/></div>
                        <div className='contentCircle'><img src={calendar} alt='Circle' className='circleImg'/></div>
                    </div>
                </div>

                <div className='binderRight'>
                    <img src={featureNote} alt='Example'/>
                </div>

            </div>
        </div>

        <div className='showCaseThing'>
            <div className='ShowtitleContainer'>
                <h2 className='showCaseTitle'>See Our Feature Showcase</h2>
                <h3 className='showCasesubTitle'>Get Started Creating Your World</h3>
            </div>
            <div className='Showcase'>
                <div className='showCaseCircle'><img src={map} alt='Circle' className='showCaseCircleImg'/></div>
                <h2 className='showCaseHeader'>Maps</h2>
                <button className='showCaseButton'>View Examples</button>
                <p className='showCaseContent'>Accent colors should be used sparingly to draw attention
                    to important design elements. 
                    Overuse of accent colors can make your design look haphazard.</p>
            </div>

            <div className='showcaseDivider'></div>

            <div className='Showcase'>
                <div className='showCaseCircle'><img src={binder} alt='Circle' className='showCaseCircleImg'/></div>
                <h2 className='showCaseHeader'>Binders</h2>
                <button className='showCaseButton'>View Examples</button>
                <p className='showCaseContent'>Accent colors should be used sparingly to draw attention
                    to important design elements. 
                    Overuse of accent colors can make your design look haphazard.</p>
            </div>

            <div className='showcaseDivider'></div>

            <div className='Showcase'>
                <div className='showCaseCircle'><img src={note} alt='Circle' className='showCaseCircleImg'/></div>
                <h2 className='showCaseHeader'>Notes</h2>
                <button className='showCaseButton'>View Examples</button>
                <p className='showCaseContent'>Accent colors should be used sparingly to draw attention
                    to important design elements. 
                    Overuse of accent colors can make your design look haphazard.</p>
            </div>
        </div>

        <div className='footer'>
            <div className='footerContainer'>
                <h2>World Build</h2>
                <h3>For Novelist</h3>
                <h3>For Game Masters</h3>
                <h3>For Worldbuilders</h3>
            </div>

            <div className='footerContainer'>
                <h2>Contact</h2>
                <h3>About Us</h3>
                <h3>FAQ</h3>
            </div>

            <div className='footerContainer'>
                <h2>Learn</h2>
                <h3>News</h3>
                <h3>Videos</h3>
                <h3>Tutorials</h3>
            </div>
        </div>


        </div>
    );
};

export default Landing;
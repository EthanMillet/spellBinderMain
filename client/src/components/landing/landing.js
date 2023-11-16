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
                    <button className='IntroButton'><Link className='button' to='/signup'> <span>Sign Up For Free</span> </Link></button>
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
                    Spell Binder empowers you to craft intricate worlds with ease. Create personalized binders for each of your projects, providing a centralized space to organize notes, details, and interactive maps for a seamless worldbuilding experience.
                    </p>
                    <button className='cardButton'      onClick={() => {
     const anchor = document.querySelector('#reviews-link')
     anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }}>See More...</button>
                </div></div>

                <div className='bodyCard'>
                    <div className='cardTitle'>
                        <img className="bodyImg" src={map} alt="Map"/>
                        <h2>Maps</h2>
                    </div>

                    <div className='cardContent'>
                    <p className='cardInfo'>
                    Dive deep into your created worlds with interactive maps that breathe life into your imagination. Pin locations, add annotations, and create a visual representation of your universe that evolves with your storytelling.
                    </p>
                    <button className='cardButton'      onClick={() => {
     const anchor = document.querySelector('#reviews-link')
     anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }}>See More...</button>        
                </div>
        </div>
                <div className='bodyCard'>
                    <div className='cardTitle'>
                        <img className="bodyImg" src={note} alt="Note"/>
                        <h2>Notes</h2>
                    </div>
                    <div className='cardContent'>
                    <p className='cardInfo'>
                    Capture every nuance of your world's lore with a comprehensive note-taking system. Spell Binder allows you to jot down details, character backgrounds, and historical events to build a rich tapestry for your narrative.
                    </p>
                    <button className='cardButton'      onClick={() => {
     const anchor = document.querySelector('#reviews-link')
     anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }}>See More...</button>
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
                    <p className='binderLeftContent'>Spell Binder empowers you to craft intricate worlds with ease. Create personalized binders for each of your projects, providing a centralized space to organize notes, details, and interactive maps for a seamless worldbuilding experience.</p>

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
                    <p className='binderLeftContent'>Dive deep into your created worlds with interactive maps that breathe life into your imagination. Pin locations, add annotations, and create a visual representation of your universe that evolves with your storytelling.</p>

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
                    <p className='binderLeftContent'>Capture every nuance of your world's lore with a comprehensive note-taking system. Spell Binder allows you to jot down details, character backgrounds, and historical events to build a rich tapestry for your narrative.</p>

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

        <div className='showCaseThing' id='reviews-link'>
            <div className='ShowtitleContainer'>
                <h2 className='showCaseTitle'>See Our Feature Showcase</h2>
                <h3 className='showCasesubTitle'>Get Started Creating Your World</h3>
            </div>
            <div className='Showcase'>
                <div className='showCaseCircle'><img src={map} alt='Circle' className='showCaseCircleImg'/></div>
                <h2 className='showCaseHeader'>Maps</h2>
                <button className='showCaseButton'><Link to='/exampleMap'><span>View Examples</span></Link></button>
                <p className='showCaseContentBlue'>These binders serve as enchanted repositories, offering a centralized sanctuary to meticulously organize your notes, elaborate details, and interactive maps. It's akin to having a magical workshop where your ideas seamlessly converge, creating a captivating and harmonious worldbuilding experience.</p>
            </div>

            <div className='showcaseDivider'></div>

            <div className='Showcase'>
                <div className='showCaseCircle'><img src={binder} alt='Circle' className='showCaseCircleImg'/></div>
                <h2 className='showCaseHeader'>Binders</h2>
                <button className='showCaseButton'><Link to='/exampleMap'><span>View Examples</span></Link></button>
                <p className='showCaseContent'>These binders serve as enchanted repositories, offering a centralized sanctuary to meticulously organize your notes, elaborate details, and interactive maps. It's akin to having a magical workshop where your ideas seamlessly converge, creating a captivating and harmonious worldbuilding experience.</p>
            </div>

            <div className='showcaseDivider'></div>

            <div className='Showcase'>
                <div className='showCaseCircle'><img src={note} alt='Circle' className='showCaseCircleImg'/></div>
                <h2 className='showCaseHeader'>Notes</h2>
                <button className='showCaseButton'><Link to='/exampleMap'><span>View Examples</span></Link></button>
                <p className='showCaseContentBlue'>These binders serve as enchanted repositories, offering a centralized sanctuary to meticulously organize your notes, elaborate details, and interactive maps. It's akin to having a magical workshop where your ideas seamlessly converge, creating a captivating and harmonious worldbuilding experience.</p>
            </div>
        </div>
        </div>
    );
};

export default Landing;
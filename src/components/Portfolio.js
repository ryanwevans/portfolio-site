import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

const Portfolio = () => {
    return (
        <div className='portfolio-section' id='portfolio'>
            <div className='portfolio-container font-weight-light'>
                <h3 className='section-heading font-weight-lighter text-uppercase'>Portfolio</h3>
                <Container>
                    <Row fluid className='portfolio-Row'>
                        <Col className='portfolio-Col'>
                            <h5 className='portfolio-h5'>Happy Hive</h5>
                            <Image
                                rounded
                                fluid
                                // width={240}
                                // height={128}
                                className="mr-3"
                                src={require("../images/HappyHiveScreenshot.png")}
                                alt="Generic placeholder"
                            />
                            <p className='portfolio-p'>
                            A chores for rewards app. Earn points by completing posted chores, then redeem points for rewards.
                            <ul>
                                <li>Programmed user interface with React, with RESTful routes using React Router</li>
                                <li>Created a Rails API and database schema using ActiveRecord with an MVC pattern for data persistence</li>
                                <li>Added Redux to allow individual components to access and update application state</li>
                                <li>Implemented Redux Thunk middleware to allow asynchronous API calls and multiple action dispatches</li>
                                <li>
                                <a 
                                    className='portfolio-links' 
                                    href='https://github.com/ryanwevans/happy-hive' 
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    <em><strong>GitHub</strong></em>
                                </a> | 
                                <a 
                                    className='portfolio-links' 
                                    href='https://happy-hive-react-app.herokuapp.com' 
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    <em><strong> Heroku</strong></em>
                                </a>
                                </li>
                            </ul>
                            </p>
                        </Col>
                        <Col className='portfolio-Col'>
                            <h5 className='portfolio-h5'>Camptivities</h5>
                            {/* <br/> */}
                            <Image
                                rounded
                                fluid
                                // width={240}
                                // height={128}
                                className="mr-3"
                                src={require("../images/CamptivitiesScreenshot.png")}
                                alt="Camptivities App"
                            />
                            <p className='portfolio-p'>
                            A camp activity staffing app connecting camps and camp counselors
                            <ul>
                                <li>Programmed a Ruby on Rails MVC framework to manage complex, nested model relationships</li>
                                <li>Implemented OmniAuth to provide login through Facebook</li>
                                <li>Provided secure signup/login with ActiveModel validations and BCrypt</li>
                                <li>Utilized RESTful routes, DRY principles, helper methods, partials and limited logic in controllers</li>
                                <li>
                                <a 
                                    className='portfolio-links' 
                                    href='https://github.com/ryanwevans/rails-portfolio-project-camptivities-app' 
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    <em><strong>GitHub</strong></em>
                                </a> | 
                                <a 
                                    className='portfolio-links' 
                                    href='https://camptivities-heroku.herokuapp.com' 
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    <em><strong> Heroku</strong></em>
                                </a>
                                </li>
                            </ul>
                            </p>
                        </Col>
                        <Col className='portfolio-Col'>
                            <h5 className='portfolio-h5'>Personal Website</h5>
                            {/* <br/> */}
                            <Image
                                rounded
                                fluid
                                // width={240}
                                // height={128}
                                className="mr-3 ryanevns-image"
                                src={require("../images/RyanEvnsScreenShot.png")}
                                alt="Ryan Evans Website"
                            />
                            <p className='portfolio-p'>
                            Personal portfolio website hosted on Netlify
                            <ul>
                                <li>Single Page App created with React</li>
                                <li>UI designed with React-Bootstrap and overriding CSS attributes</li>
                                <li>Background image(s) from stock of personal photography</li>
                                <li>Blog hosted by The Flatiron School to be incorporated soon...</li>
                                <li>
                                <a 
                                    className='portfolio-links' 
                                    href='https://github.com/ryanwevans/portfolio-site' 
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    <em><strong>GitHub</strong></em>
                                </a> | 
                                <a 
                                    className='portfolio-links' 
                                    href='https://500px.com/ryanevns/galleries' 
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    <em><strong> 500px</strong></em>
                                </a>
                                </li>
                            </ul>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Portfolio;
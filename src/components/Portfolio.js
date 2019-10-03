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
                                <li><em>GitHub</em> | <em>Heroku</em></li>
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
                                <li><em>GitHub</em> | <em>Heroku</em></li>
                            </ul>
                            </p>
                        </Col>
                        <Col className='portfolio-Col'>
                            <h5 className='portfolio-h5'>QuoteVote</h5>
                            {/* <br/> */}
                            <Image
                                rounded
                                fluid
                                // width={240}
                                // height={128}
                                className="mr-3 quotevote-image"
                                src={require("../images/QuoteVoteScreenshot.png")}
                                alt="QuoteVote App"
                            />
                            <p className='portfolio-p'>
                            An app to submit your favorite quotes. Upvote quotes you like, downvote the ones you don’t
                            <ul>
                                <li>Created user interface with React using class and functional components</li>
                                <li>Added Redux to allow individual components to access and update application state</li>
                                <li>Designed with Bootstrap and overriding CSS attributes</li>
                                <li><em>GitHub</em> | <em>Heroku</em></li>
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
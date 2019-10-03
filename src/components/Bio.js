import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const Bio = () => {
    return (
        <div className='bio-section' id='about'>
            <div className='bio-container font-weight-light'>
                <h3 className='section-heading font-weight-lighter text-uppercase'>About</h3>
                <Container>
                    <Row>
                        <Col className='bio-image' >
                            <Image className='img-fluid' src={require("../images/RyanInBergenSm2.jpg")} roundedCircle />
                        </Col>
                        <Col className='section-text'>
                            <p>
                            I recently graduated from The Flatiron School's Full Stack Web Developer program. I also have a background in Operations and Upper Management positions within diverse industries. I am known for my strong skills in leadership, communication and big-picture thinking. I decided to make a career transition and attend The Flatiron School through a desire for a more creative career and a better work-life balance.<br/><br/>Fifteen years ago, my wife and I moved from New York City to the beautiful Pacific Northwest.  We have an almost 3-year-old daughter and love getting outside, whether it’s hiking, stand-up paddleboarding, biking or skiing.  We’ve also enjoyed traveling (and hiking) in places like South Korea, Scotland, Italy, Norway and London.<br/><br/>I’m currently seeking a junior or entry-level position as a Full Stack or Front End Developer.
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='bio-apps-list'>
                            <p>
                                REACT | REDUX | JAVASCRIPT | RUBY | RAILS | MySQL | MVC | ACTIVERECORD | REST | HTML | CSS
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Bio;
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const Bio = () => {
    return (
        <div className='bio-section'>
            <div className='bio-container'>
                <h3><em>Bio</em></h3>
                <Container>
                    <Row>
                        <Col className='bio-image'>
                            <Image className='img-fluid' src={require("../images/RyanInBergenSm2.jpg")} roundedCircle />
                        </Col>
                        <Col>
                            <p>
                            I am a Full Stack Web Developer known for big-picture thinking and creative problem solving. I am experienced in Ruby, Rails, JavaScript, and React, and have a background in leadership within diverse industries. I am known for my strong skills in leadership and communication. My ability to remain calm and composed is an asset when faced with difficult issues. I attended Flatiron School’s Full Stack Web Development program through a desire for a more creative career and better work-life balance. I’m seeking remote work, and am also open to relocating.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Bio;
import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


const Contact = () => {
    return(
        <div className='contact-section' id='contact'>
            <div className='contact-container font-weight-light'>
                <h3 className='section-heading font-weight-lighter text-uppercase'>Contact</h3>
                <Container className='contact-form-container'>
                    <Row>
                        <Col className='contact-form'>
                        <Form>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="email" placeholder="First name" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="password" placeholder="Last name" />
                                </Form.Group>
                            </Form.Row>

                            <Form.Group controlId="formGridAddress1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control placeholder="name@email.com" />
                            </Form.Group>

                            <Form.Group controlId="formGridAddress2">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows="5" placeholder="Message..." />
                            </Form.Group>

                            <Form.Group id="formGridCheckbox">
                                <Form.Check type="checkbox" label="Something to Check" />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Send
                            </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Contact;
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';


const Contact = () => {
    return(
        <div className='contact-section' id='contact'>
            <div className='contact-wrapper font-weight-lighter'>
                <h3 className='section-heading font-weight-lighter text-uppercase'>Contact</h3>
                <Container className='contact-Container'>
                    <Row>
                        <h4 class="text-uppercase font-weight-light contact-h4">RYAN EVANS</h4>
                        <h5 className='font-weight-lighter contact-h5'>
                        ryanwevans@icloud.com<br/>
                        360.224.1768<br/><br/>
                        <Nav.Link 
                            className='social-links' 
                            href='https://www.linkedin.com/in/ryanevns/' 
                            target='_blank'>

                            <strong>LinkedIn</strong>.com/in/ryanevns<br/>

                        </Nav.Link>
                        <Nav.Link 
                            className='social-links' 
                            href='https://github.com/ryanwevans/'
                            target='_blank'>

                            <strong>GitHub</strong>.com/ryanwevans
                            
                        </Nav.Link>
                        </h5>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Contact;

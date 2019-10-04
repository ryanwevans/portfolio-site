// import React from 'react';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Blog = () => {
    const [show, setShow] = useState(false);

    return (
        <div className='blog-section' id='blog'>
        <div className='blog-container font-weight-light'>
            <h3 className='section-heading font-weight-lighter text-uppercase'>Blog</h3>
            <Container className='blog-modal-Container'>
                <Row>
                    <Button variant="outline-light" onClick={() => setShow(true)}>
                    Technical Interview Problem Solving Practice
                    </Button>

                    <Modal
                        variant="secondary"
                        show={show}
                        onHide={() => setShow(false)}
                        size='lg'
                        scrollable
                        aria-labelledby="example-custom-modal-styling-title"
                    >
                        <Modal.Header closeButton>
                        <Modal.Title id="example-custom-modal-styling-title" font-weight-lighter>
                            Technical Interview Problem Solving Practice
                        </Modal.Title>
                        </Modal.Header>
                        <Modal.Body
                        className='blog-modal-body'>
                            <p>
                            What I'm going to talk about in this post will seem very obvious...once you've <em>heard</em> it, but before hearing it, you're probably not <em>really</em> thinking about it (specifically).
                            <br/>
                            <br/>
                            I had a great opportunity to do an informational interview (these are an amazing networking opportunity, by the way) with an executive at a company that performs technical interviews for other businesses.  Besides meeting a very down-to-earth and easy to talk to person, I got a piece of advice that I have been seeing since in many other resources, but not explained as clearly and obviously as it was the first time I heard it in this interview.
                            <br/>
                            <br/>
                            Here it is:
                            <br/>
                            <br/>
                            <em>When you're in your technical interview, in a whiteboarding session, be sure to articulate</em> in words <em>and</em> writing <em>what you are planning to do to solve the problem given to you.</em>
                            <br/>
                            <br/>
                            This seems pretty obvious, right?  But think about it.  How often do we take the time to write out the steps that we are about to implement in code?  Rarely.  And I'm sure it's even less frequent that any of us actually say it out loud (yeah, with your real voice, not the one in your head).
                            <br/>
                            <br/>
                            Think about that advice and how actually difficult it could be to remember, not to mention execute, while under the pressure of whiteboarding during a technical interview.  But let's think about it from the interviewer's point of view.  They have no idea what you do or don't know, and what code you will or won't write on that whiteboard.  If you can *tell* them what you're thinking about, they will at least know what your level of analytical thinking is.
                            <br/>
                            <br/>
                            Now let's also think about the fact that they're going to ask you to solve a problem that you won't be able to solve quickly.  That's the whole point, right?  To see you're problem-solving skills when you get stuck?
                            <br/>
                            So, if you can break down your plan to solve that difficult problem into steps and list them out on the whiteboard (and think out loud), they'll know what you were planning to do even if you run out of time.  And who knows, you may even get the benefit of the doubt that you know how to write that algorithm you had on your list even though you didn't have time to actually get to it.
                            <br/>
                            <br/>
                            I know, this all seems obvious, like I said in the beginning.  But try this on your own sooner than later, whether you have an interview scheduled yet or not.  Try taping up some butcher paper on the wall (or some of that brown paper that came in your Amazon delivery) and write out the code to solve a problem from a site like HackerRank.  Even better, do this exercise and invite a friend or family member to listen to you explain your plan and thought process while you solve the problem.
                            <br/>
                            <br/>
                            The only down side to this practice, is that you won't actually know if the code you've written actually works.  I would suggest *after* you've gone through it on paper and out loud with someone else, type your solution into a code editor to see if it works.  If it doesn't, I'm sure it'll be close.  And besides, that wasn't completely the point of the exercise.  Whether it's perfect or not, you're getting practice writing and talking about solving problems!  Just like a technical interview!
                            <br/>
                            <br/>
                            Imagine having one less thing about your technical interview to feel nervous about!  Now you can focus on your deep breathing and calming exercises and focusing techniques!  Can you feel that pressure melting away??
                            </p>
                        </Modal.Body>
                    </Modal>
                </Row>
            </Container>
        </div>
        </div>
    )
}

export default Blog;

    // return (
    //     <div className='blog-section' id='blog'>
    //         <div className='blog-container font-weight-light'>
    //             <h3 className='section-heading font-weight-lighter text-uppercase'>Blog</h3>
    //             <Container>
    //                 <Row>
    //                     {/* <Col className='blog-image' > */}
    //                         <Media className='img-fluid' src={require("../images/FlatironSchoolLogo.png")} rounded >
    //                     {/* </Col> */}
    //                     {/* <Col className='section-text'> */}
    //                         <Media.Body>
    //                         <p>
    //                         Blog posts are currently hosted through The Flatiron School and will be migrated to this site very soon...
    //                         Click
    //                         <a href='http://ryanevns.com'> here </a>
    //                         to open my Flatiron School blog.
    //                         </p>
    //                         </Media.Body>
    //                         </Media>
    //                     {/* </Col> */}
    //                 </Row>
    //             </Container>
    //         </div>
    //     </div>
    // );
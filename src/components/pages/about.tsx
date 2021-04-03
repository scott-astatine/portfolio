import { MDBCol, MDBContainer, MDBRow } from 'mdbreact'
import React from 'react'


export const About = () => {
    return (
        <React.Fragment>
            <section className='content-section gradientColor1'>
                <MDBContainer className='rounded-container'>
                    <div className='d-fled justify-content-center text-center'>
                        <p className='section-title'>About Me</p>
                        <hr style={{
                            backgroundColor: '#fca0d3',
                            width: '160px',
                            marginTop: '-30px',
                        }} />
                    </div>

                    <MDBRow>
                        <MDBCol lg='6' sm='12' className='mb-3'>
                            <div className='me-container'>
                                <img src={require('../../img/myPhoto.jpg')} alt='Me'
                                    style={{ width: '100%', height: '400px' }} />
                            </div>
                        </MDBCol>
                          <MDBCol lg='6' sm='12' className='text-center'>
                            <p className='font-weight-light'>
                              Hello, I'm William Astatine & my legal name is Ayush. 
                              I'm a self-taught programmer. I've been programming since I was 12. I can program in couple of 
                              languages like Python, C/C++, JavaScript, TypeScript, Rust. Linux is my favourite OS, 
                              more specifically I use KUbuntu. And I am a full-stack web developer, I use Python's framework Django
                              and JavaScript library ReactJs as my default tools for web development.
                              But, I could use NodeJs for backend if required.
                              I'm always ready to learn new skills. Right now I'm fifteen, if you have job that fits my skillset
                              please contact me on my email or any social Direct messing service mentioned in the navbar!
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>
        </React.Fragment>
    )
}

export default About

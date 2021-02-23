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
                              Hello, I'm William Astatine. I'm a self-taught programmer.
                              I started programming when I was 12, at first I had no idea what I was doing
                              but I always wanted to build a program that can learn & talk. But I started with 
                              Web Development, learnt Python, JavaScript, Html/Css. After that I started learning 
                              new programming languages C++/C, Java, GoLang, Kotlin, TypeScript, Rust. After finding out about A.I
                              I needed the basic maths for ML but that maths syllabus was too tough for me and I couldn't find
                              any resources where I could even try. Anyway I'm always ready to learn new programming languages and my Legal 
                              Name is Ayush Kumar.
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>
        </React.Fragment>
    )
}

export default About

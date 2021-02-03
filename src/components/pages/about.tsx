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
                            backgroundColor: '#ff40d3',
                            width: '160px',
                            marginTop: '-30px',
                            marginLeft: '30%'
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
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>
        </React.Fragment>
    )
}

export default About

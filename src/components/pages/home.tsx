import React from 'react'
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact'
import MyPhoto from '../../img/myPhoto.jpg'

interface Props {
    name: string
}

export const Home: React.FC<Props> = ({ name }) => {

    return (
        <React.Fragment>
            <section className='home-section'>
                <MDBContainer className="d-flex justify-content-center text-center" style={{
                    borderRadius: '20px',
                }}>
                    <MDBRow>
                        <MDBCol lg='12'>
                            <img src={MyPhoto} className='home-image shadow mb-2' style={{
                                borderRadius: '100px',
                                width: '200px', height: '195px'
                            }} alt='William Astatine' />
                            <p className='intro-title mb-2'>{name} Astatine</p>
                            <p className='font-weight-light intro-description'>
                                I am a Full-Stack Developer, a Software Developer,
                                Python Programmer, A.I & Machine Learning enthusiast and Linux Programmer.
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>
        </React.Fragment>
    )
}


export default Home

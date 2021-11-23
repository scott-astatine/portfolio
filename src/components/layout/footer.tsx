import { MDBCol, MDBContainer, MDBRow } from 'mdbreact'
import { NavLink } from 'react-router-dom';
import React from 'react'

interface Props {
  name: string;
}

const PageFooter: React.FC<Props> = ({ name }) => {
  return (
    <React.Fragment>
      <footer className="navbg">
        <MDBContainer fluid>
          <MDBRow>
            <MDBCol className='justify-content-center text-center mt-4 pt-2 py-2' lg='12' sm='12'>
              <p className='font-weight-light text-small'>© Copyright
                <strong className='font-weight-bold'>  {name} Astatine </strong> {new Date().getFullYear()}<br />
                <small className='font-weight-light'>Desined by <NavLink to='/'> {name} Astatine</NavLink></small>
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </footer>
    </React.Fragment>
  )
}

export default PageFooter

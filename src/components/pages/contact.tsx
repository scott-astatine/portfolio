import { MDBBtn, MDBCol, MDBContainer, MDBIcon, MDBIframe, MDBInput, MDBRow } from 'mdbreact'
import React, { Component } from 'react'

interface IState {
    name: string,
    email: string,
    subject: string,
    message: string
}

const deviceType = () => {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        return "tablet";
    }
    if (/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)
    ) {
        return "mobile";
    }
    return "desktop";
};

export class Contact extends Component<{}, IState> {

    constructor(props: any) {
        super(props);
        this.state = {
            name: '',
            email: '',
            subject: '',
            message: ''
        }
    }

    handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        const { name, value } = e.currentTarget
        const n = name as keyof IState
        // @ts-ignore
        this.setState({
            [n]: value
        })
    }

    handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(this.state)
    }


    render() {
        return (
            <React.Fragment>
                <section className='content-section rpb-gradient'>
                    <MDBContainer className='bg-white' style={{ borderRadius: '10px', padding: '30px' }}>
                        <div className="title-container ">
                            <p className='section-title'>Contact</p>
                            <hr className='deep-purple' style={{ width: '130px', height: '0.2px', marginLeft: '20px', marginTop: '-30px' }} />
                        </div>
                        <MDBRow>
                            <MDBCol lg='5' sm='12' xl='6'>
                                <MDBContainer className='rounded-container'>
                                    <div className='justify-content-center'>
                                        <div className="head-container" style={{
                                            marginLeft: deviceType() === "desktop" ? '50px' : '25px'
                                        }}>
                                            <p className="message">Send your query to me.</p>
                                        </div>
                                        <form onSubmit={this.handleSubmit}>
                                            <div className="grey-text">
                                                <MDBInput label="Your name"
                                                    icon="user"
                                                    name='name'
                                                    onChange={this.handleChange}
                                                    value={this.state.name}
                                                    group
                                                    type="text"
                                                    validate error="wrong"
                                                    success="right" />
                                                <MDBInput label="Your email"
                                                    name='email'
                                                    onChange={this.handleChange}
                                                    value={this.state.email}
                                                    icon="envelope" group type="email" validate error="wrong"
                                                    success="right" />
                                                <MDBInput label="Subject"
                                                    name='subject'
                                                    onChange={this.handleChange}
                                                    value={this.state.subject} icon="tag" group type="text" validate error="wrong" success="right" />
                                                <MDBInput type="textarea"
                                                    name='message'
                                                    onChange={this.handleChange}
                                                    value={this.state.message}
                                                    rows="2" label="Your message" icon="pencil-alt" />
                                            </div>
                                            <div className="text-center">
                                                <MDBBtn className="round-element aqua-gradient">
                                                    Send
                                            <MDBIcon far icon="paper-plane" className="ml-1" />
                                                </MDBBtn>
                                            </div>
                                        </form>
                                    </div>
                                </MDBContainer>
                            </MDBCol>
                            <MDBCol lg='7' sm='12' xl='6'>
                                <section className='mt-3'>
                                    <section className='iframe-container'>
                                        <MDBIframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52871.86609906792!2d-118.43455350850633!3d34.082543932826454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc04d6d147ab%3A0xd6c7c379fd081ed1!2sBeverly%20Hills%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1602855641631!5m2!1sen!2sin"
                                        />
                                    </section>
                                </section>
                                <MDBCol lg='12' sm='12'>
                                    <MDBContainer className='contact-details'>
                                        <p>
                                            <MDBIcon className='mr-2' icon="envelope" size='lg' />
                                            WilliamAstatine@gmail.com
                                        </p>
                                        <p>
                                            <MDBIcon className='mr-2' icon="phone" size='lg' />
                                        +91 8434862003
                                        </p>
                                    </MDBContainer>
                                </MDBCol>
                            </MDBCol>

                        </MDBRow>
                    </MDBContainer>
                </section>
            </React.Fragment >
        )
    }
}

export default Contact

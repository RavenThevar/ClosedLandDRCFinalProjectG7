import React from 'react'
import Form from 'react-bootstrap/Form';
import APE from "../images/ape.png";
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer/Footer';
import { Container } from 'react-bootstrap';

const SignUp = () => {
  return(
    <div>
    <Navbar></Navbar>
      <div className='main-container'>
        <h1 className='title'>SIGN UP</h1>
        <div className='container'>
          <Container className='rectangle1'>
            <img className='ape.png' src={APE} alt="png"/>
            </Container>
              <Container className='rectangle2'>
                  <div className='buttons'>
                    <button className='signin'>SIGN IN</button>
                    <button className='signup'>SIGN UP</button>
                  </div>
                    <Form>
                      <div className="form-username">
                        <p className='username'>USERNAME</p>
                        <input type="text" placeholder="Enter your username" />
                       </div>
                        <div className="form-email">
                          <div className='email'>EMAIL</div>
                          <input type="email" placeholder="Enter your email" />
                        </div>
                        <div className="form-pass">
                          <div className='password'>PASSWORD</div>
                          <input type="password" placeholder="Enter your password" />
                        </div>
                        <div className="form-pass2">
                          <div className='password2'>RE-ENTER YOUR PASSWORD</div>
                          <input type="password" placeholder="Re-enter your password" />
                        </div>
                      <button type="submit" className="signup-button">SIGN UP</button>
                    </Form>
                </Container>
          </div>
        </div>
    </div>
  )
}

<Footer></Footer>
export default SignUp

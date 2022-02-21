import React from 'react'
import Form from 'react-bootstrap/Form';
import APE from "../images/ape.png";
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer/Footer';
import { Container} from 'react-bootstrap';
import "./signup.css"

const SignUp = () => {
  return(
    <div>
    <Navbar></Navbar>
      <div className='main-container'>
        <h1 className='title'>SIGN UP</h1>
        <div className='container'>
          <Container className='rectangle1'>
            <img className='nft2' src={APE} alt="png"/>
            </Container>
              <Container className='rectangle2'>
                  <div className='outer-button'>
                    <button className='button-signin'>SIGN IN</button>
                    <button className='button-signup'>SIGN UP</button>
                  </div>
                    <Form>
                      <Form.Group className="usernames" controlId="formBasicUsername">
                        <Form.Label> Username</Form.Label>
                        <Form.Control type="textfield" placeholder="Enter your username"/>
                      </Form.Group>

                      <Form.Group className="email1" controlId="formBasicEmail">
                        <Form.Label> Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter your email"/>
                      </Form.Group>

                      <Form.Group className="password" controlId="formBasicPassword">
                        <Form.Label> Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter your password"/>
                      </Form.Group>

                      <Form.Group className="password2" controlId="formBasicPassword2">
                        <Form.Label> Re-enter Your Password</Form.Label>
                        <Form.Control type="password" placeholder="Re-enter your password"/>
                      </Form.Group>
                        <div className='signup-container'>
                          <button className='signup-button'>SIGN UP</button>
                        </div>
                    </Form>
                </Container>
          </div>
        </div>
        <Footer></Footer>
    </div>
    
  )
}


export default SignUp

  {/* <div className="form-username1">
                        <p className='usernames'>USERNAME</p>
                        <input type="text" placeholder="Enter your username" />
                       </div>
                        <div className="form-email1">
                          <div className='email'>EMAIL</div>
                          <input type="email" placeholder="Enter your email" />
                        </div>
                        <div className="form-pass1">
                          <div className='password'>PASSWORD</div>
                          <input type="password" placeholder="Enter your password" />
                        </div>
                        <div className="form-pass2">
                          <div className='password2'>RE-ENTER YOUR PASSWORD</div>
                          <input type="password" placeholder="Re-enter your password" />
                        </div> */}
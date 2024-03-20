import React, { useState } from 'react';
import { Form, Button, Container, InputGroup } from 'react-bootstrap';
import { BsEye, BsEyeSlash, BsToggleOff, BsToggleOn } from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.scss'


const LoginFormComponent = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [keepLoggedIn, setKeepLoggedIn] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleKeepLoggedIn = () => {
    setKeepLoggedIn(!keepLoggedIn);
  };

    const handleSubmit = (event) => {
      event.preventDefault();
      // Handle form submission logic here
    };
  
    return (
        <Container className="d-flex justify-content-center align-items-center login-form-container" style={{ height: '100vh' }}>
        <div style={{ width: '400px' }} className="login-form-wrapper">
            <div className='heading-wrapper'>

            <h1>Login</h1>
            <p>Please sign in to continue</p>
            </div>
            <Form onSubmit={handleSubmit} className='login-form'>
          <Form.Group controlId="formBasicEmail" className="pb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="email@domain.com" required />
          </Form.Group>

          <Form.Group controlId="formBasicPassword" className="pb-3">
            <Form.Label>Password</Form.Label>
            <InputGroup>
              <Form.Control className='password-feild'
                type={showPassword ? "text" : "password"}
                placeholder="password"
                required
              />
              <InputGroup.Text className='show-password'>
                <Button variant="link" onClick={togglePasswordVisibility}>
                {showPassword ? <BsEyeSlash size={20} color="black" /> : <BsEye size={20} color="black" />}
                </Button>
              </InputGroup.Text>
            </InputGroup>
          </Form.Group>
          <div className="d-flex form-row align-items-center justify-content-between">
          <div className="col-auto toggle-button-wrapper">
            <Button className="toggle-button"
              variant="link"
              type="button"
              onClick={toggleKeepLoggedIn}
            >
              {keepLoggedIn ? <BsToggleOn size={30} color="black" /> : <BsToggleOff size={30} color="black" />}
              
            </Button>
            <Form.Label>Keep me logged in</Form.Label>
          </div>
          <div className="col-auto">
          <a href="##" className='frg-passwd'>Forgot Password?</a>
            </div>
          </div>
          <div className="d-flex form-row align-items-center justify-content-center btn-wrapper">
          <div className="col-auto">
              <Button variant="primary" type="submit">Submit</Button>
            </div>
            
            </div>
        </Form>
        </div>
      </Container>
    );
  };
  
  export default LoginFormComponent;
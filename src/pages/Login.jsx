import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleOnclick = async (e) => {
   e.preventDefault();
    const { username, password } = credentials;
    if(username==='admin' && password==='admin'){
      navigate('/create-employee');
      console.log(username,password)
    }
    else{
      console.log(username,password)
      toast.error('Invalid credentials');
    }
  };

     

  return (
    <>
    <header className='bg-dark  text-center'  ><h1 style={{color:'white'}}>Cred Marg</h1></header>
   
    <Form className='d-flex flex-column align-items-center mt-5'>
      <Form.Group className="mb-3" controlId="formBasicUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control 
          type="text" 
          name="username" 
          placeholder="Enter username" 
          value={credentials.username} 
          onChange={handleChange} 
          required 
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control 
          type="password" 
          name="password" 
          placeholder="Password" 
          value={credentials.password} 
          onChange={handleChange} 
          required 
        />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleOnclick}>
        Login
      </Button>
    </Form>
    </>
  );
};

export default Login;

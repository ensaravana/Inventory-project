import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import dashboard from "./dashboard";

import { Flex,TextField,Button } from "@radix-ui/themes";

const Login = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/token/', credentials);
      console.log(response.data.access,response.data.refresh)
      // Save tokens in localStorage or secure storage
      localStorage.setItem('accessToken', response.data.access);
      localStorage.setItem('refreshToken', response.data.refresh);
      alert('Login successful!');
      navigate("./dashboard")
      
    } catch (err) {
      setError('Invalid username or password');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <Flex direction="column" gap="3" maxWidth="500px">
        <TextField.Root variant="soft" 
        type="text"
        name="username"
        placeholder="Username"
        value={credentials.username}
        onChange={handleChange}
        required />
        <TextField.Root variant="soft" type="password"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleChange}
          required />

      <Button color="indigo" variant="soft">
      Login
        </Button>
          
  </Flex>
       
        
      </form>
    </div>
  );
};

export default Login;

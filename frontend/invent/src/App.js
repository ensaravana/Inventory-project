import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './login';
import Dashboard from './dashboard';
import Purchase from './material/purchase';
import Customer from './material/customer';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('accessToken');
  return token ? children : <Navigate to="./login" />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/purchase" element={<Purchase />} />
        <Route path="/customer" element={<Customer />} />
       
      </Routes>
    </Router>
  );
}

export default App;

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import OrderButton from './components/OrderButton';
import PhoneInput from './components/PhoneInput';
import Menu from './components/Menu';
import OrderConfirmation from './components/OrderConfirmation';
import { Container } from '@mui/material';

const App = () => {
  const [phone, setPhone] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);

  const handlePhoneSubmit = (phoneNumber) => {
    setPhone(phoneNumber);
  };

  return (
    <Router>
      <Container sx={{ backgroundColor: 'rgba(255, 105, 180, 0.7)', minHeight: '100vh', padding: 2 }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/phone" element={<PhoneInput onPhoneSubmit={handlePhoneSubmit} />} />
          <Route 
            path="/menu" 
            element={<Menu onSelectMenuItem={setSelectedItems} selectedItems={selectedItems} />} 
          />
          <Route 
            path="/confirmation" 
            element={<OrderConfirmation selectedItems={selectedItems} />} 
          />
        </Routes>
      </Container>
    </Router>
  );
};

const Home = () => {
  return <OrderButton to="/phone" />;
};

export default App;

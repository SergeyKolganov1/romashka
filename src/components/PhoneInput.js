import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const PhoneInput = ({ onPhoneSubmit }) => {
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setPhone(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onPhoneSubmit(phone);
    navigate('/menu');
  };

  return (
    <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '100vh',
      }}
    >
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <TextField 
          label="Введите телефон" 
          variant="outlined" 
          value={phone}
          onChange={handleChange}
          sx={{ marginBottom: 4, width: '300px' }}
          type="tel"
          required
        />
        <Button 
          type="submit"
          variant="contained" 
          sx={{ 
            backgroundColor: 'purple', 
            color: 'white',
            width: '300px',
            padding: '10px',
          }}
        >
          Заказать еду
        </Button>
      </form>
    </Box>
  );
};

export default PhoneInput;

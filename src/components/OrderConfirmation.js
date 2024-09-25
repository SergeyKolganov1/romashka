import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const OrderConfirmation = ({ selectedItems }) => {
  const navigate = useNavigate();

  return (
    <Box sx={{ textAlign: 'center', marginTop: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Заказ успешно оформлен!
      </Typography>
      <Typography variant="body1" gutterBottom>
        Ожидайте доставку.
      </Typography>
      <Button variant="contained" color="primary" onClick={() => navigate("/")}>
        На главную
      </Button>
    </Box>
  );
};

export default OrderConfirmation;

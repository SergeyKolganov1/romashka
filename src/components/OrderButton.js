import React from 'react';
import { Button, Box } from '@mui/material';

const OrderButton = ({ to }) => {
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '100vh' 
      }}
    >
      <Button 
        variant="contained" 
        sx={{ backgroundColor: 'purple', width: '300px', padding: '10px', color: 'white' }} 
        href={to}
      >
        Заказать еду
      </Button>
    </Box>
  );
};

export default OrderButton;

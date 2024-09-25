import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'purple' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, marginRight: '20px' }}>
          Ромашка
        </Typography>
        <Box sx={{
          width: 50,
          height: 50,
          borderRadius: '50%',
          backgroundColor: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Typography variant="h6" color='black'>Лого</Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

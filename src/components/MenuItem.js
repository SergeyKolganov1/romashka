import React from 'react';
import { Card, CardContent, Typography, Box, Checkbox } from '@mui/material';

const MenuItem = ({ title, isSelected, onSelect }) => {
  return (
    <Card sx={{
      backgroundColor: 'purple',
      width: '200px',
      margin: '10px',
      textAlign: 'center',
      borderRadius: '10px',
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden',
    }}>
      <CardContent sx={{ padding: 0 }}>
        <Box
          sx={{
            backgroundColor: 'white',
            padding: '10px 0',
            borderBottom: '2px solid purple',
          }}
        >
          <Typography variant="h6" component="div" sx={{ color: 'black' }}>
            {title}
          </Typography>
        </Box>

        <Box 
          sx={{
            backgroundColor: 'purple',
            padding: '20px 0',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box 
            sx={{
              width: 80,
              height: 80,
              borderRadius: '50%',
              backgroundColor: 'white',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography variant="body2" color="purple">
              Фото
            </Typography>
          </Box>
        </Box>

        {/* Checkbox для выбора бургера */}
        <Checkbox
          checked={isSelected}
          onChange={onSelect}
          sx={{ 
            marginTop: 1, 
            color: 'white', // Изначально белый
            '&.Mui-checked': {
              color: 'green', // Зелёный при выборе
            },
          }}
        />
      </CardContent>
    </Card>
  );
};

export default MenuItem;

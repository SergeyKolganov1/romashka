import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import MenuItem from './MenuItem';
import { useNavigate } from 'react-router-dom';

const Menu = () => {
  const [selectedBurgers, setSelectedBurgers] = useState([]);
  const navigate = useNavigate();

  const items = [
    { title: 'Бургер 1' },
    { title: 'Бургер 2' },
    { title: 'Бургер 3' },
    { title: 'Бургер 4' },
  ];

  const handleSelectBurger = (title) => {
    setSelectedBurgers(prev => {
      if (prev.includes(title)) {
        return prev.filter(item => item !== title); // Убираем бургер
      } else {
        return [...prev, title]; // Добавляем бургер
      }
    });
  };

  const handleOrder = () => {
    if (selectedBurgers.length > 0) {
      navigate("/confirmation"); // Переход на страницу подтверждения
    } else {
      alert("Пожалуйста, выберите хотя бы один бургер.");
    }
  };

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '20px',
        justifyItems: 'center',
        alignItems: 'center',
        padding: '20px',
      }}
    >
      {items.map((item, index) => (
        <MenuItem 
          key={index} 
          title={item.title} 
          isSelected={selectedBurgers.includes(item.title)}
          onSelect={() => handleSelectBurger(item.title)} 
        />
      ))}
      <Button 
        variant="contained" 
        sx={{ 
          backgroundColor: 'purple', // Фиолетовый цвет
          color: 'white', // Цвет текста белый
          gridColumn: 'span 2', 
          marginTop: 2 
        }} 
        onClick={handleOrder}
      >
        Заказать еду
      </Button>
    </Box>
  );
};

export default Menu;

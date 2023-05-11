import React from 'react';
import Box from '@mui/material/Box';

export interface CardProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Card = ({ children, className, onClick }: CardProps) => {
  return (
    <Box
      onClick={onClick}
      className={`flex px-4 py-3 shadow-lg rounded-lg bg-white ${className}`}
    >
      {children}
    </Box>
  );
};

export default Card;

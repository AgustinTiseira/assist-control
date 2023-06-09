import React from 'react';
import Typography from '@mui/material/Typography';

export interface FalseNavProps {
  title: string;
}

const FalseNav = ({ title }: FalseNavProps) => {
  return (
    <div
      className={
        ' flex align-middle justify-center h-12 w-screen bg-gray-200 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg'
      }
    >
      <Typography
        variant="h6"
        noWrap
        component="g"
        href="/"
        sx={{
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.2rem',
          color: 'black',
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {title}
      </Typography>
    </div>
  );
};

export default FalseNav;

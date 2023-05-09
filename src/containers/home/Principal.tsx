import React, { useState, SyntheticEvent } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const Principal = () => {
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={'flex flex-col h-[calc(100vh-4rem)] md:flex-row'}>
      <div
        className={
          'flex flex-col align-middle justify-start text-center w-screen p-10  md:justify-center md:w-1/2  '
        }
      >
        <h1 className={'font-semibold text-5xl md:font-bold md:text-7xl'}>
          Tu Aliado en Control de Asistencia y Pagos
        </h1>
        <span>No mas papel y lapicera.</span>
      </div>
      <div className="flex flex-col justify-start p-10 md:p-20 md:w-1/2">
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Ubicación" tabIndex={0} />
            <Tab label="Codigo" tabIndex={1} />
            <Tab label="Todo en uno" tabIndex={2} />
          </Tabs>
        </Box>
        {value === 0 && <span>Ubicación</span>}
        {value === 1 && <span>Codigo</span>}
        {value === 2 && <span>Todo en uno</span>}
      </div>
    </div>
  );
};

export default Principal;

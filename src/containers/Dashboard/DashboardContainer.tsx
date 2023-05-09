import React from 'react';
import Card from '@/components/Card/Card';
import TopBarMobile from '@/components/nav/TopBarMobile';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import { Tooltip } from '@mui/material';

const DashboardContainer = () => {
  return (
    <div className={'relative h-[calc(100vh-4rem)] px-5'}>
      <TopBarMobile
        title={'Hola Agustin 👋 '}
        showBackButton={false}
      ></TopBarMobile>
      <Card>
        <span className={'font-medium '}>Grupos</span>
      </Card>
      <Tooltip title="Agregar grupo" placement="left">
        <Fab
          aria-label="add"
          className={'absolute bottom-5 right-5 bg-green-300'}
        >
          <AddIcon />
        </Fab>
      </Tooltip>
    </div>
  );
};

export default DashboardContainer;

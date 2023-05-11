import React from 'react';
import Card from '@/components/Card/Card';
import TopBarMobile from '@/components/nav/TopBarMobile';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Tooltip from '@mui/material/Tooltip';

const DashboardContainer = () => {
  return (
    <>
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
          className={
            ' sticky top-[calc(100vh-8rem)] left-full bg-green-300 z-0'
          }
        >
          <AddIcon />
        </Fab>
      </Tooltip>
    </>
  );
};

export default DashboardContainer;

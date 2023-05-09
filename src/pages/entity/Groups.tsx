import TopBarMobile from '@/components/nav/TopBarMobile';
import Button from '@mui/material/Button';
import React from 'react';

const Groups = () => {
  return (
    <div className={'relative h-[calc(100vh-4rem)] px-5'}>
      <TopBarMobile title={'Grupos'} showBackButton={false}>
        <Button size="small" variant="contained" className={'bg-green-400'}>
          {'Crear Grupo'}
        </Button>
      </TopBarMobile>
    </div>
  );
};

export default Groups;

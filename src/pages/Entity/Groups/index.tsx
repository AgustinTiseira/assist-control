import TopBarMobile from '@/components/nav/TopBarMobile';
import Button from '@mui/material/Button';
import Link from 'next/link';
import React from 'react';

const Groups = () => {
  return (
    <div className={'h-full px-5'}>
      <TopBarMobile title={'Grupos'} showBackButton={false}>
        <Button
          LinkComponent={Link}
          href="/Entity/Groups/NewGroup"
          size="small"
          variant="contained"
          className={'bg-green-400'}
        >
          {'Crear Grupo'}
        </Button>
      </TopBarMobile>
    </div>
  );
};

export default Groups;

import Description from '@/components/entity/groups/Description';
import NewGroupForm from '@/components/entity/groups/NewGroupForm';
import TopBarMobile from '@/components/nav/TopBarMobile';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import React from 'react';

const NewGroup = () => {
  const [groupName, setGroupName] = React.useState('');

  const onChangeGroupName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGroupName(event.target.value);
  };

  return (
    <>
      <TopBarMobile showBackButton={true} title={'Crear Grupo'} />
      <Description />
      <NewGroupForm
        groupName={groupName}
        onChangeGroupName={onChangeGroupName}
      />
      {groupName && (
        <Fab
          variant="extended"
          className={'sticky bottom-16 left-full bg-green-200 z-0'}
        >
          Crear Grupo
          <AddIcon />
        </Fab>
      )}
    </>
  );
};

export default NewGroup;

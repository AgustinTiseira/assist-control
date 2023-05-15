import TopBarMobile from '@/components/nav/TopBarMobile';
import SearchBar from '@/components/searchBar/SearchBar';
import React from 'react';

const groupsList = [
  { name: 'Doble 5', subGroups: ['hola1', 'hola2', 'hola3'] },
  { name: 'Paraiso', subGroups: ['hola1', 'hola2', 'hola3'] },
  { name: 'La rosada', subGroups: ['hola1', 'hola2', 'hola3'] },
  { name: 'La fabrica', subGroups: ['hola1', 'hola2', 'hola3'] },
];

const FindGroupsContainer = () => {
  const [groupName, setGroupName] = React.useState('');
  return (
    <div>
      <TopBarMobile showBackButton title={'Busca tu grupo'} />
      <SearchBar
        setValue={setGroupName}
        value={groupName}
        optionsList={groupsList}
        label="Buscar grupo"
      />
    </div>
  );
};

export default FindGroupsContainer;

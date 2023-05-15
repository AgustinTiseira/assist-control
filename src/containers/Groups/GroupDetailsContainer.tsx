import GroupDetailDescription from '@/components/entity/groups/GroupDetail/GroupDetailDescription';
import Subgroups from '@/components/entity/groups/GroupDetail/Subgroup/Subgroups';
import TopBarMobile from '@/components/nav/TopBarMobile';
import React, { useEffect } from 'react';

const groupDetailDescriptionMock = {
  responsible: 'Juan Perez',
  inscripted: 20,
  openInscription: 'Si',
  days: [
    { day: 'lunes', hour: '18:00' },
    { day: 'martes', hour: '18:00' },
  ],
};

const subGroupsList = [
  {
    name: 'Subgrupo 1',
    id: '1',
    inscripted: [
      {
        name: 'Agustin',
        lastName: 'Tiseira',
        age: '24',
        phoneNumber: '1130207789',
      },
      {
        name: 'Agustin',
        lastName: 'Tiseira',
        age: '24',
        phoneNumber: '1130207789',
      },
      {
        name: 'Agustin',
        lastName: 'Tiseira',
        age: '24',
        phoneNumber: '1130207789',
      },
      {
        name: 'Agustin',
        lastName: 'Tiseira',
        age: '24',
        phoneNumber: '1130207789',
      },
    ],
  },
  {
    name: 'Subgrupo 2',
    id: '2',
    inscripted: [
      {
        name: 'Agustin',
        lastName: 'Tiseira',
        age: '24',
        phoneNumber: '1130207789',
      },
      {
        name: 'Agustin',

        lastName: 'Tiseira',
        age: '24',
        phoneNumber: '1130207789',
      },
    ],
  },
  {
    name: 'Subgrupo 3',
    id: '3',
    inscripted: [
      {
        name: 'Agustin',
        lastName: 'Tiseira',
        age: '24',
        phoneNumber: '1130207789',
      },
      {
        name: 'Agustin',

        lastName: 'Tiseira',
        age: '24',
        phoneNumber: '1130207789',
      },
      {
        name: 'Agustin',
        lastName: 'Tiseira',
        age: '24',
        phoneNumber: '1130207789',
      },
      {
        name: 'Agustin',
        lastName: 'Tiseira',
        age: '24',
        phoneNumber: '1130207789',
      },
      {
        name: 'Agustin',
        lastName: 'Tiseira',
        age: '24',
        phoneNumber: '1130207789',
      },
      {
        name: 'Agustin',
        lastName: 'Tiseira',
        age: '24',
        phoneNumber: '1130207789',
      },
      {
        name: 'Agustin',
        lastName: 'Tiseira',
        age: '24',
        phoneNumber: '1130207789',
      },
    ],
  },
];

const GroupDetails = () => {
  const [subgroupName, setSubgroupName] = React.useState('');
  const [subgroups, setSubgroups] = React.useState(subGroupsList);

  useEffect(() => {
    if (subgroupName === '') {
      setSubgroups(subGroupsList);
      return;
    }
    const filteredGroups = subGroupsList.filter((group) => {
      return group.name.toLowerCase().includes(subgroupName.toLowerCase());
    });
    setSubgroups(filteredGroups);
  }, [subgroupName, subgroups]);
  return (
    <>
      <TopBarMobile showBackButton title={'Futbol Escuelita'} />
      <GroupDetailDescription descriptionInfo={groupDetailDescriptionMock} />
      <Subgroups
        optionsList={subGroupsList}
        subgroupsList={subgroups}
        value={subgroupName}
        setValue={setSubgroupName}
      />
    </>
  );
};

export default GroupDetails;

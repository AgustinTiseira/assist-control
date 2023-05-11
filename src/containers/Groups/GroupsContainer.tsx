import Card from '@/components/Card/Card';
import TopBarMobile from '@/components/nav/TopBarMobile';
import Button from '@mui/material/Button';
import Link from 'next/link';
import React, { SyntheticEvent, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const groupsList = [
  {
    name: 'Grupo 1',
    subGroups: ['Subgrupo 1', 'Subgrupo 2', 'Subgrupo 3', 'Subgrupo 4'],
  },
  {
    name: 'Grupo 2',
    subGroups: ['Subgrupo 1', 'Subgrupo 2', 'Subgrupo 3', 'Subgrupo 4'],
  },
  {
    name: 'Grupo 3',
    subGroups: ['Subgrupo 1', 'Subgrupo 2', 'Subgrupo 3', 'Subgrupo 4'],
  },
  {
    name: 'Grupo 4',
    subGroups: ['Subgrupo 1', 'Subgrupo 2', 'Subgrupo 3', 'Subgrupo 4'],
  },
  {
    name: 'Grupo 1',
    subGroups: ['Subgrupo 1', 'Subgrupo 2', 'Subgrupo 3', 'Subgrupo 4'],
  },
  {
    name: 'Grupo 2',
    subGroups: ['Subgrupo 1', 'Subgrupo 2', 'Subgrupo 3', 'Subgrupo 4'],
  },
  {
    name: 'Grupo 3',
    subGroups: ['Subgrupo 1', 'Subgrupo 2', 'Subgrupo 3', 'Subgrupo 4'],
  },
  {
    name: 'Grupo 4',
    subGroups: ['Subgrupo 1', 'Subgrupo 2', 'Subgrupo 3', 'Subgrupo 4'],
  },
  {
    name: 'Grupo 1',
    subGroups: ['Subgrupo 1', 'Subgrupo 2', 'Subgrupo 3', 'Subgrupo 4'],
  },
  {
    name: 'Grupo 2',
    subGroups: ['Subgrupo 1', 'Subgrupo 2', 'Subgrupo 3', 'Subgrupo 4'],
  },
  {
    name: 'Grupo 3',
    subGroups: ['Subgrupo 1', 'Subgrupo 2', 'Subgrupo 3', 'Subgrupo 4'],
  },
  {
    name: 'Grupo 4',
    subGroups: ['Subgrupo 1', 'Subgrupo 2', 'Subgrupo 3', 'Subgrupo 4'],
  },
];

const GroupsContainer = () => {
  const [groupName, setGroupName] = React.useState('');
  const [groups, setGroups] = React.useState(groupsList);

  useEffect(() => {
    if (groupName === '') {
      setGroups(groupsList);
      return;
    }
    const filteredGroups = groupsList.filter((group) => {
      return group.name.toLowerCase().includes(groupName.toLowerCase());
    });
    setGroups(filteredGroups);
  }, [groupName, groups]);

  return (
    <>
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
      <div className="flex flex-col gap-5 pb-16">
        <Autocomplete
          id="search-group"
          disableClearable
          onChange={(event: SyntheticEvent<Element, Event>, newValue) => {
            setGroupName(newValue);
          }}
          options={groupsList.map((group) => group.name)}
          value={groupName}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Buscar grupo"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setGroupName(event.target.value)
              }
              InputProps={{
                ...params.InputProps,
                type: 'search',
              }}
            />
          )}
        />
        {groups.map((group, index) => (
          <Card
            className="flex flex-row justify-between gap-3 cursor-pointer w-full h-30"
            key={`${group.name}-${index}`}
          >
            <Avatar
              className="w-2/10"
              alt={group.name}
              src=""
              sx={{ color: 'black', backgroundColor: 'gray' }}
            />
            <div className="w-6/10 max-w-sm overflow-hidden md:w-full  md:max-w-screen-2xl md:flex md:flex-col md:items-start">
              <span className=" font-medium">{`${group.name}`}</span>
              <div className="flex gap-3 p-2">
                {group.subGroups.map((subGroup, index) => (
                  <Button
                    className="min-w-min h-10 bg-green-200 text-gray-500  hover:bg-green-300 "
                    variant="contained"
                    key={`${subGroup}-${index}`}
                  >
                    <span className="truncate">{subGroup}</span>
                  </Button>
                ))}
              </div>
            </div>
            <div className="w-2/10 flex items-center">
              <IconButton>
                <ArrowForwardIosIcon />
              </IconButton>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
};

export default GroupsContainer;

import React from 'react';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import ClearIcon from '@mui/icons-material/Clear';
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';

export interface SubGroupsProps {
  groupName: string;
}

const SubGroups = ({ groupName }: SubGroupsProps) => {
  const [subGroupName, setSubGroupName] = React.useState('');
  const [subGroups, setSubGroups] = React.useState<string[]>([]);

  const onChangeSubGroupName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSubGroupName(event.target.value);
  };

  const addSubGroup = () => {
    setSubGroups([...subGroups, subGroupName]);
    setSubGroupName('');
  };

  const deleteSubGroup = (subGroupName: string) => {
    setSubGroups(subGroups.filter((subGroup) => subGroup !== subGroupName));
  };

  return (
    <>
      <div className="flex items-center">
        {groupName && (
          <div
            className={'flex items-center w-screen justify-between md:w-1/2'}
          >
            <span className={' text-xl mr-5  truncate'}>{groupName}</span>
            <KeyboardDoubleArrowRightIcon />
            <TextField
              className="ml-5 w-1/2"
              label="Nombre del Subgrupo"
              value={subGroupName}
              required
              onChange={onChangeSubGroupName}
            />
            <IconButton onClick={addSubGroup} className={'p-0 ml-5'}>
              <AddIcon className=" shadow-md rounded-md bg-green-200" />
            </IconButton>
          </div>
        )}
      </div>
      {subGroups.length > 0 && (
        <div className=" flex flex-col mt-5  md:w-1/2">
          <span>Subgrupos:</span>
          {subGroups.map((subGroup, index) => (
            <div
              className="flex justify-between mb-4 mt-1"
              key={`${subGroup}-${index}`}
            >
              <span className={' text-xl font-extralight mr-5  truncate'}>
                {groupName}
              </span>
              <SubdirectoryArrowRightIcon />
              <div className=" flex justify-center w-1/2">
                <span className={' text-xl font-extralight '}>{subGroup}</span>
              </div>
              <IconButton
                onClick={() => deleteSubGroup(subGroup)}
                className={'p-0 ml-5'}
              >
                <ClearIcon className=" shadow-md rounded-md bg-red-200" />
              </IconButton>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default SubGroups;

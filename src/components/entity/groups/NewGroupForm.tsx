import TextField from '@mui/material/TextField';
import React from 'react';
import SubGroups from './SubGroups';

export interface NewGroupFormProps {
  groupName: string;
  onChangeGroupName: (_event: React.ChangeEvent<HTMLInputElement>) => void;
}

const NewGroupForm = ({ groupName, onChangeGroupName }: NewGroupFormProps) => {
  return (
    <div className={'py-6 mb-8'}>
      <TextField
        className="pb-6"
        fullWidth
        label="Nombre del Grupo"
        value={groupName}
        required
        onChange={onChangeGroupName}
      />
      <SubGroups groupName={groupName} />
    </div>
  );
};

export default NewGroupForm;

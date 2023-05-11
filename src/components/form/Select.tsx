import React from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export interface SelectFormProps {
  value: string | undefined;
  handleChange: (_event: SelectChangeEvent) => void;
  options: { value: string; label: string }[];
  label: string;
  titleForm?: string;
  required: boolean;
}

const SelectForm = ({
  value,
  handleChange,
  options,
  label,
  titleForm,
  required,
}: SelectFormProps) => {
  return (
    <>
      {titleForm && (
        <span className={'ml-8 font-medium text-xl'}>{titleForm}</span>
      )}
      <div className="py-3">
        {
          <FormControl fullWidth>
            <InputLabel id="select-label-entity-type">{label}</InputLabel>
            <Select
              labelId="simple-select-label-entity-type"
              id="simple-select-entity-type"
              value={value}
              label={label}
              onChange={handleChange}
              required={required}
            >
              {options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        }
      </div>
    </>
  );
};

export default SelectForm;

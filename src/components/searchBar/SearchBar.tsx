import React, { Dispatch, SyntheticEvent } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

export interface SearchBarProps {
  setValue: Dispatch<React.SetStateAction<string>>;
  value: string;
  optionsList: { name: string }[];
  label: string;
}

const SearchBar = ({ setValue, optionsList, value, label }: SearchBarProps) => {
  return (
    <div>
      <Autocomplete
        freeSolo
        id={`search-${label}`}
        disableClearable
        onChange={(event: SyntheticEvent<Element, Event>, newValue) => {
          setValue(newValue);
        }}
        options={optionsList.map((group) => group.name)}
        value={value}
        renderInput={(params) => (
          <TextField
            {...params}
            label={label}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setValue(event.target.value)
            }
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      />
    </div>
  );
};

export default SearchBar;

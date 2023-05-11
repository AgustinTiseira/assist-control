import { useState } from 'react';
import SelectForm from '@/components/form/Select';
import Breadcrumb from '@/components/nav/Breadcrumb';
import { continents, entityTypes } from '@/data/formNewAcademyData';
import { SelectChangeEvent } from '@mui/material/Select/SelectInput';
import TextField from '@mui/material/TextField';
import { MuiColorInput } from 'mui-color-input';
import Fab from '@mui/material/Fab';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { MuiTelInput } from 'mui-tel-input';
import { MuiFileInput } from 'mui-file-input';

const FormNewAcademy = () => {
  const [entityType, setEntityType] = useState<string>('');
  const [entityName, setEntityName] = useState<string>('');
  const [file, setFile] = useState<File | null>(null);
  const [color, setColor] = useState<string>('#000000');
  const [phone, setPhone] = useState<string>('');
  const [responsibleName, setResponsibleName] = useState<string>('');

  const handleChangeEntityType = (event: SelectChangeEvent) => {
    setEntityType(event.target.value);
  };

  const handleChangeColor = (newValue: string) => {
    setColor(newValue);
  };

  const handleChangePhone = (value: string) => {
    setPhone(value);
  };

  const handleChangeFile = (file: File | null) => {
    setFile(file);
  };

  return (
    <>
      <Breadcrumb />
      <SelectForm
        titleForm={'Entidad'}
        label="Tipo de Entidad"
        options={entityTypes}
        value={entityType}
        handleChange={handleChangeEntityType}
        required={true}
      />
      <div className={'py-3 w-full'}>
        <TextField
          className={'pb-6'}
          fullWidth
          label="Nombre de la Entidad"
          value={entityName}
          required
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setEntityName(event.target.value);
          }}
        />
        <MuiColorInput
          fullWidth
          className={'pb-6'}
          label={'Color principal'}
          value={color}
          onChange={handleChangeColor}
          required
        />
        <MuiFileInput
          fullWidth
          label={'Imagen que te representa'}
          className={'pb-6'}
          value={file}
          onChange={handleChangeFile}
        />
        <TextField
          className={'pb-6'}
          fullWidth
          label="Nombre del responsable"
          value={responsibleName}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setResponsibleName(event.target.value);
          }}
          required
        />
        <MuiTelInput
          fullWidth
          label={'Numero de contacto'}
          value={phone}
          onChange={handleChangePhone}
          continents={continents}
          defaultCountry={'AR'}
          required
        />
      </div>
      <Fab
        variant="extended"
        className={'sticky top-[calc(100vh-8rem)] left-full bg-green-200 z-0'}
      >
        Crear Cuenta
        <NavigateNextIcon />
      </Fab>
    </>
  );
};

export default FormNewAcademy;

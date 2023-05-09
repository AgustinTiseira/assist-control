import { useState } from 'react';
import SelectForm from '@/components/form/Select';
import Breadcrumb from '@/components/nav/Breadcrumb';
import FalseNav from '@/components/nav/FalseNav';
import { continents, entityTypes } from '@/data/formNewAcademyData';
import { SelectChangeEvent } from '@mui/material/Select/SelectInput';
import TextField from '@mui/material/TextField';
import { MuiColorInput } from 'mui-color-input';
import Fab from '@mui/material/Fab';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { MuiTelInput } from 'mui-tel-input';

const FormNewAcademy = () => {
  const [entityType, setEntityType] = useState<string>('');
  const [entityName, setEntityName] = useState<string>('');
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

  return (
    <div>
      <FalseNav title="Presente" />
      <Breadcrumb />
      <SelectForm
        titleForm={'Entidad'}
        label="Tipo de Entidad"
        options={entityTypes}
        value={entityType}
        handleChange={handleChangeEntityType}
        required={true}
      />
      <div className={'px-8 py-3 w-full'}>
        <TextField
          className={'pb-6'}
          fullWidth
          label="Nombre de la Entidad"
          value={entityName}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setEntityName(event.target.value);
          }}
          required
        />
        <MuiColorInput
          fullWidth
          className={'pb-6'}
          label={'Color principal'}
          value={color}
          onChange={handleChangeColor}
          required
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
        className={'absolute bottom-5 right-5 bg-green-200'}
      >
        Crear Cuenta
        <NavigateNextIcon />
      </Fab>
    </div>
  );
};

export default FormNewAcademy;

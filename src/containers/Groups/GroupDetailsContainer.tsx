import Card from '@/components/Card/Card';
import TopBarMobile from '@/components/nav/TopBarMobile';
import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';

const GroupDetails = () => {
  return (
    <>
      <TopBarMobile showBackButton title={'Futbol Escuelita'} />
      <Card className="relative flex justify-between w-full">
        <div className="flex flex-col gap-3">
          <div>
            <span className=" font-medium">Responsable: </span>
            <span className=" font-extralight">Javier</span>
          </div>
          <div>
            <span className=" font-medium">Inscriptos: </span>
            <span className=" font-extralight">25</span>
          </div>
          <div>
            <span className=" font-medium">Inscripcion abierta: </span>
            <span className=" font-extralight">Si</span>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <span className=" font-medium">Dias y horarios:</span>
          <div>
            <span className=" font-extralight">Lunes </span>
            <span className=" font-extralight">18:00 - 19:00</span>
          </div>
          <div>
            <span className=" font-extralight">Miercoles </span>
            <span className=" font-extralight">18:00 - 19:00</span>
          </div>
          <div>
            <span className=" font-extralight">Viernes </span>
            <span className=" font-extralight">13:00 - 15:00</span>
          </div>
        </div>
        <IconButton className=" text-green-600 w-4 h-4 absolute right-2 top-2">
          <EditIcon className="" />
        </IconButton>
      </Card>
    </>
  );
};

export default GroupDetails;

import React from 'react';
import Card from '@/components/Card/Card';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';

export interface GroupDetailDescriptionInfo {
  responsible: string;
  inscripted: number;
  openInscription: string;
  days: { day: string; hour: string }[];
}

export interface GroupDetailDescriptionProps {
  descriptionInfo: GroupDetailDescriptionInfo;
}

const GroupDetailDescription = ({
  descriptionInfo,
}: GroupDetailDescriptionProps) => {
  return (
    <Card className="relative flex justify-between w-full p cursor-pointer hover:bg-green-200 transition-all">
      <div className="flex flex-col gap-3">
        <div>
          <span className=" font-medium">Responsable: </span>
          <span className=" font-extralight">
            {descriptionInfo.responsible}
          </span>
        </div>
        <div>
          <span className=" font-medium">Inscriptos: </span>
          <span className=" font-extralight">{descriptionInfo.inscripted}</span>
        </div>
        <div>
          <span className=" font-medium">Inscripcion abierta: </span>
          <span className=" font-extralight">
            {descriptionInfo.openInscription}
          </span>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <span className=" font-medium">Dias y horarios:</span>
        {descriptionInfo.days.map((day, index) => (
          <div key={`${day}-${index}`}>
            <span className=" font-extralight">{day.day}</span>
            <span className=" font-extralight">{day.hour}</span>
          </div>
        ))}
      </div>
      <IconButton className=" text-green-600  w-3 h-3 absolute right-1.5 top-1.5">
        <EditIcon className="w-3 h-3" />
      </IconButton>
    </Card>
  );
};

export default GroupDetailDescription;

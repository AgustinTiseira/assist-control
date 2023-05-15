import SearchBar from '@/components/searchBar/SearchBar';
import { Card } from '@mui/material';
import React from 'react';
import { useRouter } from 'next/router';

export interface SubgroupsList {
  name: string;
  id: string;
  inscripted: {
    name: string;
    lastName: string;
    age: string;
    phoneNumber: string;
  }[];
}

export interface SubgroupsProps {
  subgroupsList: SubgroupsList[];
  setValue: React.Dispatch<React.SetStateAction<string>>;
  value: string;
  optionsList: { name: string }[];
}

const Subgroups = ({
  subgroupsList,
  setValue,
  value,
  optionsList,
}: SubgroupsProps) => {
  const router = useRouter();
  const { GroupID } = router.query;

  const goToSubgroup = (subgroupID: string) => {
    router.push(`/Entity/Groups/${GroupID}/Subgroup/${subgroupID}`);
  };

  return (
    <div className="flex flex-col mt-5 gap-3 ">
      <SearchBar
        value={value}
        setValue={setValue}
        optionsList={optionsList}
        label={'Buscar Subgrupo'}
      />
      <div className="flex flex-col gap-5 pb-16">
        {subgroupsList.map((subgroup) => (
          <Card
            key={subgroup.id}
            onClick={() => goToSubgroup(subgroup.id)}
            className="flex flex-col cursor-pointer"
          >
            <span>{subgroup.name}</span>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Subgroups;

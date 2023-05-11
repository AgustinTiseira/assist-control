import Card from '@/components/Card/Card';
import React from 'react';

const Description = () => {
  return (
    <Card className="flex flex-col">
      <span className=" font-medium">Grupos</span>
      <span className=" text-sm">
        Dentro de tu organización puede haber grupos por los cuales se
        identifiquen sus integrantes, por ejemplo en un restaurante pueden ser
        los mozos, por un lado, y los cocineros, por otro. Otro ejemplo seria un
        complejo deportivo donde lo ideal seria dividir por deportes y luego
        también crear subgrupos para identificar cada categoría.
      </span>
    </Card>
  );
};

export default Description;

import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';

const breadcrumbLabels: Record<string, string> = {
  '/': 'Inicio',
  NewForm: 'Crear Cuenta',
};

const Breadcrumb = () => {
  const router = useRouter();

  const pathSegments = router.asPath
    .split('/')
    .filter((segment) => segment !== '');

  const breadcrumbs = pathSegments.reduce<{ label: string; url: string }[]>(
    (acc, segment, index) => {
      const url = `/${pathSegments.slice(0, index + 1).join('/')}`;
      console.log(segment);
      return [...acc, { label: breadcrumbLabels[segment] || segment, url }];
    },
    [{ label: 'Inicio', url: '/' }]
  );

  return (
    <Breadcrumbs aria-label="breadcrumb" className={'p-5'}>
      {breadcrumbs.map(({ label, url }, index) =>
        breadcrumbs.length - 1 !== index ? (
          <Link key={url} color="inherit" href={`${url}`}>
            {label}
          </Link>
        ) : (
          <Typography key={label} color="text.primary">
            {label}
          </Typography>
        )
      )}
    </Breadcrumbs>
  );
};

export default Breadcrumb;

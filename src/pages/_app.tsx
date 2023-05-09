import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import { useEffect, useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NavBar from '@/components/nav/NavBar';
import { navBarEntityPages, navBarEntitySettings } from '@/data/Dashboard';
import Link from 'next/link';

export default function App({ Component, pageProps, router }: AppProps) {
  const [value, setValue] = useState<string>('Central');
  const excludeNavbarEntity = ['/', '/NewForm'].includes(router.asPath);

  useEffect(() => {
    const { pathname } = router;
    const lastPart = pathname.split('/').pop();
    if (lastPart) {
      setValue(lastPart);
    }
  }, [router]);

  return (
    <>
      {!excludeNavbarEntity && (
        <NavBar
          logged={true}
          className={'hidden md:flex '}
          pages={navBarEntityPages}
          settings={navBarEntitySettings}
        />
      )}
      <Component {...pageProps} />
      {!excludeNavbarEntity && (
        <BottomNavigation
          className={'md:hidden absolute bottom-0 w-full'}
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            LinkComponent={Link}
            href="/entity/Dashboard"
            value={'Central'}
            label="Central"
            icon={<HomeIcon />}
          />
          <BottomNavigationAction
            LinkComponent={Link}
            value={'Grupos'}
            label="Grupos"
            href="/entity/Groups"
            icon={<FavoriteIcon />}
          />
          <BottomNavigationAction
            value={'Perfil'}
            label="Perfil"
            href="/entity/Profile"
            icon={<AccountCircleIcon />}
          />
        </BottomNavigation>
      )}
    </>
  );
}

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
  const [value, setValue] = useState<string>('Dashboard');
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
          className={'hidden md:flex md:mb-5'}
          pages={navBarEntityPages}
          settings={navBarEntitySettings}
        />
      )}
      <div className={' min-h-[calc(100vh-3.5rem)] h-[calc(100vh-3.5rem)]'}>
        <Component {...pageProps} />
      </div>
      {!excludeNavbarEntity && (
        <BottomNavigation
          className={'md:hidden fixed bottom-0 w-full h-14'}
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            LinkComponent={Link}
            href="/Entity/Dashboard"
            value={'Dashboard'}
            label="Central"
            icon={<HomeIcon />}
          />
          <BottomNavigationAction
            LinkComponent={Link}
            value={'Groups'}
            label="Grupos"
            href="/Entity/Groups"
            icon={<FavoriteIcon />}
          />
          <BottomNavigationAction
            value={'Profile'}
            label="Perfil"
            href="/Entity/Profile"
            icon={<AccountCircleIcon />}
          />
        </BottomNavigation>
      )}
    </>
  );
}

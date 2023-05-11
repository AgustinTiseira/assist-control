import React from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import IconButton from '@mui/material/IconButton';
import { useRouter } from 'next/router';

export interface TopBarMobileProps {
  title: string;
  showBackButton: boolean;
  children?: React.ReactNode;
}

const TopBarMobile = ({
  title,
  showBackButton,
  children,
}: TopBarMobileProps) => {
  const router = useRouter();

  return (
    <div className="flex w-screen h-16 md:hidden items-center py-3 px-5 -mx-5 text-lg justify-between ">
      <div>
        {showBackButton && (
          <IconButton onClick={() => router.back()} className={'p-0 pr-2'}>
            <ArrowBackIosNewIcon />
          </IconButton>
        )}
        <span>{title}</span>
      </div>
      {children}
    </div>
  );
};

export default TopBarMobile;

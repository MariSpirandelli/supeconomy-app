import Body from '@/components/layout/body';
import FloatMenu from '@/components/layout/float-menu';
import Loading from '@/components/Loading';
import React, { useEffect, useState } from 'react';
import Products from '../components/products';
import Welcome from '../components/welcome';
import { useSE } from '../context/SEProvider';

export default function Home() {
  const se = useSE();

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>();

  useEffect(() => {
    setIsAuthenticated(se.state.isAuthenticated);
  }, [se.state.isAuthenticated]);

  if(isAuthenticated === undefined){
    return <Loading/>
  }

  if (!isAuthenticated) {
    return <Welcome />;
  }

  return (
    <Body withImgBackground={true}>
      <>
        <FloatMenu />
        <Products />
      </>
    </Body>
  );
}

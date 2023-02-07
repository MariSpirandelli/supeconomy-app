import styled from 'styled-components';
import React from 'react';
import { privateRoute } from '../private-route';
import { useRouter } from 'next/router';
import Body from '@/components/layout/body';
import FloatMenu from '@/components/layout/float-menu';
import ProductCard from '@/components/cards';
import { Product } from '@/types/product';
import { Group } from '@/types/group';
import Products from '@/components/products';

const Title = styled.h1`
  color: red;
  font-size: 50px;
`;

const Discover = () => {
  const router = useRouter();
  return (
    <Body withImgBackground={true}>
      <>
        <FloatMenu></FloatMenu>
        <Products/>
      </>
    </Body>
  );
};

export default privateRoute(Discover);

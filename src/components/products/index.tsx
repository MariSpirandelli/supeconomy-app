import React from 'react';
import ProductCard from '../cards';
import { StyledDiv } from './_styles';
import { products } from '@/mocked/data/products';
import { group } from '@/mocked/data/groups';

const Products: React.FC = () => {
  return (
    <StyledDiv id="product_list">
      {products.map((product, i) => (
        <ProductCard
          key={`Product_${i}`}
          product={product}
          group={group}
        ></ProductCard>
      ))}
    </StyledDiv>
  );
};

export default Products;

import React, { CSSProperties, ReactNode } from 'react';
import ProductCard from '../cards';
import { StyledDiv } from './_styles';
import { products } from '@/mocked/data/products';
import { group } from '@/mocked/data/groups';

interface Props {
  showAll: boolean;
  children?: ReactNode;
  style?: CSSProperties;
  className?: string;
}

const Products: React.FC<Props> = ({ showAll, style, className }) => {
  if (showAll) {
    console.log(showAll);
  }

  return (
    <StyledDiv id="product_list" style={style} className={className}>
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

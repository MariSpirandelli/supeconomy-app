import { Group } from '@/types/group';
import { Product } from '@/types/product';
import { Favorite, Share } from '@mui/icons-material';
import {
  CardHeader,
  Avatar,
  IconButton,
  CardContent,
  Typography,
  CardActions,
} from '@mui/material';
import { DateTime } from 'luxon';
import Image from 'next/image';
import { CSSProperties, ReactNode } from 'react';
import { StyledCard } from './_styles';

interface Props {
  product: Product;
  group?: Group;
  children?: ReactNode;
  style?: CSSProperties;
  className?: string;
}

const ProductCard: React.FC<Props> = ({ product, group, style, className }) => {
  return (
    <StyledCard style={style} className={className}>
      <CardHeader
        avatar={<Avatar src={group?.ico} aria-label="group-ico" />}
        title={group?.name}
        action={
          <>
            <IconButton aria-label="add to favorites">
              <Favorite />
            </IconButton>
            <IconButton aria-label="share">
              <Share />
            </IconButton>
          </>
        }
      ></CardHeader>
      <CardContent>
        <div className="product-image">
          <Image
            src={product.image}
            width={100}
            height={100}
            alt={product.name}
          ></Image>
        </div>
        <div className="product-datails">
          <div className="product-info">
            <Typography variant="body2" component="h3" sx={{fontWeight: 'bold'}} color="text.primary">
              {product.name}
            </Typography>
            <Typography variant="h5" color="green">
              R$ {parseFloat(`${product.price}`).toFixed(2).replace('.', ',')}
            </Typography>
            <Typography variant="body2" component="span" sx={{fontSize: '0.65rem'}}>
              {DateTime.fromISO(product.lastUpdate).toLocaleString()}
            </Typography>
          </div>
          <div className="store-info">
            <Typography variant="body2" component="span" sx={{fontSize: '0.65rem'}} color="text.secondary">
              {product.lastUpdatedBy}
            </Typography>
            <Image
              src={product.store.image}
              width={100}
              height={100}
              alt="store"
            />
          </div>
        </div>
      </CardContent>
    </StyledCard>
  );
};

export default ProductCard;

import { Card } from '@mui/material';
import styled from 'styled-components';

export const StyledCard = styled(Card)`
  width: 20rem;
  min-width: 20rem;
  max-width: 20rem;
  flex: 1 0 21%;
  margin: 0.5rem;

  .MuiCardHeader-title {
    color: var(--green-font-color);
    text-decoration: underline;
    font-weight: bold;
  }
  .MuiAvatar-root {
    border: 2px solid var(--green-font-color);
    padding: 0.2rem;
    max-width: 1.5rem;
    max-height: 1.5rem;
  }

  .MuiCardContent-root {
    display: flex;
    flex-direction: row;

    .product-image {
      flex: 1;
    }
    .product-datails {
      display: flex;
      flex-direction: column;
      flex: 3;

      .store-info {
        display: flex;
        flex-direction: row;
        align-items: end;
        justify-content: space-between;

        img {
          max-width: 3rem;
          margin-bottom: -30px;
        }
      }
    }
  }
`;

import { Popover } from '@mui/material';
import styled from 'styled-components';

export const StyledDiv = styled.div`
  position: absolute;
  right: 1rem;
  bottom: 50%;
`;

export const StyledPopover = styled(Popover)`
  .MuiPopover-paper {
    border: 1px solid var(--green-font-color);
    border-radius: 4rem;
    box-shadow: none !important;

    .popover-content {
      display: flex;
      flex-direction: column;
      place-content: space-around;

      button{
        box-shadow: none;
      }
    }

  }
`;

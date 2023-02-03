import { Fab } from '@mui/material';
import React, { useState } from 'react';
import { StyledDiv, StyledPopover } from './_styles';
import { Home, QrCode, Search } from '@mui/icons-material';

const FloatMenu: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <StyledDiv>
      <Fab
        color="primary"
        variant="circular"
        size="medium"
        aria-describedby={id}
        onClick={handleClick}
      >
        <QrCode />
      </Fab>
      <StyledPopover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'left',
        }}
      >
        <div className="popover-content">
          <Fab
            color="secondary"
            variant="circular"
            size="medium"
            aria-describedby={id}
            onClick={handleClick}
          >
            <Search />
          </Fab>
          <Fab
            color="secondary"
            variant="circular"
            size="medium"
            aria-describedby={id}
            onClick={handleClick}
          >
            <QrCode />
          </Fab>
          <Fab
            color="secondary"
            variant="circular"
            size="medium"
            aria-describedby={id}
            onClick={handleClick}
          >
            <Home />
          </Fab>
        </div>
      </StyledPopover>
    </StyledDiv>
  );
};

export default FloatMenu;

import React, { useState } from 'react';

import { useSE } from '../../../context/SEProvider/SEProvider';
import {
  Button,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Image from 'next/image';
import { StyledDiv } from './_styles';
import Loading from '@/components/Loading';

export type LoginInputs = {
  cpf: string;
  password: string;
};

interface State {
  cpf: string;
  password: string;
  showPassword: boolean;
}

export default function LoginForm() {
  const se = useSE();

  const [values, setValues] = useState<State>({
    cpf: '',
    password: '',
    showPassword: false,
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  if (isLoading) {
    return <Loading />;
  }

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleSubmit = async (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    setIsLoading(true);
    se.actions.login(
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjcGYiOiIwMTYuMDM0LjIyNi0wOSIsImNyZWF0ZWRBdCI6IjIwMjAtMDEtMDVUMjM6NDM6MjUuNDkyWiIsInBvaW50IjpudWxsLCJob21lQWRkcmVzcyI6bnVsbCwid29ya0FkZHJlc3MiOm51bGwsIm5hbWUiOiJNYXJpYW5uYSIsImlhdCI6MTYwMDYyMzMzOCwiZXhwIjoxNjAyMzEwMzYxMzcyfQ.zrfTW-6jCZre_jt832xp6cz7CegNRn2drTGqtsIZCVU'
    );
  };

  return (
    <StyledDiv className="loginbg">
      <h3 className="welcomeText">Bem vindo!</h3>
      <div className="loginLogo">
        <Image width={100} height={100} alt="app logo" src="/supeconomy.png" />
      </div>
      <form className="loginForm" onSubmit={handleSubmit}>
        <TextField
          id="standard-required"
          label="Cpf"
          helperText="somente numeros"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircleIcon />
              </InputAdornment>
            ),
          }}
        />
        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
        <Input
          id="standard-adornment-password"
          type={values.showPassword ? 'text' : 'password'}
          value={values.password}
          onChange={handleChange('password')}
          startAdornment={
            <InputAdornment position="start">
              <AccountCircleIcon />
            </InputAdornment>
          }
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {values.showPassword ? (
                  <VisibilityIcon />
                ) : (
                  <VisibilityOffIcon />
                )}
              </IconButton>
            </InputAdornment>
          }
        />
        <Button type="submit" variant="contained" color="primary">
          Login
        </Button>
      </form>
    </StyledDiv>
  );
}

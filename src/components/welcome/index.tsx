import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { StyledDiv } from './_styles';
import Login from '@mui/icons-material/Login';
import PersonAdd from '@mui/icons-material/PersonAdd';
import { Typography } from '@mui/material';

export default function Welcome() {
  return (
    <>
      <StyledDiv className="publicHome">
        <div className="greetingImg">
          <Image
            width={100}
            height={100}
            src="/home-greeting.png"
            alt="Bem vindo"
          />
        </div>
        <h6>
          <strong>A sua plataforma de economia colaborativa</strong>
        </h6>

        <Link href="/login" className="nav-link cursor-pointer" id="signin">
          <Login />
          <Typography variant="body2" component="span">
            Faça já seu login!
          </Typography>
        </Link>

        <Link href="/signup" className="nav-link cursor-pointer" id="signup">
          <PersonAdd />
          Cadastre-se!
        </Link>
      </StyledDiv>
    </>
  );
}

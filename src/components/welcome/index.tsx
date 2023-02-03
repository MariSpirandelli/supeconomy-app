import React from 'react';
import { faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import Image from 'next/image';
import { StyledDiv } from './_styles';

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
          <FontAwesomeIcon icon={faSignInAlt} /> Faça já seu login!
        </Link>

        <Link href="/signup" className="nav-link cursor-pointer" id="signup">
          <FontAwesomeIcon icon={faUserPlus} />
          Cadastre-se!
        </Link>
      </StyledDiv>
    </>
  );
}

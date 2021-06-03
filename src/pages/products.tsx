import styled from "styled-components";
// import { useRouter } from "next/router";
import React from "react";
import {privateRoute} from "../private-route";
import { useRouter } from 'next/router'

const Title = styled.h1`
  color: red;
  font-size: 50px;
`;

const Discover = () => {
  const router = useRouter()
  return (
    <>
      <Title>Products Page</Title>
      <button
        onClick={() => {
          router.push(`/?products`)
        }}
      >
        click me
      </button>
    </>
  );
}

export default privateRoute(Discover);
import styled from "styled-components";
import React from "react";
import { useRouter } from 'next/router'

const Title = styled.h1`
  color: red;
  font-size: 50px;
`;

const Signup = () => {
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

export default Signup;
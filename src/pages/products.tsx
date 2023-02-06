import styled from "styled-components";
import React from "react";
import {privateRoute} from "../private-route";
import { useRouter } from 'next/router'
import Body from "@/components/layout/body";
import FloatMenu from "@/components/layout/float-menu";

const Title = styled.h1`
  color: red;
  font-size: 50px;
`;

const Discover = () => {
  const router = useRouter()
  return (
    <Body withImgBackground={true}>
      <Title>Products Page</Title>
      <button
        onClick={() => {
          router.push(`/?products`)
        }}
      >
        click me
      </button>

      <FloatMenu></FloatMenu>
    </Body>
  );
}

export default privateRoute(Discover);
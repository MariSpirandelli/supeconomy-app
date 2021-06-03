import React from "react";
import Products from "../components/products";
import Welcome from "../components/welcome";
import { useSE } from "../SEProvider";

export default function Home() {
  const se = useSE()

  const isAuthenticated = se.state.isAuthenticated;

  return (
    <>
    {isAuthenticated && <Products/>}
    {!isAuthenticated && <Welcome/>}
    </>
  );
}

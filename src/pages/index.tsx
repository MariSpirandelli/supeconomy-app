import React, { useEffect, useState } from "react";
import Products from "../components/products";
import Welcome from "../components/welcome";
import { useSE } from "../context/SEProvider";

export default function Home() {
  const se = useSE()

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(()=>{
    setIsAuthenticated(se.state.isAuthenticated)
  }, [se.state.isAuthenticated]);

  return (
    <>
    {isAuthenticated && <Products/>}
    {!isAuthenticated && <Welcome/>}
    </>
  );
}

import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import LoginForm from '../components/pages/login';
import { useSE } from '../context/SEProvider';

function Login() {
  const se = useSE();
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>();

  useEffect(() => {
    setIsAuthenticated(se.state.isAuthenticated);
  }, [se.state.isAuthenticated]);

  if (isAuthenticated) {
    router.push(`/`);
  }

  return (
    <>
      <LoginForm></LoginForm>
    </>
  );
}

export default Login;

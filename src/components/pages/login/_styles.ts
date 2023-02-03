import styled from 'styled-components';

export const StyledDiv = styled.div`
  &.loginbg {
    background-color: var(--nav-bg-color) !important;
    height: 100vh;
  }

  .welcomeText {
    padding-top: 4rem;
    text-align: center;
  }

  .loginLogo {
    display: flex;
    justify-content: center;
    padding: 1rem 0;

    img {
      width: 30vh;
      height: 25vh;
    }
  }

  .loginForm {
    display: flex;
    flex-direction: column;
    padding: 2rem;

    & > button {
      margin-top: 2rem;
    }
  }
`;

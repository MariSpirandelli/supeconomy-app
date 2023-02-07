import styled from 'styled-components';

export const StyledDiv = styled.div`
  &.publicHome {
    background-color: var(--nav-bg-color) !important;
    text-align: center;
    height: 100vh;
    display: flex;
    flex-direction: column;

    .greetingImg {
      img {
        width: 20rem;
        margin-left: -15px;
        height: auto;
      }
    }

    h6 {
      text-align: center;
      text-shadow: 0px 3px 5px #a2a2a2;
      color: #439322;
      font-size: 20px;
    }

    a {
      margin-top: 3rem;
      color: var(--nav-icons-font-color) !important;
      text-decoration: underline;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        margin: 0px 0.3rem;
      }
    }

    a:nth-of-type(2) {
      background-color: var(--nav-icons-font-color);
      margin: auto 2rem;
      color: var(--nav-bg-color) !important;
      border-radius: 5px;
      padding: 0.5rem;
    }
  }
`;

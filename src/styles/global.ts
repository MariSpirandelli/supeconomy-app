import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    h1,
h2,
h3,
h4,
h5,
h6,
.h1,
.h2,
.h3,
.h4,
.h5,
.h6,
body,
p,
div {
  font-family: HelveticaNeue, Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol";
}

* {
  outline: none;
  margin: 0;
  padding: 0;
}

html {
  height: 100vh;
}

body {
  background-color: var(--content-bg-color) !important;
  height: 100vh;
  margin: 0;
  padding: 0;
  max-height: 100vh;
  float: left;
  width: 100%;
  display: flex;
  flex-flow: column;
}

.content-bg{
    height: calc(100vh - 88px);
}


nav.navbar.navbar-expand-lg.navbar-light {
  color: var(--nav-icons-font-color);
  padding: 0rem 1rem;
  position: relative;
  box-shadow: 0px 5px 5px #c3c3c3;
  background-color: var(--nav-bg-color);
  display: flex;
  flex-direction: row;
  align-items: center;
  place-content: space-between;

  a.nav-link{
    color: var(--nav-icons-font-color) !important;
  }
  .navbar-brand img.d-inline-block.align-top{
    max-width: 6rem;
  }
}

.nav {
    background-color: var(--content-bg-color);
    padding: 1rem 0px 0.5rem 0;

  .nav-item{
    a.nav-link{
      font-size: 1.6rem;
      color: var(--nav-icons-font-color);
      &.active{
        border-bottom: 1px solid;
      }
    }
  }
}

nav.navbar.sticky-top.navbar-expand-lg.navbar-light.public-view{
  box-shadow: none;
}
`;

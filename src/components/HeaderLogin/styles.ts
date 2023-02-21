import styled from "styled-components";

export const HeaderComponent = styled.header`

display: flex;
justify-content: center;
  .header-navbar {
    height: 5rem;
    width: 90%;
    display: flex;
    justify-content: space-between;
    position: relative;
  }

  .container-logo {
    height: 100%;
    display: flex;
    align-items: center;
    width: 30%;
  }

  .container-logo img {
    height: 3rem;
  }

  .content-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
    width: 10rem;
    margin-right: 3.4rem;
    gap: 1.6rem;
  }

`
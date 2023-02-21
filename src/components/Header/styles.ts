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
    height: 2rem;
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

  select {
    padding: 0.4rem 1rem;
    background: transparent;
    color: #fff;
    border-radius: 2px;
    border: solid 1px #fff;
  }

  option {
    background-color: grey;
  }

  a {
    background-color: red;
    padding: 0.4rem 1rem;
    text-decoration: none;
    color: #fff;
    border-radius: 2px;
    border: none;
  }

  .card-background {
    top: 0;
    right: 0;
    left: 0;
    position: absolute;
    width: 100%;
  }
`;

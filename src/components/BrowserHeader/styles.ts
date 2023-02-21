import styled from "styled-components";

export const BrowserHeaderComponents = styled.header<{ bg: string }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: ${(props) => props.bg};
  display: flex;
  gap: 3rem;
  align-items: center;

  z-index: 999999;
  img {
    margin-left: 4rem;
  }

  nav {
    font-size: 0.8rem;
    font-weight: 600;
  }

  .hamburger {
    display: none;
  }

  @media (max-width: 768px) {
    img {
      margin-left: 0;
    }

    .hamburger {
      display: flex;
      font-size: 4rem;
      margin-left: 1rem;
      cursor: pointer;
    }
  }
`;

export const MenuMobileComponents = styled.nav<{activeHamburger: boolean}>`
  display: flex;
  width: 10rem;
  height: 100vh;
  background-color: rgba(0, 0, 0, 1);
  position: absolute;
  top: 3.9rem;
  box-shadow: 2px 2px 4px black;
  border-right: solid 1px #8c8c8c;
  display: none;

  ${({ activeHamburger }) =>
    activeHamburger &&
    `
    display: flex;
    transform: scaleY(1);
  `}

  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    list-style-type: none;
  }

  li{
    margin-left: 1rem;
    cursor: pointer;
  }

  img {
    border-radius: 3px;
  }

  .menu-profile {
    display: flex;
    width: 100%;
    align-items: center;
    gap: 1rem;
    margin-top: 1rem;
    font-size: 1.3rem;

    color: #8c8c8c;

    h3 {
      font-size: 1rem;
    }

    p {
      font-size: 0.6rem;
    }
  }
`;

import styled from "styled-components";

export const NavBrowserComponents = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  align-items: center;

  li {
    cursor: pointer;
  }

  ul {
    display: flex;
    list-style: none;
    gap: 1rem;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 1024px) {
    ul {
      display: none;
    }
  }

  @media (max-width: 1024px) {
    ol {
      position: absolute;
      right: 0;
    }
  }

  @media (max-width: 768px) {
    .menu-bar {
      display: none;
    }
  }

  ol {
    list-style: none;
    margin-right: 4rem;
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;

    svg {
      font-size: 1.6rem;
      font-weight: 700;
    }

    img {
      margin-left: 0;
      margin-top: 0;
    }

    .caret {
      display: flex;
      align-items: center;
      gap: 0.3rem;
      cursor: pointer;
      svg {
        font-size: 1rem;
      }
    }
  }
`;

export const NavigationButton = styled.button<{ showNavigation: boolean }>`
  display: none;
  @media (min-width: 769px) and (max-width: 1024px) {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border: none;
    background: transparent;
    color: white;
    font-weight: 600;
    cursor: pointer;
    .caret-navigation {
      ${({ showNavigation }) =>
        showNavigation &&
        `
    transform: rotate(180deg);
  `}
    }
  }
`;

export const ModalNavigation = styled.div<{ showNavigation: boolean }>`
  display: none;
  @media (min-width: 768px) and (max-width: 1024px) {
    position: absolute;
    width: 500px;
    height: 200px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #000;
    top: 4rem;
    left: 12rem;
    opacity: 0;
    border: 1px solid #333;
    border-top: 2px solid #fff;
    transform: scaleY(0);
    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;

    hr {
      display: flex;
      height: 10rem;
      position: absolute;
      right: 23.5rem;
    }

    ul {
      display: flex;
      flex-direction: column;
      width: 25%;
    }

    li {
      display: flex;
    }

    a {
      display: flex;
    }

    ${({ showNavigation }) =>
      showNavigation &&
      `
    opacity: 1; 
    transform: scaleY(1);
  `}
  }
`;

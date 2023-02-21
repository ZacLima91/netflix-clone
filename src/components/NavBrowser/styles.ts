import styled from "styled-components";

export const NavBrowserComponents = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;

  li{
    cursor: pointer;
  }
  ul {
    display: flex;
    list-style: none;
    gap: 1rem;
    justify-content: center;
    align-items: center;
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

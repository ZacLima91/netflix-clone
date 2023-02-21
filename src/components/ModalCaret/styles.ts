import styled from "styled-components";

export const ModalCaretComponent = styled.div<{ show: boolean }>`
  position: absolute;
  height: 26rem;
  width: 12rem;
  background-color: #000;
  right: 4rem;
  top: 4rem;
  opacity: 0;
  border: 1px solid #333;
  transform: scaleY(0);
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;

  svg {
    color: #fff;
  }

  ${({ show }) =>
    show &&
    `
    opacity: 1;
    transform: scaleY(1);
  `}

  ul {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin-top: 14px;
  }
  li {
    display: flex;
    flex-direction: row;
    justify-content: initial;
    align-items: center;
    margin: 2px 0;
    width: 100%;
    gap: 1rem;
    cursor: pointer;

    img {
      margin-left: 20px;
      border-radius: 4px;
    }

    svg {
      margin-left: 20px;
      font-size: 1.2rem;
    }
  }

  hr {
    width: 100%;
    border: 0.01px solid #333;
    position: absolute;
    bottom: 2.7rem;
  }

  .logout {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
`;

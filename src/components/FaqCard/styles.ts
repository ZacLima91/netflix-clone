import styled from "styled-components";

export const FaqComponent = styled.section<{ open: boolean }>`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 3rem 0;

  .container-faq {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
  }

  ul {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 0.7rem;
  }

  li {
    width: 60%;
    list-style-type: none;
  }

  svg {
    position: absolute;
    color: #fff !important;
    right: 1rem;
    font-size: 2.5rem;
    top: 6px;
    transition: transform 0.5s ease-in-out;
  }

  .rotate-icon {
    transform: rotate(45deg);
  }
  h1 {
    margin-bottom: 2rem;
    font-size: 3rem;
  }

  button {
    background: #303030;
    display: block;
    text-align: left;
    border: 0;
    font-weight: 400;
    margin-bottom: 1px;
    padding: 1em 4em;
    position: relative;
    width: 100%;
    color: #fff;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
  }

  .faq-answer {
    background: #303030;
    padding: 3rem;
    transform: ${({ open }) =>
      open ? 'translateY(0)' : 'translateY(-100%)'};
    animation-name: ${({ open }) => (open ? 'slideIn' : 'slideOut')};
    animation-duration: 0.3s;
    animation-timing-function: ease;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  @keyframes slideIn {
    from {
      transform: translateY(-10%);
    }
    to {
      transform: translateY(0);
    }
  }

  @keyframes slideOut {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(-10%);
    }
  }
`;

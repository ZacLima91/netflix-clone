import styled from "styled-components";

export const FooterComponent = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 4rem;
  font-size: 0.8rem;


  .container-footer {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 70%;
    color: #ccc;
    margin-bottom: 2rem;
  }

  h3{
    font-size: 1rem;
  }

  ul {
    list-style-type: none;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    color: #ccc;
  }

  li {
    margin: 0.4rem 0;
    color: #ccc;
  }

  a {
    color: #ccc;
    text-decoration: none;
  }

  svg{
    color: #ccc;
  }

  select {
    padding: 0.4rem 1rem;
    background: transparent;
    color: #ccc;
    border-radius: 2px;
    border: solid 1px #ccc;;
  }

  option {
    background-color: grey;
  }
`;

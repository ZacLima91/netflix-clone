import styled from "styled-components";

export const BrowserHeaderComponents = styled.header<{bg: string}>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: ${(props)=> props.bg};
  display: flex;
  gap: 3rem;
  align-items: center;

  z-index: 999999;
   img{
    margin-left: 4rem;
   }

   nav{
    font-size: .8rem;
    font-weight: 600;
   }
`;
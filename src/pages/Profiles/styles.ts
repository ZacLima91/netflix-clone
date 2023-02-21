import styled from "styled-components";

export const ComponentsProfiles = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentProfiles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  gap: 2rem;
`;

export const ContainerAvatar = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export const ContentAvatar = styled.div<{ bg: string }>`
  width: 100px;
  height: 100px;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  display: flex;
  flex-direction: row;
`;

export const CardProfile = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;
   justify-content: center;
    align-items: center;
    gap: 1rem;
   p{

   }
`
  



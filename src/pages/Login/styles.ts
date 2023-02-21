import styled from "styled-components";

export const LoginComponents = styled.div`
  width: 100%;
  background-image: url("https://assets.nflxext.com/ffe/siteui/vlv3/83e8c151-107d-4e8f-b95a-d2ba99d49bb9/f07b57b2-2932-42ad-adda-058c4499f034/BR-pt-20230213-popsignuptwoweeks-perspective_alpha_website_small.jpg");
  background-size: cover;
`;

export const LoginCard = styled.div`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const ContainerLogin = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContentLogin = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 25rem;
  margin-bottom: 4rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin: 3rem 0;
  }
`;

export const FormsInputs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 80%;
`;

export const Input = styled.input<{ isFocused: boolean }>`
  font-size: 16px;
  padding: 16px;
  border: none;
  border-bottom: 1px solid ${(props) => (props.isFocused ? "#333" : "#ccc")};
  outline: none;
  transition: border-bottom-color 0.2s ease-in-out;
  border-radius: 4px;
  background-color: #333;
  border: none;
  width: 100%;
  color: #ccc;
`;

export const Placeholder = styled.label<{
  isFocused: boolean;
  hasValue: boolean;
}>`
  position: absolute;
  top: ${(props) => (props.isFocused || props.hasValue ? "0" : "50%")};
  left: 10px;
  transform: ${(props) =>
    props.isFocused || props.hasValue
      ? "translateY(-10%) scale(0.75)"
      : "translateY(-50%)"};
  color: ${(props) => (props.isFocused ? "#ccc" : "#ccc")};
  font-size: ${(props) =>
    props.isFocused || props.hasValue ? "14px" : "16px"};
  font-weight: ${(props) =>
    props.isFocused || props.hasValue ? "bold" : "normal"};
  pointer-events: none;
  transition: all 0.2s ease-in-out;
`;

export const Button = styled.button`
 
  background-color: red;
  font-weight: 600;
  color: #fff;
  border: none;
  border-radius: 4px;
  width: 80%;
  height: 2rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  text-align: center;

  &:active {
    background-color: #222;
  }

  a{
    width: 100%;
    height: 100%;
    font-size: 16px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const LoginFormHelp = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
  font-size: 0.8rem;

  span{
    font-size: .7rem;
  }
`;

import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/netflix-logo.svg";
import { Checkbox } from "../../components/CheckBox";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { HeaderLogin } from "../../components/HeaderLogin";
import {
  ContainerLogin,
  LoginComponents,
  Input,
  InputWrapper,
  Placeholder,
  ContentLogin,
  LoginCard,
  Button,
  LoginFormHelp,
  FormsInputs,
} from "./styles";

export const Login = () => {
  const [loginValue, setLoginValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [focusedInput, setFocusedInput] = useState("");

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginValue(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(e.target.value);
  };

  const handleInputFocus = (inputName: string) => {
    setFocusedInput(inputName);
  };

  const handleInputBlur = () => {
    setFocusedInput("");
  };
  
  return (
    <>
      <LoginComponents>
        <LoginCard>
          <HeaderLogin />
          <ContainerLogin>
            <ContentLogin>
              <h1>Entrar</h1>
              <FormsInputs>
                <InputWrapper>
                  <Input
                    type="text"
                    value={loginValue}
                    onChange={handleLoginChange}
                    isFocused={focusedInput === "login"}
                    onFocus={() => handleInputFocus("login")}
                    onBlur={handleInputBlur}
                    required
                  />
                  <Placeholder
                    isFocused={focusedInput === "login"}
                    hasValue={loginValue.length > 0}
                  >
                    Email ou número de telefone
                  </Placeholder>
                </InputWrapper>
                <InputWrapper>
                  <Input
                    type="password"
                    value={passwordValue}
                    onChange={handlePasswordChange}
                    isFocused={focusedInput === "password"}
                    onFocus={() => handleInputFocus("password")}
                    onBlur={handleInputBlur}
                    required
                  />
                  <Placeholder
                    isFocused={focusedInput === "password"}
                    hasValue={passwordValue.length > 0}
                  >
                    Senha
                  </Placeholder>
                </InputWrapper>
              </FormsInputs>
              <Button>
                <Link to="/profiles">Entrar</Link>
              </Button>
              <LoginFormHelp>
                <Checkbox
                  checked={false}
                  onChange={function (checked: boolean): void {
                    throw new Error("Function not implemented.");
                  }}
                  label="Lembre-se de mim"
                />
                <Link to="/loginHelper">Precisa de ajuda?</Link>
              </LoginFormHelp>
            </ContentLogin>
          </ContainerLogin>
          <Footer />
        </LoginCard>
      </LoginComponents>
    </>
  );
};

import { createGlobalStyle, DefaultTheme, ThemeProps } from "styled-components";

const colors = {
  lightPrimary: "#D9D9D9",
  lightSecondary: "#8C8C8C",
  middle: "#595959",
  darkPrimary: "#000000",
  darkSecondary: "#404040",
};

export const theme = {
  lightTheme: {
    bg: colors.lightPrimary,
    fg: colors.darkPrimary,
  },
  darkTheme: {
    bg: colors.darkPrimary,
    fg: colors.lightPrimary,
  },
};

export interface Theme {
  bg: string;
  fg: string;
}

export const GlobalStyle = createGlobalStyle<ThemeProps<Theme>>`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    html, #root, body {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: var(--vh, 100vh);
        background-color: ${(props) => props.theme.darkTheme.bg};
        color: #fff;
        font-family: 'Montserrat', sans-serif;
    }

    a{
      text-decoration: none;
      color: #fff;
      font-size: .7rem;
    }

    @font-face {
      font-family: 'Montserrat', sans-serif;
      src: url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;900&display=swap");
    }
`;

import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body,
  html {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-x: hidden;
    font-family: ${({ theme }) => theme.font.family.lato};
    font-size: ${({ theme }) => theme.font.size.body[1].desk};
    line-height: ${({ theme }) => theme.font.lineHeight.body[1].desk};
  }
  * {
    text-decoration: none;
    list-style: none;
  }
  ul {
    padding: 0;
  }
  p {
    color: ${({ theme }) => theme.color.text.primary};
  }
  a {
    list-style: none;
    text-decoration: none;
    color: ${({ theme }) => theme.color.text.primary};
  }
  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

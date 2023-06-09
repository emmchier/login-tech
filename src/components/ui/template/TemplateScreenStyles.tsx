import styled from 'styled-components';

export const TemplateContent = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  padding-left: ${({ theme }) => theme.spacing(40)};
  position: relative;

  h2 {
    margin-bottom: ${({ theme }) => theme.spacing(8)};
  }

  @media only screen and (${({ theme }) => theme.breakpoints.tablet}) {
    padding-left: ${({ theme }) => theme.spacing(15)};
  }

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0;

    h2 {
      margin-bottom: ${({ theme }) => theme.spacing(6)};
    }
  }
`;

export const FormContainer = styled.div`
  height: auto;
`;

export const Info = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  height: 100vh;

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    height: auto;
    padding: 0 ${({ theme }) => theme.spacing(6)} ${({ theme }) => theme.spacing(6)};
    background: ${({ theme }) => theme.color.white};
  }
`;

export const PanelHeader = styled.div`
  display: none;

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    display: block;
    position: absolute;
    bottom: 0;
    z-index: 3;
    height: 30px;
    width: 100%;
    background: ${({ theme }) => theme.color.white};
    border-radius: ${({ theme }) => theme.border.radius.large.mob}
      ${({ theme }) => theme.border.radius.large.mob} 0 0;
    border-radius: ${({ theme }) => theme.border.radius.large.mob}
      ${({ theme }) => theme.border.radius.large.mob} 0 0;
    box-shadow: ${({ theme }) => theme.elevation.main.light};
  }
`;

export const BannerContainer = styled.div`
  position: relative;
  overflow: hidden;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    height: 35vh;
    span {
      height: auto !important;
    }
    position: relative;
    z-index: 0;
  }
`;

export const BannerImage = styled.div`
  background: transparent;
  position: relative;
  z-index: 1;

  @media only screen and (${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 ${({ theme }) => theme.spacing(10)};
  }

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0 ${({ theme }) => theme.spacing(15)};
    margin-bottom: ${({ theme }) => theme.spacing(10)};
  }
`;

export const Background = styled.div`
  width: 65%;
  height: 100%;
  position: absolute;
  right: 0;
  background: ${({ theme }) => theme.color.primary.background};
  border-radius: ${({ theme }) => theme.border.radius.large.desk} 0 0;

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    height: 65%;
    bottom: 0;
    border-bottom: 1px solid ${({ theme }) => theme.color.white};
    border-radius: ${({ theme }) => theme.border.radius.large.mob}
      ${({ theme }) => theme.border.radius.large.mob} 0 0;
  }
`;

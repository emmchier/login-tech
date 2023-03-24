import styled from 'styled-components';

interface SectionContentTypes {
  auto?: boolean;
  color?: string;
  padding?: string;
}

const SectionContent = styled.section<SectionContentTypes>`
  height: ${({ auto }) => (auto === true ? 'auto' : '100vh')};
  width: 100%;
  ${({ padding }) => `padding${padding}` || `:0`};
  margin: 0;

  @media only screen and (${({ theme }) => theme.breakpoints.mobile}) {
    height: auto !important;
  }
`;

export default SectionContent;

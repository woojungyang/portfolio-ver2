import styled, { color, font, media } from '../../style';

export const SKillContainer = styled.div`
  font-family: ${font.en};
  color: ${color.black};
  height: 100vh;
  width: 100%;
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
  padding: 5em 1.5em;
  background: ${({ lightBg }) => (lightBg ? `white` : `white`)};
  @media ${media.sm} {
    height: 950px;
  }
`;

export const Heading = styled.h1`
  margin-bottom: 1.5em;
  font-size: 3em;
  line-height: 1.1;
  font-weight: 500;
  text-align: center;
  color: ${({ lightText }) => (lightText ? `#fcfcfc` : `#000`)};
  @media ${media.xs} {
    font-size: 2em;
  }
`;
export const SkillWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media ${media.sm} {
    font-size: 1em;
    padding: 0 1em;
    flex-wrap: wrap;
  }
`;
export const Subtitle = styled.p`
  font-weight: 400;
  margin: 0 20px;
  font-size: 20px;
  line-height: 30px;
  width: 180px;
  color: ${({ darkText }) => (darkText ? `#000` : `#000`)};
  @media ${media.sm} {
    font-size: 1em;
  }
`;

export const Progress = styled.div`
  background-color: ${color.light};
  border-radius: 20px;
  position: relative;
  margin: 15px 0;
  height: 30px;
  width: 980px;
  @media ${media.sm} {
    height: 20px;
  }
`;

export const Progressdone = styled.div`
  background: linear-gradient(to left, #f9a66c, #ffc94b);
  box-shadow: 0 3px 3px -5px #f9a66c, 0 2px 5px #f9a66c;
  border-radius: 20px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 0;
  opacity: 0;
  transition: 1s ease 0.3s;
  @media ${media.sm} {
    font-size: 0.8em;
  }
`;

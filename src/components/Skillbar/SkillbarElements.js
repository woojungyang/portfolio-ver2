import styled, { color, font, media } from '../../style';

export const SKillContainer = styled.div`
  border: 10px soild red;
  font-family: ${font.en};
  height: 950px;
  width: 100%;
  background: ${({ lightBg }) => (lightBg ? `white` : `white`)};

  @media ${media.md} {
    padding: 0 1em;
  }
  @media ${media.sm} {
    padding: 100px 0;
    height: 1000px;
  }
`;
export const SKillWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  /* display: flex;
  flex-wrap: wrap; */
`;
export const Heading = styled.h1`
  font-family: ${font.en};
  text-align: center;
  font-size: 3em;
  padding-top: 180px;
  color: ${color.black};
  margin-bottom: 1.5em;
  font-weight: 500;
  @media ${media.md} {
    padding-top: 170px;
  }
  @media ${media.sm} {
    margin-bottom: 1em 0;
    padding-top: 0px;
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
  height: 100%;
  width: 0;
  opacity: 0;
  transition: 1s ease 0.3s;
  border-radius: 20px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${media.sm} {
    font-size: 0.8em;
  }
`;

import styled, { color, font, media } from '../../style';

export const InfoContainer = styled.div`
  font-family: ${font.en};
  color: ${color.black};

  background: ${({ lightBg }) => (lightBg ? `black` : `white`)};
`;

export const InfoWrapper = styled.div`
  display: grid;
  height: 800px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 185px;
  justify-content: center;
  align-items: center;
  @media ${media.sm} {
    padding-left: 0px;
  }
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media ${media.sm} {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1' 'col2'`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 20px;
  grid-area: col1;
`;
export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
  text-align: center;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0px;
`;

export const TopLine = styled.p`
  color: ${color.success};
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 2em;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 2.5em;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? `#fcfcfc` : `#000`)};
  @media ${media.xs} {
    font-size: 2em;
  }
`;

export const Subtitle = styled.p`
  font-family: ${font.kr};
  max-width: 450px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 30px;
  color: ${({ darkText }) => (darkText ? `#fcfcfc` : `#000`)};
`;
export const Info = styled.p`
  font-family: ${font.en};
  max-width: 450px;
  margin-bottom: 0.5em;
  font-size: 15px;
  color: ${({ darkText }) => (darkText ? `#fcfcfc` : `#000`)};
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 321px;
  max-height: 321px;
  height: 100%;
  @media ${media.sm} {
    margin: 0 auto;
  }
`;

export const Img = styled.img`
  width: 100%;
`;

import styled, { color, font, media } from '../../style';

export const InfoContainer = styled.div`
  font-family: ${font.en};
  color: ${color.black};
  background: ${({ lightBg }) => (lightBg ? `white` : `#000`)};
  @media ${media.sm} {
    padding: 100px 0;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media ${media.sm} {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1'  'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;
export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0px;
  padding-bottom: 60px;
`;

export const TopLine = styled.p`
  color: ${color.secondary};
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
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
  color: ${({ darkText }) => (darkText ? `#000` : `#fff`)};
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 400px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 30px 0;
  padding-right: 0;
`;

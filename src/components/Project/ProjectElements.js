import styled, { color, font, media } from '../../style';

export const PorjectContainer = styled.div`
  border: 1px solid red;
  font-family: ${font.en};
  height: 100vh;
  /* display: flex; */
  flex-direction: column;
  justify-content: center;
  background: ${color.light};
  @media ${media.sm} {
    margin: 250px 0;

    height: 100vh;
  }
  @media ${media.xs} {
    height: 100vh;
  }
`;

export const ProjectWrapper = styled.div`
  border: 1px solid red;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media ${media.md} {
    grid-template-columns: 1fr 1fr;
  }
  @media ${media.sm} {
    grid-template-columns: 1fr;
  }
`;

export const ProjectCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: cneter;
  border-radius: 10px;

  min-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const ProjectIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const ProjectH1 = styled.h1`
  text-align: center;
  font-size: 3em;
  color: ${color.dark};
  margin-bottom: 64px;
  margin-top: 100px;

  font-weight: 500;
`;

export const ProjectH2 = styled.h2`
  color: red;
  font-size: 1.2em;
  margin-bottom: 10px;
  font-weight: 500;
`;

export const ProjectP = styled.p`
  font-size: 1em;
  line-height: 1.2;
`;

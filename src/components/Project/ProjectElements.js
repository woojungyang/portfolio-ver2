import styled, { color, font, media } from '../../style';
import { Link as LinkR } from 'react-router-dom';

export const PorjectContainer = styled.div`
  padding: 100px 0;
  font-family: ${font.en};
  height: 100vh;
  /* display: flex; */
  flex-direction: column;
  justify-content: center;
  background: ${color.light};
  @media ${media.sm} {
    padding: 100px 0;
    height: 1800px;
    margin: 250px 0;
  }
`;

export const ProjectWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  /* display: flex;
  flex-wrap: wrap; */
  justify-content: center;
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 16px;
  top: 0;
  left: 0;
  position: relative;
  height: auto;

  @media ${media.sm} {
    grid-template-columns: 1fr;
  }
`;

export const ProjectIcon = styled.div`
  height: 240px;
  width: 100%;
  border: 1px solid red;
  margin-bottom: 5px;
  @media ${media.sm} {
    height: 200px;
  }
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`;
export const ProjectH1 = styled.h1`
  font-family: ${font.en};
  text-align: center;
  font-size: 3em;

  color: ${color.dark};
  margin-bottom: 64px;

  font-weight: 500;
`;

export const ProjectH2 = styled.h2`
  font-family: ${font.en};
  margin-top: 1.5em;
  text-align: center;
  font-weight: bolder;
  font-size: 1.375em;
  margin-bottom: 10px;
  font-weight: 500;
`;
export const ProjectH3 = styled.h3`
  font-family: ${font.kr};
  line-height: 180%;
  margin-top: 1.5em;
  font-weight: 500;
  text-align: center;
  font-size: 1.25em;
  margin-bottom: 2em;
`;

export const ProjectP = styled.p`
  text-align: center;
  font-family: ${font.kr};
  font-size: 1em;

  line-height: 180%;
  margin-bottom: 1em;
  display: inline;
  h4 {
    margin-top: 0.5em;
    font-size: 1em;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  position: absolute;
  top: 0;
  left: 0;
  width: 101%;
  height: 370px;
  background: none;
  @media ${media.md} {
    padding: 1.5em;
  }
  @media ${media.sm} {
    height: 420px;
  }
`;
export const TheCard = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 24%;
  height: 100%;
  margin-right: 1%;
  border-radius: 10px;
  transform-style: preserve-3d;
  transition: all 0.8s ease;
  &:hover {
    transform: rotateY(180deg);
  }
  @media ${media.md} {
    width: 48%;
    margin: 2em 0;
  }
  @media ${media.sm} {
    width: 100%;
  }
`;
export const FrontCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: cneter;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  backface-visibility: hidden;
  overflow: hidden;
  background: white;
  color: #000;
`;
export const BackCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  backface-visibility: hidden;
  overflow: hidden;
  background-color: white;
  color: #333;
  text-align: center;
  transform: rotateY(180deg);
  line-height: 180%;
`;

export const SideBtnWrap = styled.div`
  max-width: 50px;
`;
export const SidebarRoute = styled(LinkR)`
  width: 150px;
  height: 80px;
  margin: 0.5em 0;
  border-radius: 50px;
  text-align: center;
  background: ${color.success};
  padding: 0.5em 2em;
  color: ${color.dark};
  font-size: 1em;
  border: none;
  cursor: pointer;
  transition: 0.2s all ease-in-out;
  text-decoration: none;
  &:hover {
    background: #fff;
    transition: 0.2s all ease-in-out;
    color: black;
  }
`;
export const NavBtn = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1.5em;
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: ${color.success};
  white-space: nowrap;
  padding: 10px 95px;

  color: ${color.white};
  font-size: 1em;
  outline: none;
  border: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  :nth-child(1) {
    margin-bottom: 1em;
  }
  &:hover {
    transition: 0.2s ease-in-out;
    background: ${color.light};
    color: ${color.dark};
  }
`;

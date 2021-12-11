import styled, { color, font, media } from '../../style';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
  background-color: ${color.black};
  font-family: ${font.en};
  text-align: center;
`;

export const FooterWrap = styled.div`
  padding: 2em 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  max-width: 1200px;
  height: 50px;
  margin: 0 auto;
`;

export const SocialMediaWrap = styled.div``;

export const SocialLogo = styled(Link)`
  color: ${color.light};
  text-align: center;
  cursor: pointer;
  margin-right: 1em;
  text-decoration: none;
  font-size: 1em;

  font-weight: bold;
`;

export const WebsiteRights = styled.small`
  color: ${color.light};
`;

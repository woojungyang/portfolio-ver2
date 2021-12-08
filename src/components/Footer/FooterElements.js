import styled, { color, font, media } from '../../style';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
  background-color: ${color.dark};
  text-align: center;
`;

export const FooterWrap = styled.div`
  padding: 48px 24px;

  max-width: 1200px;
  margin: 0 auto;
`;

export const SocialMediaWrap = styled.div`
  max-width: 1200px;
  margin: 40px auto 0 auto;
`;

export const SocialLogo = styled(Link)`
  border: 1px solid red;
  color: ${color.light};
  text-align: center;
  cursor: pointer;
  margin-right: 5em;
  text-decoration: none;
  font-size: 1.5em;

  margin-bottom: 16px;
  font-weight: bold;
`;

export const WebsiteRights = styled.small`
  color: ${color.light};
  margin-bottom: 16px;
`;

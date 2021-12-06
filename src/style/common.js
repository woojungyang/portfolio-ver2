// import styled from '@emotion/styled';

export const Underline = styled.div`
  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background-color: ${(props) => props.color};
    transition: all 0.5s;
    transform: scaleX(0);
    transform-origin: left center;
  }
  &:hover {
    &:after {
      transform: scaleX(1);
    }
  }
`;

import styled from "styled-components";

export const HeaderStyle = styled.header`
  width: 100%;
  height: 87px;
  background-color: #252525;
`;

export const NavStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  margin: 0 55px;
  
  @media screen and (max-width: 823px) {
    justify-content: center;
  }
`;

export const Name = styled.p`
  background: linear-gradient(
    90deg,
    #b72b56 6.08%,
    #e66b23 37.81%,
    #b72b56 58.21%,
    #e28117 88.64%,
    #dd4f3e 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
  font-size: 32px;
  white-space: nowrap;

`;

export const UlStyle = styled.ul`
  display: flex;
  column-gap: 30px;
  list-style: none;

  li {
    color: #b3b3b3;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
  }
  @media screen and (max-width: 823px) {
    display: none;
  }
`;

import styled from "styled-components";

const StyledLogo = styled.div`
  height: 19rem;
  width: 19rem;
  position: relative;
  top: -4rem;
  margin: 1.2rem auto;
  text-align: center;
  & img {
    width: 100%;
  }
`;

function Logo() {
  return (
    <StyledLogo>
      <img src="/ronefyxLogo/RONEFYX.svg" alt="Logo ronefyx" />
    </StyledLogo>
  );
}
export default Logo;

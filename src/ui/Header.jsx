import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: var(--color-grey-1);
  padding: 1.2rem 5rem;
  border-bottom: 1px solid var(--color-grey-5);
`;

function Header() {
  return <StyledHeader>HEADER</StyledHeader>;
}
export default Header;

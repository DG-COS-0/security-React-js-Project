import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";

const StyledSideBar = styled.aside`
  background-color: var(--color-grey-1);
  border-right: 1px solid var(--color-grey-4);
  padding: 2.4rem 1.6rem;
  grid-row: 1 / -1;
`;
function SideBar() {
  return (
    <StyledSideBar>
      <Logo />
      <MainNav />
    </StyledSideBar>
  );
}
export default SideBar;

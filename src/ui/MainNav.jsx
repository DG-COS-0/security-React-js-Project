import { NavLink } from "react-router-dom";
import {
  LuHome,
  LuCalendarClock,
  LuCar,
  LuUser,
  LuMap,
  LuSettings,
} from "react-icons/lu";
import styled from "styled-components";
const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  list-style: none;
  text-decoration: none;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    text-decoration: none;
    color: var(--color-grey-7);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-7);
    background-color: var(--color-orange-2);
    border-radius: var(--border-radius-1);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-5);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-orange-5);
  }
`;
function MainNav() {
  return (
    <nav>
      <NavList>
        <li>
          <StyledNavLink to="/dashboard">
            <LuHome />
            Home
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/bookings">
            <LuCalendarClock />
            Reservations
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/cars">
            <LuCar />
            Cars
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/users">
            <LuUser />
            Utilisateurs
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/map">
            <LuMap />
            Map
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/settings">
            <LuSettings />
            Parametres
          </StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
}
export default MainNav;

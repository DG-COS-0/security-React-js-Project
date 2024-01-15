import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";
import styled from "styled-components";

const StyledMain = styled.main`
  background-color: var(--color-grey-3);
  padding: 4rem 4.6rem 6.8rem;
`;
const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 98dvh;
  border: 1px solid var(--color-grey-5);
  border-radius: var(--border-radius-1);
  overflow: hidden;
`;
export default function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <SideBar />
      <StyledMain>
        <Outlet />
      </StyledMain>
    </StyledAppLayout>
  );
}

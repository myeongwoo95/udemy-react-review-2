import React from "react";
import styled from "styled-components";
import MainNavigation from "./MainNavigation";

const Main = styled.div`
  margin: 3rem auto;
  width: 90%;
  max-width: 40rem;
`;

const Layout = (props) => {
  return (
    <div>
      <MainNavigation />
      <Main>{props.children}</Main>
    </div>
  );
};

export default Layout;

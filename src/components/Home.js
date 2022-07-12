import React, { useEffect } from "react";
import styled from "styled-components";
import Header from "./Header";
import ImgSlider from "./ImgSlider";
import Movies from "./Movies";
import Viewers from "./Viewers";

const Home = () => {
  return (
    <Container>
      <Nav>
        <Header />
      </Nav>
      <ImgSlider />
      <Viewers />
      <Movies />
    </Container>
  );
};

export default Home;
const Nav = styled.div``;
const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;

  &:before {
    background: url("/Disney-Sources/images/home-background.png") center center /
      cover no-repeat fixed;

    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;

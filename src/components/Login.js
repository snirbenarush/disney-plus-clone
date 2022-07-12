import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import DisneyLogo from "../Disney-Sources/images/logo.svg";
// import ctaLogo1 from "../Disney-Sources/images/cta-logo-one.svg";
// import ctaLogo2 from "../Disney-Sources/images/cta-logo-two.svg";
const Login = () => {
  return (
    <Container>
      <Nav>
        <Logo src={DisneyLogo} />
      </Nav>
      <Content>
        <Logo2 src={DisneyLogo} />
        <Slogan>+ More than you'd ever imagine</Slogan>
        <SignUp>
          <Link to="/home" style={{ textDecoration: "none" }}>
            <p>GET STARTED NOW </p>
          </Link>
        </SignUp>
        <Description>
          ​Get Premier Access to Raya and the Last Dragon for an additional fee
          with a Disney+ subscription. As of 06/26/22, the price of Disney+ and
          The Disney Bundle will increase by $1.
        </Description>
        {/* <LogoTwo src={ctaLogo2} /> */}
      </Content>
    </Container>
  );
};

export default Login;
const Nav = styled.div`
  position: absolute;
  width: 100%;
  display: block;
  height: 70px;
  background: #090b13;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;
  display: flex;
`;
const Logo = styled.img`
  width: 80px;
  margin-left: 58px;
`;
const Logo2 = styled.img`
  position: absolute;
  width: 220px;
  height: 121px;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const Slogan = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const Container = styled.div`
  //   position: relative;
  display: flex;
  align-items: top;
  justify-content: center;
  height: calc(100vh-70px);

  &:before {
    background-image: url("https://img.hotstar.com/image/upload/v1655288860/feature/onboarding/IL_landing_page_bg_web.jpg");
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    opacity: 0.4;
  }
`;
const Content = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  width: 90%;
  display: flex;
  flex-direction: column;
  padding-top: 30vh;
`;
const LogoOne = styled.img``;
const SignUp = styled.button`
  width: 100%;
  background: linear-gradient(93.87deg, #095ae6, #062794);
  font-weight: bold;
  padding: 4px 0px;
  border-radius: 6px;
  border: none;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
  transition: all 250ms;
  letter-spacing: 1.5px;
  margin: 30vh 0 12px 0;

  &:hover {
    background: #0483ee;
  }
  p {
    color: #f9f9f9;
  }
`;
const Description = styled.p`
  font-size: 12px;
  letter-spacing: 1.5px;
  text-align: center;
  line-height: 1.5;
`;
const LogoTwo = styled.img`
  padding: 16px 16px;
`;

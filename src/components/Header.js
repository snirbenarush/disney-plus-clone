import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import DisneyLogo from "../Disney-Sources/images/logo.svg";
import SearchLogo from "../Disney-Sources/images/search-icon.svg";
import WatchLogo from "../Disney-Sources/images/watchlist-icon.svg";
import OriginalLogo from "../Disney-Sources/images/original-icon.svg";
import MovieLogo from "../Disney-Sources/images/movie-icon.svg";
import SeriesLogo from "../Disney-Sources/images/series-icon.svg";
import HomeLogo from "../Disney-Sources/images/home-icon.svg";

const Header = () => {
  return (
    <Nav>
      <Logo src={DisneyLogo} />
      <NavMenu>
        <a>
          <img src={HomeLogo} />
          <span>
            <Link to="/home">HOME</Link>
          </span>
        </a>
        <a>
          <img src={SearchLogo} />
          <span>SEARCH</span>
        </a>
        <a>
          <img src={WatchLogo} />
          <span>watchlist</span>
        </a>
        <a>
          <img src={OriginalLogo} />
          <span>ORIGINALS</span>
        </a>
        <a>
          <img src={MovieLogo} />
          <span>MOVIES</span>
        </a>
        <a>
          <img src={SeriesLogo} />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <UserOut>
        <Link
          to="/"
          style={{ textDecoration: "none", color: "rgb(249,249,249)" }}
        >
          LOGOUT
        </Link>
      </UserOut>
    </Nav>
  );
};

export default Header;

const Nav = styled.div`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;
  min-width: 100vw;
`;
const Logo = styled.img`
  width: 80px;
`;
const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;
  cursor: pointer;

  a {
    display: flex;
    align-items: center;
    color: white;
    padding: 0 12px;
    text-decoration: none;
    img {
      width: 20px;
    }
    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;
      &:after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
    }
    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;
const UserOut = styled.button`
  width: 96px;
  color: rgb(248, 248, 248);
  height: 48px;
  border-radius: 4px;
  letter-spacing: 1.5px;
  background-color: rgba(0, 0, 0, 0.6);
  border: 1px solid #f9f9f9;
  cursor: pointer;
  margin-right: 60px;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    font-size: 15px;
    border-color: transparent;
  }
`;

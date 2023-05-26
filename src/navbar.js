import React, { useState } from "react";
import styled from "styled-components";
import logo from "./logo1.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import { scroller } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import "./App.css";

export default function Navbar() {
    const scrollTo = (id) => {
        scroller.scrollTo(id, {
          duration: 800,
          delay: -2,
          smooth: "easeInOutQuart",
        });
      };

  const [navbarState, setNavbarState] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleProfile = () => {
    
  };

  const handleLogout = () => {
    
  };
  return (
    <>
      <Nav>
        <div className="flex border-b-2  border-sky-400 items-center justify-between flex-wrap p-2 navbar bg-gradient-to-r from-zinc-900  via-indigo-950 to-zinc-900">
          <div className="logo-image">
            <img src={logo} alt="" className=" mx-auto b-block" />
            
          </div>
          <div className="">
            {navbarState ? (
              <VscChromeClose onClick={() => setNavbarState(false)} style={{}}/>
            ) : (
              <GiHamburgerMenu onClick={() => setNavbarState(true)} style={{color:"white"}}/>
            )}
          </div>
        </div>

        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#services">About</a>
          </li>
          <li>
            <a href="#recommend">Places</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
        </ul>
        <button>Connect</button>
      </Nav>
      <ResponsiveNav state={navbarState}>
        <ul>
        <li className="pr-8  pt-4 ">
              <a
                href="#card"
                className="hov under size"
                onClick={() => scrollTo("card")}
              >
                Events
              </a>
            </li>
            <li className=" ">
              <a
                href="/team"
                className="hov under size"
              
              >
                Team
              </a>
            </li>
            <li className="">
              <a
                href="/gallery"
                className="hov under size"
                
              >
                Gallery
              </a>
            </li>
            <li className="">
              <a
                href="#form"
                className="hov under size"
                onClick={() => scrollTo("form")}
              >
                Contact
              </a>
            </li>
            <li className="  rounded relative">
            <a href="#" className="hov under size icon-color " onClick={toggleDropdown}>
              Profile<FontAwesomeIcon icon={faCaretDown} className="ms-1 icon-color" />
            </a>
            {showDropdown && (
              <div className="absolute pbar  bg-indigo-900  text-white  rounded-lg  ">
                <ul className="rounded-lg">
                 
                    <button className=" w-full   hover:text-zinc-300 hover:rounded-lg hover:border border-b" onClick={handleProfile}>
                      View Profile
                    </button>
                 
                    <button className="w-full hover:text-zinc-300 hover:rounded-lg hover:border border-t" onClick={handleLogout}>
                      Logout
                    </button>
                  
                  </ul>
                  </div>
            )}
                  </li>
        </ul>
      </ResponsiveNav>
    </>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .brand {
    .container {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.4rem;
      font-size: 1.2rem;
      font-weight: 900;
      text-transform: uppercase;
    }
    .toggle {
      display: none;
    }
  }
  ul {
    display: flex;
    gap: 1rem;
    list-style-type: none;
    li {
      a {
        text-decoration: none;
        color: #0077b6;
        font-size: 1.2rem;
        transition: 0.1s ease-in-out;
        &:hover {
          color: #023e8a;
        }
      }
      &:first-of-type {
        a {
          color: #023e8a;
          font-weight: 900;
        }
      }
    }
  }
  button {
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-radius: 1rem;
    border: none;
    color: white;
    background-color: #48cae4;
    font-size: 1.1rem;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    transition: 0.3s ease-in-out;
    &:hover {
      background-color: #023e8a;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .brand {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      .toggle {
        display: block;
      }
    }
    ul {
      display: none;
    }
    button {
      display: none;
    }
  }
`;

const ResponsiveNav = styled.div`
  display: flex;
  position: absolute;
  z-index: 1;
  top: ${({ state }) => (state ? "50px" : "-400px")};
  background-color: white;
  height: 30vh;
  width: 100%;
  align-items: center;
  transition: 0.3s ease-in-out;
  ul {
    list-style-type: none;
    width: 100%;
    li {
      width: 100%;
      margin: 1rem 0;
      margin-left: 2rem;

      a {
        text-decoration: none;
        color: #0077b6;
        font-size: 1.2rem;
        transition: 0.1s ease-in-out;
        &:hover {
          color: #023e8a;
        }
      }
      &:first-of-type {
        a {
          color: #023e8a;
          font-weight: 900;
        }
      }
    }
  }
`;

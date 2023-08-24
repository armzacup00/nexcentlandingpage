import styled from "styled-components";
import logo from "../assets/Logo.png";
import { BiMenu, BiX } from "react-icons/bi";
import { useState } from "react";

function Nav() {
  const [opMenu, setOpMenu] = useState(false);
  const opMenuHandle = () => setOpMenu(!opMenu);
  const closeMenuHandle = () => setOpMenu(false);
  return (
    <MainNav>
      <LogoNav>
        <img src={logo} alt="logo" />
      </LogoNav>
      {opMenu ? 
      (
        <TextNav_active>
        <button onClick={closeMenuHandle}>
          <BiX />
        </button>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Service</a>
        </li>
        <li>
          <a href="#">Feature</a>
        </li>
        <li>
          <a href="#">Product</a>
        </li>
        <li>
          <a href="#">Testimonial</a>
        </li>
        <li>
          <a href="#">FAQ</a>
        </li>
      </TextNav_active>
      ) 
      : 
      (
        <TextNav>
        <button onClick={closeMenuHandle}>
          <BiX />
        </button>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Service</a>
        </li>
        <li>
          <a href="#">Feature</a>
        </li>
        <li>
          <a href="#">Product</a>
        </li>
        <li>
          <a href="#">Testimonial</a>
        </li>
        <li>
          <a href="#">FAQ</a>
        </li>
      </TextNav>
      )}
      <MenuNav onClick={opMenuHandle}>
        <BiMenu fontSize={"2rem"} />
      </MenuNav>
    </MainNav>
  );
}

const MainNav = styled.nav`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const LogoNav = styled.div``;
const TextNav = styled.ul`
  display: flex;
  button {
    display: none;
  }
  li {
    margin: 0 1rem;
    list-style: none;
    a {
      color: #4D4D4D;
      text-decoration: none;
    }
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const TextNav_active = styled.ul `
@media screen and (max-width:768px) {
width: 95%;
height: 100dvh;
background-color: #fff;
    display: flex;
    text-align: center;
    flex-direction: column;
    position: absolute;
    top: 20px;
    :first-child{
        font-size: 2rem;
        background:none;
        border: none;
        text-align: end;
    }
    li{
        list-style: none;
        margin-top: 1rem;
    }
    a{
        color: #4D4D4D;
        text-decoration: none;
    }
}
`

const MenuNav = styled.button`
  border: none;
  background: none;
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export default Nav;

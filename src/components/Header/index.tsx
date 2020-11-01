import React, { useEffect, useState } from "react";

import { Container } from "./styles";
import logo from "../../assets/logo.png";
import { FiSearch, FiSend } from "react-icons/fi";
import { AiFillHome, AiOutlineHeart } from "react-icons/ai";
import { ImCompass2 } from "react-icons/im";

const avatar =
  "https://instagram.fpfb5-1.fna.fbcdn.net/v/t51.2885-19/s150x150/66395784_439797356611676_4373976148577615872_n.jpg?_nc_ht=instagram.fpfb5-1.fna.fbcdn.net&_nc_ohc=1nzpcPeGo-8AX8aTNic&oh=e352fca2043c5a3c743b512ef4535bf7&oe=5FC66DF1";

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = () => {
  return (
    <Container>
      <nav>
        <img src={logo} />
        <div className="input">
          <div className="input-container">
            <label>
              <FiSearch /> Pesquisar
            </label>
          </div>
        </div>

        <div className="icons">
          <AiFillHome size={25} />
          <FiSend size={25} />
          <ImCompass2 size={25} />
          <AiOutlineHeart size={25} />
          <img src={avatar} />
        </div>
      </nav>
    </Container>
  );
};

export default Header;

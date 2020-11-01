import React from "react";

import { FiSend } from "react-icons/fi";
import { AiFillHome, AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";

import { Header, Footer } from "./styles";

const avatar =
  "https://instagram.fpfb5-1.fna.fbcdn.net/v/t51.2885-19/s150x150/66395784_439797356611676_4373976148577615872_n.jpg?_nc_ht=instagram.fpfb5-1.fna.fbcdn.net&_nc_ohc=1nzpcPeGo-8AX8aTNic&oh=e352fca2043c5a3c743b512ef4535bf7&oe=5FC66DF1";

const img1 =
  "https://instagram.fpfb5-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/123128659_1832402620250164_8920961520954801742_n.jpg?_nc_ht=instagram.fpfb5-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=MdWYIRy-j1UAX_1EyJU&_nc_tp=24&oh=722964c40fa8fcca558435af9a19f6b7&oe=5FC90D44";

const avatar2 =
  "https://instagram.fpfb5-1.fna.fbcdn.net/v/t51.2885-19/s150x150/120818291_214751543336117_6925115707962237475_n.jpg?_nc_ht=instagram.fpfb5-1.fna.fbcdn.net&_nc_ohc=i89P2BTBzKMAX-Mdsrx&oh=93a01b2bd91a7102a2e4085418b67d8b&oe=5FC624E0";

interface MainPubProps {
  className?: string;
}

const MainPublications: React.FC<MainPubProps> = () => {
  return (
    <>
      <Header>
        <div>
          <img src={avatar2} />
          <div>
            <h5>fakenewsdofutebol</h5>
          </div>
        </div>
      </Header>
      <img
        style={{ maxWidth: "100%", border: "1px solid #dbdbdb" }}
        src={img1}
      />
      <Footer>
        <div className="icons">
          <AiOutlineHeart size={25} />
          <FaRegComment size={25} />
          <FiSend size={25} />
        </div>
        <div className="like">
          <img src={avatar} />
          <label>Curtido por __marcelo.silva_ e outras 1547 pessoas</label>
        </div>
        <div className="post">
          <label>fakenewsdofutebol Ta de mala pronta</label>
        </div>
        <div className="comment">
          <label>__marcelo.silva__ Otima contratação</label>
        </div>
        <div className="time">
          <label>HÁ 29 MINUTOS</label>
        </div>
        <div className="newComment">
          <input placeholder="Adicione um comentário..." type="text" />
          <button type="button">Publicar</button>
        </div>
      </Footer>
    </>
  );
};

export default MainPublications;

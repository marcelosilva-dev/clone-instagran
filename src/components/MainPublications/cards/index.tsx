import React from "react";

import { FiSend } from "react-icons/fi";
import { AiFillHome, AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";

import { Header, Footer } from "./styles";

interface MainPubProps {
  className?: string;
  avatar: any;
  username: string;
  numberoflikes: number;
  publicationMessage: string;
  comment: string;
  minutes: number;
  img: any;
}

const MainPublications: React.FC<MainPubProps> = (props: MainPubProps) => {
  return (
    <div>
      <Header>
        <div>
          <img src={props.avatar} />
          <div>
            <h5>{props.username}</h5>
          </div>
        </div>
      </Header>
      <img
        style={{ maxWidth: "100%", border: "1px solid #dbdbdb" }}
        src={props.img}
      />
      <Footer>
        <div className="icons">
          <AiOutlineHeart size={35} />
          <FaRegComment size={35} />
          <FiSend size={35} />
        </div>
        <div className="like">
          <img src={props.avatar} />
          <label>
            Curtido por __marcelo.silva_ e outras {props.numberoflikes} pessoas
          </label>
        </div>
        <div className="post">
          <label>
            {props.username} {props.publicationMessage}
          </label>
        </div>
        <div className="comment">
          <label>__marcelo.silva__ {props.comment}</label>
        </div>
        <div className="time">
          <label>HÁ {props.minutes} MINUTOS</label>
        </div>
        <div className="newComment">
          <input placeholder="Adicione um comentário..." type="text" />
          <button type="button">Publicar</button>
        </div>
      </Footer>
    </div>
  );
};

export default MainPublications;

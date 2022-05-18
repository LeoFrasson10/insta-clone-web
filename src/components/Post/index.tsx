import { Container } from "./styles";
import {
  FiMoreHorizontal,
  FiMessageCircle,
  FiSend,
  FiBookmark,
} from "react-icons/fi";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { FaBookmark } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";

export function Post() {
  return (
    <Container>
      <div className="header">
        <div className="user-info">
          <img
            src="https://avatars.githubusercontent.com/u/58645846?v=4"
            alt="leo"
          />
          <p>leo_frasson</p>
        </div>
        <FiMoreHorizontal />
      </div>
      <div className="images">
        <img
          src="https://avatars.githubusercontent.com/u/58645846?v=4"
          alt="leo"
        />
      </div>
      <div className="content">
        <div className="actions">
          <div className="interactions">
            <MdFavoriteBorder />
            <FiMessageCircle />
            <FiSend />
          </div>
          <FiBookmark />
        </div>
        <div className="likes">
          <a href="#" className="photo">
            <img
              src="https://avatars.githubusercontent.com/u/58645846?v=4"
              alt="leo"
            />
          </a>
          <p>
            Curtido por <a href="#">leo_frasson</a> e outras{" "}
            <a href="#">outras 10 pessoas</a>
          </p>
        </div>
        <div className="author">
          <p>
            <a href="#">leo_frasson</a>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Lorem ipsum dolor sit amet
            consectetur adipisicing elit.
          </p>
        </div>
        <div className="comments">
          <p>
            <a href="#">leo_frasson</a>
            lorem ipsum dolor sit amet consectetur adipisicing elit
          </p>
        </div>

        <p className="timestamp">Há 20 minutos</p>
      </div>
      <div className="form-comment">
        <HiOutlineEmojiHappy />
        <div className="input-comment">
          <input type="text" placeholder="Adicione um comentário..." />
        </div>
        <button type="submit">Publicar</button>
      </div>
    </Container>
  );
}

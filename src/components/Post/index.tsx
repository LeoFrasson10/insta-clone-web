import { Container } from "./styles";
import {
  FiMoreHorizontal,
  FiMessageCircle,
  FiSend,
  FiBookmark,
} from "react-icons/fi";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { FaBookmark } from "react-icons/fa";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { useTheme } from "styled-components";
import { useRef, useState } from "react";

export interface PostProps {
  id: number;
  username: string;
  userfullname: string;
  userimage: string;
  postimage: string;
  description: string;
  likes: number;
  isLike: boolean;
  isSave: boolean;
  comments: {
    id?: number;
    username: string;
    userfullname?: string;
    userimage?: string;
    comment: string;
  }[];
  datetime: string;
}

interface Props {
  post: PostProps;
  handleLike: (id: number) => void;
  handleSave: (id: number) => void;
  onSubmitComment: (id: number, comment: string) => void;
}

export function Post({ post, handleLike, handleSave, onSubmitComment }: Props) {
  const theme = useTheme();
  const inputCommentRef = useRef<HTMLInputElement>(null);
  const [comment, setComment] = useState("");
  return (
    <Container>
      <div className="header">
        <div className="user-info">
          <img src={post.userimage} alt={post.username} />
          <p>{post.username}</p>
        </div>
        <FiMoreHorizontal />
      </div>
      <div className="images">
        <img src={post.postimage} alt={post.username} />
      </div>
      <div className="content">
        <div className="actions">
          <div className="interactions">
            {post.isLike ? (
              <MdFavorite
                color={theme.colors.like}
                onClick={() => handleLike(post.id)}
              />
            ) : (
              <MdFavoriteBorder onClick={() => handleLike(post.id)} />
            )}

            <FiMessageCircle onClick={() => inputCommentRef.current?.focus()} />
            <FiSend />
          </div>
          {post.isSave ? (
            <FaBookmark onClick={() => handleSave(post.id)} />
          ) : (
            <FiBookmark onClick={() => handleSave(post.id)} />
          )}
        </div>
        {post.likes > 0 && (
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
        )}
        <div className="author">
          <p>
            <a href="#">{post.username}</a>
            {post.description}
          </p>
        </div>
        <div className="comments">
          {post.comments.map((comment) => (
            <p key={comment.id}>
              <a href="#">{comment.username}</a>
              {comment.comment}
            </p>
          ))}
        </div>

        <p className="timestamp">Há 20 minutos</p>
      </div>
      <div className="form-comment">
        <HiOutlineEmojiHappy />
        <div className="input-comment">
          <input
            type="text"
            placeholder="Adicione um comentário..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            ref={inputCommentRef}
          />
        </div>
        <button onClick={() => onSubmitComment(post.id, comment)}>
          Publicar
        </button>
      </div>
    </Container>
  );
}

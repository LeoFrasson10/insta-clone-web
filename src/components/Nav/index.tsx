import {
  MdHomeFilled,
  MdOutlineAddBox,
  MdAddBox,
  MdOutlineExplore,
  MdExplore,
  MdFavorite,
  MdFavoriteBorder,
} from "react-icons/md";
import { GrHomeRounded } from "react-icons/gr";
import { FaRegUserCircle, FaUserCircle } from "react-icons/fa";
import { RiMessengerLine, RiMessengerFill } from "react-icons/ri";

import logo from "../../assets/logo.png";

import { Container } from "./styles";
import { InputSearch } from "../InputSearch";
export function Nav() {
  return (
    <Container>
      <nav>
        <div className="logo">
          <a href="#">
            <img src={logo} alt="" />
          </a>
        </div>
        <div className="search">
          <InputSearch />
        </div>
        <div className="actions">
          <ul>
            <li>
              <a href="">
                <MdHomeFilled />
              </a>
            </li>
            <li>
              <a href="">
                <RiMessengerLine />
              </a>
            </li>
            <li>
              <a href="">
                <MdOutlineAddBox />
              </a>
            </li>
            <li>
              <a href="">
                <MdOutlineExplore />
              </a>
            </li>
            <li>
              <a href="">
                <MdFavoriteBorder />
              </a>
            </li>
            <li>
              <a href="">
                <FaRegUserCircle />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </Container>
  );
}

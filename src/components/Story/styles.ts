import styled from "styled-components";

export const Container = styled.div`
  .img-content {
    width: 80px;
    margin-top: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    &:hover {
      cursor: pointer;
    }
    .border-img {
      max-width: 60px;
      max-height: 60px;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 30px;
      margin-bottom: 8px;

      img {
        background: linear-gradient(
          to right top,
          #ffc600 20%,
          #ff0040,
          #e600cc 80%
        );
        padding: 2px;
        width: 60px;
        height: 60px;
        border-radius: 30px;
      }
    }
    .name {
      max-width: 74px;
      letter-spacing: 0.01em;
      overflow: hidden;
      text-overflow: ellipsis;
      text-align: center;
      font-size: 12px;
    }
  }
`;

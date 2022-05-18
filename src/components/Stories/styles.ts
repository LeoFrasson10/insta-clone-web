import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-width: 100%;
  background-color: ${({ theme }) => theme.colors.common.white};
  border: 1px solid ${({ theme }) => theme.colors.border.primary};
  border-radius: ${({ theme }) => theme.spacing * 0.2}px;
  padding: ${({ theme }) => theme.spacing * 2}px
    ${({ theme }) => theme.spacing * 1}px;
  margin-bottom: ${({ theme }) => theme.spacing * 3}px;
  display: flex;
  align-items: center;
  z-index: 0;

  .story-swiper {
    .swiper-button-next {
      right: 5px;
      top: 50px;
      background-color: white;
      height: 20px;
      width: 20px;
      border-radius: 10px;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px,
        rgba(0, 0, 0, 0.23) 0px 3px 6px;

      &::after {
        font-size: 10px;
        color: gray;
        font-weight: bold;
      }
    }
    .swiper-button-prev {
      left: 5px;
      top: 50px;
      background-color: white;
      height: 20px;
      width: 20px;
      border-radius: 10px;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px,
        rgba(0, 0, 0, 0.23) 0px 3px 6px;

      &::after {
        font-size: 10px;
        color: gray;
        font-weight: bold;
      }
    }
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.common.white};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.primary};
  position: fixed;
  height: 60px;
  display: flex;
  align-items: center;
  z-index: 10;

  nav {
    max-width: 975px;
    width: 100%;
    padding: 0 16px;
    display: flex;
    align-items: center;
    margin: 0 auto;
    height: 60px;

    .logo {
      flex: 1 0 127px;
      margin-top: 12px;
      a {
        text-decoration: none;
        img {
          width: 103px;
          height: auto;
        }

        &:active {
          opacity: 0.5;
        }
      }
    }

    .search {
      width: 268px;
    }
    .actions {
      flex: 1 0 127px;

      ul {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        list-style: none;
        padding-left: 24px;

        li {
          a {
            text-decoration: none;
            color: rgb(38, 38, 38);
          }

          svg {
            width: 28px;
            height: 28px;
          }

          &:not(:first-child) {
            margin-left: 16px;
          }
        }
      }
    }
  }
`;

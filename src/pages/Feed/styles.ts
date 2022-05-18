import styled from "styled-components";

export const Container = styled.section`
  min-height: 100vh;

  main {
    section.content {
      display: flex;
      padding-top: 30px;
      max-width: 935px;
      width: 100%;
      margin: 0 auto;
      flex-flow: row nowrap;
      div.feed {
        position: relative;
        width: 100%;
        max-width: 614px;

        @media (max-width: 935px) {
          max-width: 100%;
        }
      }

      div.user-container {
        max-width: 314px;
        width: 100%;
        top: 86px;
        position: sticky;
        margin-left: 14px;
        /* overflow: auto; */
        height: 100vh;
        padding: 8px;
        @media (max-width: 935px) {
          display: none;
        }

        .sugestions {
          padding-top: 8px;
          h4 {
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: ${({ theme }) => theme.colors.text.secondary};

            a {
              text-decoration: none;
              color: ${({ theme }) => theme.colors.common.black};
              font-size: 12px;
            }
          }
          .list {
            padding-left: 6px;
          }
        }

        .copyright {
          padding-top: ${({ theme }) => theme.spacing * 3}px;
          color: ${({ theme }) => theme.colors.text.secondary};
          text-transform: uppercase;
          font-size: 12px;

          a {
            text-decoration: none;
            margin: 0 3px;
            color: ${({ theme }) => theme.colors.text.secondary};
            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
    }
  }
`;

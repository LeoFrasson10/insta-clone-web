import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-width: 100%;
  background-color: ${({ theme }) => theme.colors.common.white};
  border: 1px solid ${({ theme }) => theme.colors.border.primary};
  border-radius: ${({ theme }) => theme.spacing * 0.2}px;
  margin-bottom: ${({ theme }) => theme.spacing * 3}px;

  .header {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    padding: ${({ theme }) => theme.spacing * 1.5}px;

    svg {
      width: ${({ theme }) => theme.spacing * 4}px;
      font-size: 18px;

      &:hover {
        cursor: pointer;
      }
    }

    .user-info {
      display: flex;
      align-items: center;
      img {
        width: 32px;
        height: 32px;
        border-radius: 16px;
      }
      p {
        margin-left: ${({ theme }) => theme.spacing * 2}px;
        font-weight: 600;
      }
    }
  }

  .images {
    width: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .content {
    width: 100%;
    padding: ${({ theme }) => theme.spacing}px
      ${({ theme }) => theme.spacing * 2}px;

    .actions {
      display: flex;
      align-items: center;
      justify-content: space-between;

      svg {
        font-size: 26px;

        &:hover {
          cursor: pointer;
        }
        &:not(:first-child) {
          margin-left: ${({ theme }) => theme.spacing * 2}px;
        }
      }
    }
  }

  .likes {
    display: flex;
    align-items: center;
    margin-top: ${({ theme }) => theme.spacing}px;
    a.photo {
      width: 20px;
      height: 20px;
      margin-right: ${({ theme }) => theme.spacing * 0.5}px;

      img {
        width: 100%;
        border-radius: 10px;
      }
    }

    a {
      color: ${({ theme }) => theme.colors.common.black};
      text-decoration: none;
      font-weight: 600;
      &:first-child {
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  .author {
    margin-top: ${({ theme }) => theme.spacing * 1.5}px;
    p {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    a {
      color: ${({ theme }) => theme.colors.common.black};
      text-decoration: none;
      font-weight: 600;
      margin-right: ${({ theme }) => theme.spacing * 0.5}px;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .comments {
    margin-top: ${({ theme }) => theme.spacing}px;
    a {
      color: ${({ theme }) => theme.colors.common.black};
      text-decoration: none;
      font-weight: 600;
      margin-right: ${({ theme }) => theme.spacing * 0.5}px;
      &:first-child {
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  .timestamp {
    margin-top: ${({ theme }) => theme.spacing * 1.5}px;
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: 12px;
  }

  .form-comment {
    border-top: 1px solid ${({ theme }) => theme.colors.border.primary};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px;
    width: 100%;

    svg {
      width: 32px;
      height: 32px;
      margin-right: ${({ theme }) => theme.spacing * 1.4}px;
    }
    .input-comment {
      width: 100%;
      margin-right: ${({ theme }) => theme.spacing * 2}px;

      input {
        width: 100%;
        height: 20px;
        outline: none;
        border: none;
      }
    }

    button {
      background-color: transparent;
      border: none;
      color: ${({ theme }) => theme.colors.text.blue};
      font-weight: 600;

      &:hover {
        opacity: 0.7;
        cursor: pointer;
      }
    }
  }
`;

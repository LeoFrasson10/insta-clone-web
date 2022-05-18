import styled from "styled-components";

interface IContainer {
  size?: "small" | "default" | "large";
  isFollow?: boolean;
  isSuggestion?: boolean;
}

export const Container = styled.div<IContainer>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: ${({ isSuggestion }) => (isSuggestion ? 14 : 18)}px 0;
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.common.black};

    &:hover {
      text-decoration: ${({ isSuggestion }) =>
        isSuggestion ? "underline" : "none"};
    }
  }
  img {
    width: ${({ size }) =>
      size === "small" ? 32 : size === "default" ? 56 : 84}px;
    height: ${({ size }) =>
      size === "small" ? 32 : size === "default" ? 56 : 84}px;
    border-radius: ${({ size }) =>
      size === "small" ? 16 : size === "default" ? 28 : 44}px;
  }
  .info {
    margin-left: 14px;
    flex: 1;
    line-height: ${({ isSuggestion }) => (isSuggestion ? 1 : 1.2)}rem;
    p {
      color: ${({ theme }) => theme.colors.text.secondary};
      font-size: ${({ isSuggestion }) => (isSuggestion ? 12 : 14)}px;
    }
  }
  button {
    background-color: transparent;
    border: none;
    color: ${({ theme, isFollow }) =>
      isFollow ? theme.colors.common.black : theme.colors.text.blue};
    font-weight: 600;
    transition: 0.2s;
    font-size: 12px;

    &:hover {
      opacity: 0.7;
      cursor: pointer;
    }
  }
`;

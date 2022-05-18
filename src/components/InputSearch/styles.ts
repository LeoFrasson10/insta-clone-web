import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background.input};
  padding-left: 16px;
  border-radius: ${({ theme }) => theme.spacing}px;
  width: 100%;
  svg {
    color: ${({ theme }) => theme.colors.text.icon};
    width: ${({ theme }) => theme.spacing * 2.5}px;
    height: ${({ theme }) => theme.spacing * 2.5}px;
    margin-top: 2px;
  }
  input {
    background-color: ${({ theme }) => theme.colors.background.input};
    border: none;
    font-size: 16px;
    padding: 0px 8px;
    width: 100%;
    height: 36px;
    border-radius: ${({ theme }) => theme.spacing}px;

    &:focus {
      outline: none;
    }
    &::placeholder {
      color: ${({ theme }) => theme.colors.text.icon};
      font-weight: 100;
    }
  }
`;

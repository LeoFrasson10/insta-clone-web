import styled from "styled-components";

export const Container = styled.div`
  input {
    width: 100%;
    padding: 12px;
    border: 1px solid;
    border-color: ${({ theme }) => theme.colors.border.primary};
    background-color: ${({ theme }) => theme.colors.background.primary};
    border-radius: ${({ theme }) => theme.borderRadius}px;

    &:focus {
      border: 1px solid;
      border-color: ${({ theme }) => theme.colors.border.focus};
      outline: none;
    }
  }
`;

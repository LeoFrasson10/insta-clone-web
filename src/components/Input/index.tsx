import { InputHTMLAttributes } from "react";
import { Container } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input({ placeholder, ...rest }: InputProps) {
  return (
    <Container>
      <label>{placeholder}</label>
      <input {...rest} />
    </Container>
  );
}

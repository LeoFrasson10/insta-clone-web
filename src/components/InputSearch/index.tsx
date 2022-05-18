import { InputHTMLAttributes } from "react";
import { BiSearch } from "react-icons/bi";
import { Container } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function InputSearch({ ...rest }: InputProps) {
  return (
    <Container>
      <BiSearch />
      <input placeholder="Pesquisar" {...rest} />
    </Container>
  );
}

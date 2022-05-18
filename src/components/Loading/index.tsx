import { Container } from "./styles";
import FadeLoader from "react-spinners/FadeLoader";
import { useTheme } from "styled-components";
export function Loading() {
  const theme = useTheme();
  return (
    <Container>
      <FadeLoader color={theme.colors.text.icon} />
    </Container>
  );
}

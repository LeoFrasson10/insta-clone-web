import logo from "../../assets/logo.png";
import { Input } from "../../components/Input";

import {
  Container,
  Content,
  Paper,
  PaperContainer,
  Logo,
  FormContainer,
} from "./styles";

export function Login() {
  return (
    <Container>
      <Content>
        <Paper>
          <PaperContainer>
            <Logo>
              <img src={logo} alt="" />
            </Logo>
            <FormContainer>
              <Input placeholder="Telefone, nome de usuário ou email" />
            </FormContainer>
          </PaperContainer>
        </Paper>
      </Content>
    </Container>
  );
}

import { Container } from "./styles";

interface StoryProps {
  name: string;
  imgUrl: string;
  isOpen?: boolean;
}
export function Story({ name, imgUrl, isOpen = false }: StoryProps) {
  return (
    <Container>
      <div className="img-content">
        <div className="border-img">
          <img src={imgUrl} alt={name} />
        </div>
        <p className="name">{name}</p>
      </div>
    </Container>
  );
}

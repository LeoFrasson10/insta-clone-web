import { Container } from "./styles";

interface Props {
  name: string;
  fullName?: string;
  imgUrl: string;
  isSuggestion?: boolean;
  isFollow?: boolean;
  size?: "small" | "default" | "large";
  helpText?: string;
  onClick?: () => void;
}

export function CardUser({
  name,
  fullName,
  imgUrl,
  isSuggestion = false,
  size = "default",
  isFollow = false,
  helpText = "",
  onClick,
}: Props) {
  return (
    <Container size={size} isFollow={isFollow} isSuggestion={isSuggestion}>
      <a href={`https://www.instagram.com/leo_frasson/`}>
        <img src={imgUrl} alt={fullName} />
      </a>
      <div className="info">
        <strong>
          <a href={`https://www.instagram.com/leo_frasson/`}>leo_frasson</a>
        </strong>
        {!isSuggestion && fullName && <p>{fullName}</p>}
        {isSuggestion && <p>{helpText}</p>}
      </div>
      {isSuggestion ? (
        <button type="submit" onClick={onClick}>
          {isFollow ? "Seguindo" : "Seguir"}
        </button>
      ) : (
        <button type="submit">Mudar</button>
      )}
    </Container>
  );
}

import Divider from "../../components/Divider";
import { Nav } from "../../components/Nav";
import { Post } from "../../components/Post";
import { Stories } from "../../components/Stories";
import { Container } from "./styles";

export function Feed() {
  return (
    <Container>
      <Nav />
      <Divider />
      <main>
        <section className="content">
          <div className="feed">
            <Stories />
            <Post />
            <Post />
          </div>
        </section>
      </main>
    </Container>
  );
}

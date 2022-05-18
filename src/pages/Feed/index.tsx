import { useEffect, useState } from "react";
import { CardUser } from "../../components/CardUser";
import Divider from "../../components/Divider";
import { Loading } from "../../components/Loading";
import { Nav } from "../../components/Nav";
import { Post, PostProps } from "../../components/Post";
import { Stories, StoryProps } from "../../components/Stories";
import api from "../../service/api";
import { Container } from "./styles";
import { feed } from "../../../db.json";

interface SuggestionsProps {
  id: number;
  username: string;
  userimage: string;
  follow: boolean;
}
export function Feed() {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [stories, setStories] = useState<StoryProps[]>([]);
  const [suggestions, setSuggestions] = useState<SuggestionsProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  async function loadFeed() {
    setIsLoading(true);
    try {
      if (process.env.NODE_ENV === "development") {
        console.log(feed);
        const { data } = await api.get("/feed");
        const dataPosts: PostProps[] = data.posts;

        setPosts(
          dataPosts.map((post) => ({
            ...post,
            isLike: false,
            isSave: false,
          }))
        );
        setSuggestions(data.suggestions);
        setStories(data.stories);
      } else {
        setPosts(
          feed.posts.map((post) => ({
            ...post,
            isLike: false,
            isSave: false,
          }))
        );
        setSuggestions(feed.suggestions);
        setStories(feed.stories);
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadFeed();
  }, []);

  const handleLike = (id: number) => {
    setPosts(
      posts.map((post) =>
        post.id === id ? { ...post, isLike: !post.isLike } : post
      )
    );
  };

  const handleSave = (id: number) => {
    setPosts(
      posts.map((post) =>
        post.id === id ? { ...post, isSave: !post.isSave } : post
      )
    );
  };

  const handleFollowUser = (id: number) => {
    setSuggestions(
      suggestions.map((suggestion) =>
        suggestion.id === id
          ? { ...suggestion, follow: !suggestion.follow }
          : suggestion
      )
    );
  };

  const handleSubmitComment = (id: number, comment: string) => {
    console.log(id, comment);
    if (comment.trim() === "") return;
    setPosts(
      posts.map((post) =>
        post.id === id
          ? {
              ...post,
              comments: [
                ...post.comments,
                {
                  comment,
                  username: "leo",
                  userfullname: "Leonardo",
                },
              ],
            }
          : post
      )
    );
  };

  return (
    <Container>
      <Nav />
      <Divider />
      <main>
        {isLoading && <Loading />}
        <section className="content">
          <div className="feed">
            <Stories stories={stories} />
            {posts.map((post) => (
              <Post
                key={post.id}
                post={post}
                handleLike={handleLike}
                handleSave={handleSave}
                onSubmitComment={handleSubmitComment}
              />
            ))}
          </div>
          <div className="user-container">
            <CardUser
              size="default"
              name="leo_frasson"
              fullName="Leonardo Frasson"
              isSuggestion={false}
              imgUrl="https://avatars.githubusercontent.com/u/58645846?v=4"
            />
            <div className="sugestions">
              <h4>
                Sugestões para você
                <a href="#">Ver tudo</a>
              </h4>
              <div className="list">
                {suggestions.slice(0, 5).map((suggestion) => (
                  <CardUser
                    key={suggestion.id}
                    size="small"
                    name={suggestion.username}
                    isSuggestion
                    isFollow={suggestion.follow}
                    imgUrl={suggestion.userimage}
                    helpText="Novo no Instagram"
                    onClick={() => handleFollowUser(suggestion.id)}
                  />
                ))}
              </div>
            </div>
            <div className="copyright">
              <p>
                ©2022
                <a href="#">Instagram</a>
                By clone
                <a href="https://www.instagram.com/leo_frasson/">leo_frasson</a>
              </p>
            </div>
          </div>
        </section>
      </main>
    </Container>
  );
}

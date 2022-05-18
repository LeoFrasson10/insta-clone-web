import { Story } from "../Story";
import { Container } from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";
import { Navigation } from "swiper";

export interface StoryProps {
  id: number;
  username: string;
  userimage: string;
  isOpen?: boolean;
  storie: {
    id: number;
    image: string;
    datetime: string;
    isView?: boolean;
  }[];
}

interface Props {
  stories: StoryProps[];
}
export function Stories({ stories }: Props) {
  return (
    <Container>
      <Swiper
        slidesPerView={8}
        modules={[Navigation]}
        navigation={true}
        breakpoints={{
          320: {
            slidesPerView: 5,
          },
          500: {
            slidesPerView: 7,
          },
          640: {
            slidesPerView: 8,
          },
          768: {
            slidesPerView: 8,
          },
          935: {
            slidesPerView: 8,
          },
          1024: {
            slidesPerView: 8,
          },
        }}
        className="story-swiper"
      >
        {stories.map((story) => (
          <SwiperSlide key={story.id}>
            <Story name={story.username} imgUrl={story.userimage} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}

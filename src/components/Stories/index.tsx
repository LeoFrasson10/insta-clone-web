import { Story } from "../Story";
import { Container } from "./styles";
// import ReactStories, { WithSeeMore } from "react-insta-stories";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";
import { Navigation } from "swiper";
// const stories2 = [
//   {
//     content: ({ action, isPaused }) => {
//       return (
//         <div>
//           <h1>The new version is here.</h1>
//           <p>This is the new story.</p>
//           <p>Now render React components right into your stories.</p>
//           <p>Possibilities are endless, like here - here's a code block!</p>
//           <pre>
//             <code>console.log('Hello, world!')</code>
//           </pre>
//           <p>Or here, an image!</p>
//           <br />
//           <img src="https://images.unsplash.com/photo-1565506737357-af89222625ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"></img>
//           <h3>Perfect. But there's more! →</h3>
//         </div>
//       );
//     },
//   },
//   {
//     url: "https://picsum.photos/1080/1920",
//     seeMore: ({ close }) => (
//       <div
//         style={{
//           maxWidth: "100%",
//           height: "100%",
//           padding: 40,
//           background: "white",
//         }}
//       >
//         <h2>Just checking the see more feature.</h2>
//         <p style={{ textDecoration: "underline" }} onClick={close}>
//           Go on, close this popup.
//         </p>
//       </div>
//     ),
//   },
//   {
//     url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
//     type: "video",
//   },
// ];
export function Stories() {
  return (
    <Container>
      <Swiper
        slidesPerView={8}
        modules={[Navigation]}
        navigation={true}
        // breakpoints={{
        //   640: {
        //     slidesPerView: 2,
        //     spaceBetween: 20,
        //   },
        //   768: {
        //     slidesPerView: 4,
        //     spaceBetween: 40,
        //   },
        //   1024: {
        //     slidesPerView: 5,
        //     spaceBetween: 50,
        //   },
        // }}
        className="story-swiper"
      >
        <SwiperSlide>
          <Story
            name="leo_frasson"
            imgUrl="https://avatars.githubusercontent.com/u/58645846?v=4"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Story
            name="leo_frasson"
            imgUrl="https://avatars.githubusercontent.com/u/58645846?v=4"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Story
            name="leo_frasson"
            imgUrl="https://avatars.githubusercontent.com/u/58645846?v=4"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Story
            name="leo_frasson"
            imgUrl="https://avatars.githubusercontent.com/u/58645846?v=4"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Story
            name="leo_frasson"
            imgUrl="https://avatars.githubusercontent.com/u/58645846?v=4"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Story
            name="leo_frasson"
            imgUrl="https://avatars.githubusercontent.com/u/58645846?v=4"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Story
            name="leo_frasson"
            imgUrl="https://avatars.githubusercontent.com/u/58645846?v=4"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Story
            name="leo_frasson"
            imgUrl="https://avatars.githubusercontent.com/u/58645846?v=4"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Story
            name="leo_frasson"
            imgUrl="https://avatars.githubusercontent.com/u/58645846?v=4"
          />
        </SwiperSlide>
      </Swiper>
      {/* <ReactStories
        loop
        keyboardNavigation
        defaultInterval={8000}
        stories={stories2}
        onStoryEnd={(s, st) => console.log("story ended", s, st)}
        onAllStoriesEnd={(s, st) => console.log("all stories ended", s, st)}
        onStoryStart={(s, st) => console.log("story started", s, st)}
        storyContainerStyles={{ borderRadius: 8, overflow: "hidden" }}
      /> */}
    </Container>
  );
}

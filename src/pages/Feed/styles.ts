import styled from "styled-components";

export const Container = styled.section`
  min-height: 100vh;

  main {
    section.content {
      display: flex;
      padding-top: 30px;
      max-width: 935px;
      width: 100%;
      margin: 0 auto;
      flex-flow: row nowrap;
      div.feed {
        width: 100%;
        max-width: 614px;
      }
    }
  }
`;

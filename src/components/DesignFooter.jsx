import React from "react";
import styled from "styled-components";
import illust from "../assets/pana.jpg"

function DesignFooter() {
  return (
    <MainContent>
      <MainPic>
        <img src={illust} alt="illust" />
      </MainPic>
      <MainText>
        <h3>How to design your site footer like we did</h3>
        <p>
          Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
          augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
          elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
          habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
          facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet
          urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur
          quis massa. Praesent felis est, finibus et nisi ac, hendrerit
          venenatis libero. Donec consectetur faucibus ipsum id gravida.
        </p>
        <button>Learn More</button>
      </MainText>
    </MainContent>
  );
}

const MainContent = styled.div`
margin: 3rem 0;
@media screen and (min-width:768px) {
    display: flex;
    align-items: center;
    gap: 5rem;
}
`;
const MainPic = styled.div`
img{
    aspect-ratio: 1;
    width: 100%;
}
@media screen and (min-width:768px) {
    img{
        width:450px;
        height: 450px;
    }
}
`;
const MainText = styled.div`
text-align: center;
h3{
    font-size: 1.5rem;
    color: #4D4D4D;
}
p{
    margin: 1rem 0;
    color: #4D4D4D;
}
button{
  cursor: pointer;
    margin: 1rem 0;
    border: none;
    background-color: #28CB8B;
    padding: 0.5rem 1.5rem;
    border-radius: 5px;
    &:hover{
        background: #388E3B;
    }
}
@media screen and (min-width:768px) {
    text-align: start;
}
`;

export default DesignFooter;

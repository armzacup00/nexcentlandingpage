import styled from "styled-components";
import pic1 from "../assets/illustrator-1.png"

function HeadSect() {
  return (
    <MainContent>
      <MainText>
        <h1>
          Lessons and insights
          <br />
          <span>from 8 years</span>
        </h1>
        <p>
          Where to grow your business as a 
          photographer: site or social media?
        </p>
        <button>
            Register
        </button>
      </MainText>
      <MainPicture>
        <img src={pic1} alt="pic1" />
      </MainPicture>
    </MainContent>
  );
}

const MainContent = styled.div`
display: flex;
flex-direction: column;
text-align: center;
margin: 1rem 0;
@media screen and (min-width: 768px) {
    margin: 5rem 0;
    display: flex;
    flex-direction: row;
    text-align: start;
    justify-content: center;
    gap: 5rem;
}
`;
const MainText = styled.div`
margin: 1rem 0;
h1{
  color: #4D4D4D;
    span{
        color: #28CB8B;
    }
}
p{
  color: #4D4D4D;
    margin: 1rem 0;
}
button{
    cursor: pointer;
    color:#fff;
    border-radius: 5px;
    background: #28CB8B;
    border: none;
    padding: 0.5rem 1rem;
    &:hover{
        background: #388E3B;
    }
}
@media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-self: center;
    h1{
        font-size: 45px;
    }
    button{
        width: 8rem;
    }
}
`;
const MainPicture = styled.div`
margin: 1rem 0;
img{
    width: 100%;
}
`

export default HeadSect;

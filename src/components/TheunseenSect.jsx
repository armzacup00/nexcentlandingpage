import styled from "styled-components"
import illustrator from "../assets/rafiki.png"

function TheunseenSect() {
  return (
    <MainContent>
        <MainPic>
            <img src={illustrator} alt="illustrator" />
        </MainPic>
        <MainText>
            <h2>The unseen of spending three years at Pixelgrade</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
            <button>
                Learn More
            </button>
        </MainText>
    </MainContent>
  )
}

const MainContent = styled.div `
    text-align: center;
    margin: 2rem 0;
    @media screen and (min-width: 768px) {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: start;
        gap: 10rem;
    }
`
const MainPic = styled.div `
    img{
        width: 100%;
    }
    @media screen and (min-width: 768px) {
        img{
            width: fit-content;
        }
    }
`
const MainText = styled.div `
    h2{
        color: #4D4D4D;
    }
    p{
        color: #4D4D4D;
        margin: 1rem 0;
    }
    button{
        cursor: pointer;
        color: #fff;
        border: none;
        background: #28CB8B;
        border-radius: 5px;
        padding: 0.5rem 1.5rem;
        &:hover{
        background: #388E3B;
    }
    }
`

export default TheunseenSect
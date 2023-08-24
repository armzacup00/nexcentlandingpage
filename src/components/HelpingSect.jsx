import styled from "styled-components"
import commu from "../assets/commu-icon.png"
import credit from "../assets/credit-icon.png"
import point from "../assets/point-icon.svg"
import social from "../assets/social-icon.png"

function HelpingSect() {
  return (
    <MainContent>
      <TextContent>
        <h2>Helping a local <br />
          <span> business reinvent itself</span>
        </h2>
        <p>We reached here with our hard work and dedication</p>
      </TextContent>
      <MainTable>
        <Table>
          <img src={commu} alt="icon" />
          <Text>
            <p>2,245,341</p>
            <p>Members</p>
          </Text>
        </Table>

        <Table>
          <img src={point} alt="" />
          <Text>
            <p>828,867</p>
            <p>Event Bookings</p>
          </Text>
        </Table>

        <Table>
          <img src={social} alt="" />
          <Text>
            <p>46,328</p>
            <p>Clubs</p>
          </Text>
        </Table>

        <Table>
          <img src={credit} alt="icon" />
          <Text>
            <p>1,926,436</p>
            <p>Payments</p>
          </Text>
        </Table>
      </MainTable>

    </MainContent>
  )
}

const MainContent = styled.div `
margin: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media screen and (min-width:768px) {
    display: flex;
    flex-direction: row;
  }
`
const TextContent = styled.div `
text-align: center;
padding: 5rem 0;
h2{
  span{
    color: #28CB8B;
  }
}
p{
  margin: 1rem 0;
}
@media screen and (min-width:768px) {
  text-align: start;
  }
`
const MainTable = styled.div `
text-align: center;
@media screen and (min-width: 768px){
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
`
const Table = styled.div `
display: flex;
justify-content: space-between;
align-items: center;
margin: 1rem 0;
  img{
    width: 46px;
    height: 35px;
    margin-right: 1rem;
  }
`
const Text = styled.div `
text-align: end;
p {
  color: #4D4D4D;
  &:first-child{
    font-size: 24px;
    color: #4D4D4D;
    font-weight: bold;
  }
}
`

export default HelpingSect
import styled from 'styled-components'
import logo1 from '../assets/client-logo-1.png'
import logo2 from '../assets/client-logo-2.png'
import logo3 from '../assets/client-logo-3.png'
import logo4 from '../assets/client-logo-4.png'
import logo5 from '../assets/client-logo-5.png'
import logo6 from '../assets/client-logo-6.png'


function ClientSect() {
  return (
    <MainContent>
        <MainText>
            <h2>Our Clients</h2>
            <p>We have been working with some Fortune 500+ clients</p>
        </MainText>
        <MainIcon>
            <img src={logo1} alt="logo1" />
            <img src={logo2} alt="logo2" />
            <img src={logo3} alt="logo3" />
            <img src={logo4} alt="logo4" />
            <img src={logo5} alt="logo5" />
            <img src={logo6} alt="logo6" />
        </MainIcon>
    </MainContent>
  )
}

const MainContent = styled.div `
margin: 2rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
`
const MainText = styled.div `
    h2{
        color: #4D4D4D;
    }
    p{
        color: #4D4D4D;
    }
`
const MainIcon = styled.div `
margin: 2rem 0;
    display: grid;
    justify-items: center;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-around;
  }
`
export default ClientSect
import styled from 'styled-components'
import logo from '../assets/Logo-w.png'
import instagram from '../assets/instagram.svg'
import basketball from '../assets/basketball.svg'
import twitter from '../assets/twitter.svg'
import youtube from '../assets/youtube.svg'

function FooterSect() {
  return (
    <MainContent>
        <First>
            <img src={logo} alt="logo" />
            <p>Copyright © 2020 Nexcent ltd.</p>
            <p>All rights reserved</p>
            <MediaIcon>
                <div><img src={instagram} alt="logo" /></div>
                <div><img src={basketball} alt="logo" /></div>
                <div><img src={twitter} alt="logo" /></div>
                <div><img src={youtube} alt="logo" /></div>
            </MediaIcon>
        </First>

        <Seccond>
          <ul>
            <li>Company</li>

            <li><a href="#">About us</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Testimonials</a></li>
          </ul>
        </Seccond>
        
        <Third>
          <ul>
            <li>Support</li>

            <li><a href="#">Help center</a></li>
            <li><a href="#">Terms of service</a></li>
            <li><a href="#">Legal</a></li>
            <li><a href="#">Privacy policy</a></li>
            <li><a href="#">Status</a></li>
          </ul>
        </Third>

        <Fourt>
          <p>Stay up to date</p>
          
          <form action="">
            <input type="text" placeholder='Your email address' />

          </form>
        </Fourt>
    </MainContent>
  )
}

const MainContent = styled.div `
padding: 5rem;
text-align: center;
    display: flex;
    gap: 1rem;
    flex-direction: column-reverse;
    padding: 1rem 0s;
    @media screen and (min-width: 768px) {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      text-align: start;
    }
`
const First = styled.div  `
p{
  margin: 0.5rem 0;
}
color: #fff;
`
const MediaIcon = styled.div `
display: flex;
justify-content: center;
div{
  cursor: pointer;
  margin: 0 0.5rem;
}
@media screen and (min-width: 768px) {
  justify-content: start;
    }
`
const Seccond = styled.div `
color: #fff;
li{
  margin: 0.5rem 0;
  a{
    color: #fff;
  }
}
`
const Third = styled.div `
color: #fff;
li{
  margin: 0.5rem 0;
  a{
    color: #fff;
  }
}
`
const Fourt = styled.div `
color: #fff;
p{
  margin: 1rem 0;
}
input{
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  background-color: #28CB8B;
  &:focus{
    background-color: #fff;
  }
}
`

export default FooterSect
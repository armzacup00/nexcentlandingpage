import styled from "styled-components";
import Nav from "./components/Nav";
import HeadSect from "./components/HeadSect";
import ClientSect from "./components/ClientSect";
import ManageSect from "./components/ManageSect";
import TheunseenSect from "./components/TheunseenSect";
import HelpingSect from "./components/HelpingSect";
import DesignFooter from "./components/DesignFooter";
import LastSect from "./components/LastSect";
import FooterSect from "./components/FooterSect";

function App() {
  return (
    <div>
      <MainContainer>
        <Nav />
        <HeadSect />
        <ClientSect />
        <ManageSect />
        <TheunseenSect />
      </MainContainer>

      <MainHelping>
        <MainContainer>
          <HelpingSect/>
        </MainContainer>
      </MainHelping>

      <MainContainer>
        <DesignFooter/>
      </MainContainer>

      <MainHelping>
        <MainContainer>
          <LastSect/>
        </MainContainer>
      </MainHelping>


      <Footer>
        <MainContainer>
          <FooterSect/>
        </MainContainer>
      </Footer>
    </div>
  );
}

const MainContainer = styled.main`
  @media screen and (min-width: 375px) {
    max-width: 340px;
    margin: 0 auto;
  }
  @media screen and (min-width: 768px) {
    max-width: 700px;
    margin: 0 auto;
  }
  @media screen and (min-width: 1152px) {
    max-width: 1052px;
    margin: 0 auto;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1340px;
    margin: 0 auto;
  }
  @media screen and (min-width: 1980px) {
    max-width: 1880px;
    margin: 0 auto;
  }
`;
const MainHelping = styled.div `
background-color: rgba(0,0,0,0.1);
`
const Footer = styled.footer `
background-color: #263238;
`
export default App;

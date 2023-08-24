import styled from "styled-components";
import membership from "../assets/membership-Icon.png";
import national from "../assets/national-Icon.png";
import clubs from "../assets/clubs-Icon.png";

function ManageSect() {
  return (
    <MainContent>
      <TextContent>
        <h2>Manage your entire community in a single system</h2>
        <p>Who is Nextcent suitable for?</p>
      </TextContent>
      <ManageTable>
        <Table>
          <img src={membership} alt="icon" />
          <h3>Membership Organisations</h3>
          <p>
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </Table>
        <Table>
          <img src={national} alt="icon" />
          <h3>National Associations</h3>
          <p>
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </Table>
        <Table>
          <img src={clubs} alt="icon" />
          <h3>Clubs And Groups</h3>
          <p>
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </Table>
      </ManageTable>
    </MainContent>
  );
}

const MainContent = styled.div`
display: flex;
text-align: center;
flex-direction: column;
margin: 5rem 0;
`;
const TextContent = styled.div`
h2{
    color:  #4D4D4D;
}
p{
    margin: 1rem 0;
    color:  #4D4D4D;
}
`;
const ManageTable = styled.div`
@media screen and (min-width: 768px) {
    display: flex;
    gap: 5rem;
}
`;
const Table = styled.div`
margin: 2rem 0;

h3{
    color: #4d4d4d;
    margin: 1rem 0;
}
p{
    color: #4d4d4d;
}
`;

export default ManageSect;

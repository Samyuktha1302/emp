import styled from 'styled-components';

const Home = (props) =>
{
    return (
        <Container>
            <Content>GOORam</Content>
        </Container>
    )
    ;
}
const Container=styled.div``;
const Content=styled.div`
dispaly:flex;
align-items:center;
margin:0 auto;
min-heigt:100%;
max-width:1129px;
`;

export default Home;
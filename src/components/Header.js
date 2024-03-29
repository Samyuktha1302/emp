import styled from "styled-components";

const Header=(props)=>
{
    return(
        <Container>
            <Content>
              <Logo>
                <a href="/home">
                    <img height="50px"src="./images/lettere.png" alt=""/>
                </a>
              </Logo>
              <Search>
                <div>
                    <input type="text" placeholder="search" />
                </div>
                <SearchIcon>
                <img src="./images/search-icon.svg"/>
                </SearchIcon>
              </Search>
              <Nav>
                nav menus
              </Nav>
            </Content>
        </Container>
    );

};

const Container=styled.div`
background-color:aliceblue;
border-botoom:1px solid rgba(0,0,0,0.8);
left:0;
padding;0 24px;
position:fixed;
top:0;
width:100vw;
z-index:100;

`;

const Content=styled.div`
display:flex;
align-items:center;
margin:0 auto;
min-height:100%;
max-width:1128 px;

`;

const Logo=styled.span`
margin-right:8px;
font-size:0px;
height:50px;

`;
const Search=styled.div`
opacity:1;
flex-grow:1;
position:relative;
&>div
{
    max-width:280px;
    input{
        border:none;
        box-shadow:none;
        background-color:#eef3f8;
        border-radius:2px;
        color:rgba(0,0,0,0.9);
        width:218px;
        padding:0 8px 0px 40px;
        line-height:1.75;
        font-weight:400;
        font-size:14px;
        height:34px;
        border-color:#dce6f1;
        vertical-align:text-top;



    }
}




`;
const SearchIcon=styled.div`
width:40px;
position:absolute;
z-index:1;
top:10px;
left:2px;

border-radius:0 2px 2px 0;
margin:0;
pointer-events:none;
display:flex;
justify-content:center;
align-items:center;
`;

const Nav=styled.nav`
margin:auto;
display:block;

@media(max-width:768px){
    position:fixed;
    left:0px;
    bottom:0px;
    background;white;
    width:100%;

    
}
`;

export default Header;
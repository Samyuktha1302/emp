import styled from 'styled-components';

const Login = (props) =>
{
    return (
    <Container>
        <Nav >
        <Empower>EMPOWER</Empower>

            {/* <a href="/">
             {<img height="60px" width="200px"  src="/images/pics.png" /> }
            </a> */}
            <div>
                
                <Join>Join Now</Join>
                <SignIn>Sign in</SignIn>
                
            </div>
        </Nav>
        <Section>
           <Lp>
            <h1>Navigate your career path with the power of connections</h1>
            <img src="/images/login-hero.svg"></img>
           </Lp>

           <Form>
            <Google>
                <img src="/images/google.svg" />
                Sign in with Google
            </Google>
           </Form>
        </Section>
    </Container>
    )
};





const Container = styled.div`
padding : 0px;
`;

const Nav =styled.nav`
// max-width:1128px;
// margin:auto;
padding:12px 0 10px;
display:flex;
// align-items:center;
justify-content:space-between;
position:relative;

felx-wrap:nowrap;
// height:100px;
// width:100px;


 & > a {
    width:135px;
    height:34px;
   @media(max-width:768px){
        padding:0 0px;
    }
}

`;

const Join = styled.a`
font-size:16px;
padding:10px  12px;
text-decoration:none;
border-radius:4px;
margin-right:12px;
color:rgba(0,0,0,0.9);
&:hover{
    background-color:rgba(0,0,0,0.08);
    color:rgba(0,0,0,0.9);
    text-decoration:none;

}
`;


const SignIn =styled.a`
box-shadow:inset 0 0 0 1px #0a66c2;
color:#0a66c2;
border-radius:24px;
transition-duration:167ms;
font-size:16px;
font-weight:600px;
line-height:40px;
padding:10px 24px;
text-align:center;
background-color:rgba(0,0,0,0);
&:hover{
    background-color:rgba(112,181,249,0.15);
    color:#0a66c2;
    text-decoartion:none;

}

`;

const Empower =styled.a`
box-shadow:inset 0 0 0 1px #092635;
color:#092635;
border-radius:24px;
transition-duration:167ms;
font-size:16px;
font-weight:600px;
line-height:40px;
padding:10px 24px;
text-align:center;
background-color:rgba(0,0,0,0);
&:hover{
    background-color:rgba(112,181,249,0.15);
    color:#092635;
    text-decoartion:none;

}

`;

const Section=styled.section`
display:flex;
align-content:start;
margin:auto;
align-items:center;
max-width:1128px;
width:100%;
flex-wrap:wrap;
position:relative;
padding:60px 0;
padding-bottom:138px;
min-height:700px;
@media(max-width:768px)
{
    margin:auto;
    min-height:0px;
}
`;

const Lp=styled.div`
width:100%;
h1{
padding-bottom:0;
width:55%;
font-size:56px;
color:#092635;
font-weight:200px;
line-weight:70px;
@media(max-width:768px)
{
    text-align:center;
    font-size:20px;
    width:100%;
    line-height:2;
}
}

img
{
    // z-index:-1;
    width:700px;
    height:670px;
    position:absolute;
    bottom:-2px;
     right:-150px;
    @media(max-width:768px)
    {
        top:230px;
        width:initial;
        position:initial;
        height:initial;

    }

}

`;


const Form=styled.div`
margin-top:100px;
width:407px;
@media(max-width:768px){
    margin-top:20px;

}

`;


const Google = styled.button`
display:flex;
justify-content:center;
background-color:#fff;
align-items:center;
height:56px;
width:100%;
border-radius:28px;
// box-shadow:inset 0 0 0 1px rgb(0 0 0 /60%),
// inset 0 0 0 2px rgb(0 0 0 /0%) inset 0 0 0 1px rgb(0 0 0 /0);
vertical-align:middle;
z-index:0;
transition-duration:167ms;
font-size:20px;
color:rgba(0,0,0,0.6);
&:hover{
    background-color:#5C8374;
    color:(0,0,0,0.75);
}
`;



export default Login;
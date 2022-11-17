import React, {useState} from 'react';
import styled from 'styled-components';
import LogoSrc from '../assets/Logo.svg'
import owl1 from '../assets/owl1.svg'
import owl2 from '../assets/owl2.svg'
import {Link} from 'react-router-dom';
import bar2 from '../assets/2bar.svg';

export const LoginWrapper = styled.div`
    background-color: #AFD36E;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

`

export const RegContainer = styled.div`
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 65%;
    width: 70%;
    border-radius: 20px;
`
export const StatusCont = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

export const DataCont = styled.div`
    justify-content: start;
`
export const WelcomeTitle = styled.div`
    font-weight: 400;
    font-size: 32px;
    margin: 1.5em auto 1.5em;
    position: relative;
    top: -1em;
`
export const LoginButton = styled.button`
    margin-top: 2em;
    margin-bottom: 2em;
    padding: 0.7em 1em;
    background: #6750A4;
    border-radius: 5px;
    border: 1px solid #6750A4;
    width: 22em;
    font-size: 14px;
    color: white;
    font-weight: bold;
    text-decoration: none;

    &:hover {
        background-color: #9677D9;
      }  

    a {
        text-decoration: none;
        color: white;
    }
`
export const Inputfield = styled.input`
    padding: 0.7em 1em;
    width: 20em;
    font-size: 14px;
    border: 1px solid #6750A4;
    border-radius: 5px;
`
export const InputTitle = styled.h4`
    font-size: 14px;
    margin-bottom: 1px;
    padding-bottom: 1px;
`
export const WikiLogo = styled.img`
    position: absolute;
    left: 0;
    top: 0;
`
export const Owl1 = styled.img`
    overflow: hidden;
    position: relative;
    bottom: 15%;
`
export const Owl2 = styled.img`
    overflow: hidden;
    position: relative;
    top: 20%;
`
export const StatusBar = styled.img`
    margin-bottom: 1em;
`

export const SignLink = styled.a`
    text-decoration: underline;
    margin-bottom: 0.5em;
    margin-top: 0.5em;
    color: #6750A4;
    font-size: 14px;
`

const SignIn = () => {

    const [regEmail,setEmail] = useState("");
    const [regPassword,setPassword] = useState("");

    const Tester = () => {

        let url = "https://test.wikipedia.org/w/api.php";
        
        
        
        function getLoginToken() {
            
            let params = {
                action: "query",
                meta: "tokens",
                type: "login",
                format: "json"
            };
            
            fetch( { url: url, method: 'GET', qs: params }, function( error, response, body ){
            let data;
            data = JSON.parse( body );
            loginRequest( data.query.tokens.logintoken )
            });
        }
        
        function loginRequest(loginToken) { 
            var params2 = {
                action: 'login',
                lgname: regEmail,
                lgpassword: regPassword,
                lgtoken: loginToken,
                format: 'json'
            };
        
            const postlogin = fetch( { url: url, method: 'POST', form: params2 }, function ( error, res, body ) {
                if ( error ) { return 
                }
                console.log( body );
                });
            }
            getLoginToken();
        }

    return (  <>
        <LoginWrapper>
            <WikiLogo src={LogoSrc}/>
            <Owl2 src={owl2}/>
            <StatusCont>
                <StatusBar src={bar2}/>
                <RegContainer>
                
                    <WelcomeTitle>WELCOME BACK!</WelcomeTitle>
                    <DataCont>
                        <InputTitle>E-mail adress</InputTitle>
                        <Inputfield name='email' type='text' placeholder='youremail@mail.com' value={regEmail} onChange={(e) => {setEmail(e.target.value)}}/>
                        <InputTitle>Password</InputTitle>
                        <Inputfield name='email' type='text' placeholder='******' value={regPassword} onChange={(e) => {setPassword(e.target.value)}}/>
                    </DataCont>
                    <LoginButton type='submit' onClick={Tester}>LOG IN</LoginButton>
                    <SignLink>Forgot your password?</SignLink>
                    <SignLink><Link to='/create_acc'>Create an account</Link></SignLink>
                </RegContainer>
            </StatusCont>
            <Owl1 src={owl1}/>
        </LoginWrapper>
    </>
    )
}

export default (SignIn)
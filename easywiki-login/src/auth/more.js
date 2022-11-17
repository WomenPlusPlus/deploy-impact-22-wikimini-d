import React, {useState} from 'react';
import LogoSrc from '../assets/Logo.svg'
import styled from 'styled-components';
import { DataCont, Inputfield, InputTitle, LoginButton, LoginWrapper, Owl1, Owl2, RegContainer, SignLink, WelcomeTitle, WikiLogo } from './sign_in';
import owl1 from '../assets/leftowl.svg'
import owl2 from '../assets/rightowl.svg'
import {Link} from "react-router-dom";

export const OptionsCont = styled.div`
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    position: relative;
    bottom: 1em;
`

export const Link2 = styled(SignLink)`
    margin-top: 2em;
    margin-bottom: 2em;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const NextButton = styled.button`
    margin-top: 2em;
    margin-bottom: 2em;
    padding: 0.7em 1em;
    background: #6750A4;
    border-radius: 5px;
    border: 1px solid #6750A4;
    width: 12em;
    font-weight: bold;
    color: white;
    text-decoration: none

    &:hover {
        background-color: #7CA055;
        text-decoration: none;

    }

    a {
        text-decoration: none;
        color: white;
    }
`

const MoreInfo = () => {

    const [age,setAge] = useState("");
    const [username,setUsername] = useState("");

    return ( <>

        <LoginWrapper>
            <WikiLogo src={LogoSrc}/>
            <Owl2 src={owl1}/>
            <RegContainer>
                <WelcomeTitle>TELL US MORE ABOUT YOU</WelcomeTitle>
                <DataCont>
                    <InputTitle>Your age (optional)</InputTitle>
                    <Inputfield name='age' type='text' value={age} onChange={(e) => {setAge(e.target.value)}}/>
                    <InputTitle>Username</InputTitle>
                    <Inputfield name='username' type='text' value={username} onChange={(e) => {setUsername(e.target.value)}}/>
                </DataCont>
                <OptionsCont>
                    <Link2>I will do this step later</Link2>
                    <NextButton><Link to='/interests'>NEXT</Link></NextButton>
                </OptionsCont>
            </RegContainer>
            <Owl1 src={owl2}/>
        </LoginWrapper>
    </>)

}

export default (MoreInfo)
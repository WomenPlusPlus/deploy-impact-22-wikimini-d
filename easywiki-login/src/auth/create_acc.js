import React, {useState} from 'react';
import { DataCont, LoginWrapper, RegContainer, WelcomeTitle, LoginButton, SignLink, WikiLogo, InputTitle, Inputfield, Owl2, Owl1 } from './sign_in';
import LogoSrc from '../assets/Logo.svg'
import owl1 from '../assets/owl1.svg'
import owl2 from '../assets/owl2.svg'
import {Link} from "react-router-dom";

const CreateAcc = () => {

    const [regEmail,setEmail] = useState("");
    const [regPassword,setPassword] = useState("");

    return ( <>
    
        <LoginWrapper>
            <WikiLogo src={LogoSrc}/>
            <Owl2 src={owl2}/>
            <RegContainer>
                <WelcomeTitle>CREATE AN ACCOUNT</WelcomeTitle>
                <DataCont>
                <InputTitle>E-mail adress</InputTitle>
                    <Inputfield name='email' type='text' placeholder='youremail@mail.com' value={regEmail} onChange={(e) => {setEmail(e.target.value)}}/>
                    <InputTitle>Password</InputTitle>
                    <Inputfield name='email' type='text' placeholder='******' value={regPassword} onChange={(e) => {setPassword(e.target.value)}}/>
                </DataCont>
                <LoginButton type='submit'>CREATE AN ACCOUNT</LoginButton>
                <SignLink><Link to='/sign_in'>Already have an account?</Link></SignLink>
            </RegContainer>
            <Owl1 src={owl1}/>
    
    
        </LoginWrapper>
    </>)
}

export default (CreateAcc)
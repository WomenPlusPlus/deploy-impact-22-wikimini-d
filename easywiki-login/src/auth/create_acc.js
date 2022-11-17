import React, {useState} from 'react';
import { DataCont, LoginWrapper, RegContainer, WelcomeTitle, LoginButton, SignLink, WikiLogo, InputTitle, Inputfield, Owl2, Owl1, StatusCont, StatusBar } from './sign_in';
import LogoSrc from '../assets/Logo.svg'
import owl1 from '../assets/owl1.svg'
import owl2 from '../assets/owl2.svg'
import {Link} from "react-router-dom";
import bar1 from '../assets/1bar.svg';

const CreateAcc = () => {

    const [regEmail,setEmail] = useState("");
    const [regPassword,setPassword] = useState("");

    return ( <>
    
        <LoginWrapper>
            <Link to='/'><WikiLogo src={LogoSrc}/></Link>
            <Owl2 src={owl2}/>
            <StatusCont>
            <StatusBar src={bar1}/>
            <RegContainer>
                <WelcomeTitle>CREATE AN ACCOUNT</WelcomeTitle>
                <DataCont>
                    <InputTitle>E-mail adress</InputTitle>
                    <Inputfield name='email' type='text' placeholder='youremail@mail.com' value={regEmail} onChange={(e) => {setEmail(e.target.value)}}/>
                    <InputTitle>Password</InputTitle>
                    <Inputfield name='email' type='text' placeholder='******' value={regPassword} onChange={(e) => {setPassword(e.target.value)}}/>
                </DataCont>
                <LoginButton type='submit'><Link to='/usertype'>CREATE AN ACCOUNT</Link></LoginButton>
                <SignLink><Link to='/sign_in'>Already have an account?</Link></SignLink>
            </RegContainer>
            </StatusCont>
            <Owl1 src={owl1}/>
    
    
        </LoginWrapper>
    </>)
}

export default (CreateAcc)
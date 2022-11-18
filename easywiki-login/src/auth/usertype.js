import React, {useState} from 'react';
import LogoSrc from '../assets/Logo.svg'
import { LoginWrapper, WelcomeTitle, WikiLogo, LoginButton, StatusCont, StatusBar, DataCont, RegContainer } from './sign_in';
import styled from 'styled-components';
import child from '../assets/child.svg'
import teacher from '../assets/teacher.svg'
import parent from '../assets/parent.svg'
import {Link} from "react-router-dom";
import bar2 from '../assets/2bar.svg';
import { OptionsCont } from './more';

const UserWrapper = styled(LoginWrapper)`
    flex-direction: column;
`

const UserCont = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    
`
export const WelcomeTitle1 = styled(WelcomeTitle)`
    font-weight: 500;
    margin-top: 2em;
`

export const StyledImage = styled.img`
    height: 80%;
    width: 80%;
`

export const UserContainer = styled(RegContainer)`
    width: 80%;
`

export const NavButton = styled.button`
    margin-top: 2em;
    margin-bottom: 2em;
    padding: 0.7em 1em;
    background: #6750A4;
    border-radius: 5px;
    border: 1px solid #6750A4;
    font-size: 14px;
    color: white;
    font-weight: bold;
    text-decoration: none;
    width: 10em;
    filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.16)) drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.12)) drop-shadow(0px 1px 8px rgba(0, 0, 0, 0.1));

    &:hover {
        background-color: #9677D9;
      }  

    a {
        text-decoration: none;
        color: white;
    }
`

const UserType = () => {

    const [user,setUser] = useState("");

    return ( <>
        <UserWrapper>
            <Link to='/'><WikiLogo src={LogoSrc}/></Link>
            <StatusCont>
            <StatusBar src={bar2}/>
            <UserContainer>
                <WelcomeTitle1>I AM A...</WelcomeTitle1>
                <UserCont>
                    {<StyledImage src={child}/>}
                    {<StyledImage src={teacher}/>}
                    {<StyledImage src={parent}/>}
                </UserCont>
                <OptionsCont>
                    <NavButton><Link to='/create_acc'>BACK</Link></NavButton>
                    <NavButton><Link to='/moreinfo'>NEXT</Link></NavButton>
                </OptionsCont>
            </UserContainer>
            </StatusCont>        
        </UserWrapper>
    </>)
}

export default (UserType)
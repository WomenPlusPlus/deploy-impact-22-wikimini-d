import React, {useState} from 'react';
import LogoSrc from '../assets/Logo.svg'
import { LoginWrapper, WelcomeTitle, WikiLogo, LoginButton } from './sign_in';
import styled from 'styled-components';
import child from '../assets/child.svg'
import teacher from '../assets/teacher.svg'
import parent from '../assets/parent.svg'
import {Link} from "react-router-dom";

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
const WelcomeTitle1 = styled(WelcomeTitle)`
    font-weight: 600;
`

export const StyledImage = styled.img`
`

const UserType = () => {

    const [user,setUser] = useState("");

    return ( <>
        <UserWrapper>
            <WikiLogo src={LogoSrc}/>
            <WelcomeTitle1>I AM A...</WelcomeTitle1>
            <UserCont>
                    {<StyledImage src={child}/>}
                    {<StyledImage src={teacher}/>}
                    {<StyledImage src={parent}/>}
            </UserCont>
            <LoginButton><Link to='/moreinfo'>NEXT</Link></LoginButton>
        </UserWrapper>
    </>)
}

export default (UserType)
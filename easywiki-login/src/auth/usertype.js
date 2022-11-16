import React, {useState} from 'react';
import LogoSrc from '../assets/Logo.svg'
import { InputTitle, LoginWrapper, WelcomeTitle, WikiLogo } from './sign_in';
import styled from 'styled-components';
import child from '../assets/child.svg'
import teacher from '../assets/teacher.svg'
import parent from '../assets/parent.svg'

const UserWrapper = styled(LoginWrapper)`
    flex-direction: column;
`

const UserCont = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 80%;
`
const WelcomeTitle1 = styled(WelcomeTitle)`
    font-weight: 600;
`

const StyledImage = styled.img`
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
        </UserWrapper>
    </>)
}

export default (UserType)
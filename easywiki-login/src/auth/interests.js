import React, {useState} from 'react';
import styled from 'styled-components';
import LogoSrc from '../assets/Logo.svg'
import owl2 from '../assets/owl2.svg'
import owl3 from '../assets/owl3.svg'
import {Link} from "react-router-dom";
import { LoginWrapper, Owl2, Owl1, RegContainer, WikiLogo, WelcomeTitle } from './sign_in';
import { StyledImage } from './usertype';
import animals from '../assets/rabbit.svg'
import art from '../assets/art.svg'
import sport from '../assets/sports.svg'
import games from '../assets/games.svg'
import space from '../assets/space.svg'
import { Link2, NextButton, OptionsCont } from './more';


const InterestCont = styled.div`
    width: 90%;
    height: 70%;
`
const ImagesCont = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 50%;
`
const IconCont = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    span {
        color: black;
        font-weight: bold;
        margin-top: 1em;
    }
`

const Interests = () => {

    const [interests,setInterests] = useState("");

    return ( <>
        
        <LoginWrapper>
            <WikiLogo src={LogoSrc}/>
            <Owl2 src={owl2}/>
            <RegContainer>
                <WelcomeTitle>WHAT ARE YOUR INTERESTS?</WelcomeTitle>
                <InterestCont>
                    <ImagesCont>
                        <IconCont>
                            <StyledImage src={animals}/>
                            <span>ANIMALS</span>
                        </IconCont>
                        <IconCont>
                            <StyledImage src={art}/>
                            <span>ART</span>
                        </IconCont>
                        <IconCont>
                            <StyledImage src={sport}/>
                            <span>SPORT</span>
                        </IconCont>
                    </ImagesCont>
                    <ImagesCont>
                        <IconCont>
                            <StyledImage src={games}/>
                            <span>GAMES</span>
                        </IconCont>
                        <IconCont>
                            <StyledImage src={space}/>
                            <span>SPACE</span>
                        </IconCont>
                    </ImagesCont>
                </InterestCont>
                <OptionsCont>
                    <Link2>I will do this step later</Link2>
                    <NextButton>NEXT</NextButton>
                </OptionsCont>
            </RegContainer>
            <Owl1 src={owl3}/>        
            </LoginWrapper>
    </>)
}

export default (Interests)
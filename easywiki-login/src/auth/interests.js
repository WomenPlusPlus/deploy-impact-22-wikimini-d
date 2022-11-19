import React, {useState} from 'react';
import styled from 'styled-components';
import LogoSrc from '../assets/Logo.svg'
import owl2 from '../assets/owl2.svg'
import owl3 from '../assets/owl3.svg'
import {Link} from "react-router-dom";
import { LoginWrapper, Owl2, Owl1, RegContainer, WikiLogo, WelcomeTitle, StatusCont, StatusBar } from './sign_in';
import { NavButton, StyledImage, WelcomeTitle1 } from './usertype';
import animals from '../assets/rabbit.svg'
import art from '../assets/art.svg'
import sport from '../assets/sports.svg'
import games from '../assets/games.svg'
import space from '../assets/space.svg'
import { Link2, NextButton, OptionsCont } from './more';
import bar4 from '../assets/4bar.svg';

// Reusable styling elements

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

    const [interestBorder,setInterestBorder] = useState("");
    const [artBorder,setArtBorder] = useState("");
    const [sportBorder,setASportBorder] = useState("");
    const [gamesBorder,setGamesBorder] = useState("");
    const [spaceBorder,setSpaceBorder] = useState("");

    return ( <>
        
        <LoginWrapper>
            <Link to='/'><WikiLogo src={LogoSrc}/></Link>
            <Owl2 src={owl2}/>
            <StatusCont>
            <StatusBar src={bar4}/>
            <RegContainer>
                <WelcomeTitle1>WHAT ARE YOUR INTERESTS?</WelcomeTitle1>
                <InterestCont>
                    <ImagesCont>
                        <IconCont>
                            <StyledImage onClick={() => setInterestBorder(prevMode => !prevMode)} style={ interestBorder ? {border: '5px solid #5C4195', borderRadius: '50px'} : {border: null}} src={animals}/>
                            <span>ANIMALS</span>
                        </IconCont>
                        <IconCont>
                            <StyledImage onClick={() => setArtBorder(prevMode => !prevMode)} style={ artBorder ? {border: '5px solid #5C4195', borderRadius: '50px'} : {border: null}} src={art}/>
                            <span>ART</span>
                        </IconCont>
                        <IconCont>
                            <StyledImage onClick={() => setASportBorder(prevMode => !prevMode)} style={ sportBorder ? {border: '5px solid #5C4195', borderRadius: '50px'} : {border: null}} src={sport}/>
                            <span>SPORT</span>
                        </IconCont>
                    </ImagesCont>
                    <ImagesCont>
                        <IconCont>
                            <StyledImage onClick={() => setGamesBorder(prevMode => !prevMode)} style={ gamesBorder ? {border: '5px solid #5C4195', borderRadius: '50px'} : {border: null}}src={games}/>
                            <span>GAMES</span>
                        </IconCont>
                        <IconCont>
                            <StyledImage onClick={() => setSpaceBorder(prevMode => !prevMode)} style={ spaceBorder ? {border: '5px solid #5C4195', borderRadius: '50px'} : {border: null}}src={space}/>
                            <span>SPACE</span>
                        </IconCont>
                    </ImagesCont>
                </InterestCont>
                <OptionsCont>
                    <NavButton><Link to='/moreinfo'>BACK</Link></NavButton>
                    <Link2>I will do this step later</Link2>
                    <NavButton><a href='http://localhost/mediawiki/'>FINISH</a></NavButton>
                </OptionsCont>
            </RegContainer>
            </StatusCont>
            <Owl1 src={owl3}/>        
            </LoginWrapper>
    </>)
}

export default (Interests)
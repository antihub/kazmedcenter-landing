import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { LocalHospital } from '@material-ui/icons';

const Header = () => {
    return (
        <StyledHeader>
            <LogoContainer>
                <LocalHospital/>
                KazMedCenter
            </LogoContainer>
            <StyledNav>
                <Link to='/'>Главная</Link>
                <Link to='/courses'>Курсы</Link>
                <a href='#aboutus'>О нас</a>
                <a href='#footer'>Контакты</a>
            </StyledNav>
        </StyledHeader>
    )
}

const  StyledHeader = styled.header`
    display: flex;
    margin-bottom: 60px;
    padding: 20px 30px;
    background-color: #0095af;
    color: white;
`
const LogoContainer = styled.div`
    width: 30%;
    display: flex;
    align-items: center;
    font-size: 1.3em;
`
const StyledNav = styled.nav`
    display: flex;
    width: 70%;
    justify-content: space-between;
    a {
        color: white;
        text-decoration: none;
    }
    a:hover {
        text-decoration: underline;
    }
`

export default Header;
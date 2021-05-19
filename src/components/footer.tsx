import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { LocalHospital, Room, Call, Mail } from '@material-ui/icons';

const Footer = () => (
    <StyledFooter id='footer'>
        <FooterLeft>
            <LogoContainer>
                <LocalHospital/>
                KazMedCenter
            </LogoContainer>
            <About>
            Повышаем квалификацию, переобучаем <br/>
            врачей и средний медицинский персонал. <br/>
            Проводим санитарный аудит и дезинсекции.
            </About>
        </FooterLeft>
        <FooterRight>
            <FooterNav>
                <h3>
                    Разделы
                </h3>
                <Link to='/'>Главная</Link>
                <Link to='/courses'>Курсы</Link>
                <a href='#aboutus'>О нас</a>
                <a href='#footer'>Контакты</a>
            </FooterNav>
            <FooterContacts>
                <h3>
                    Контакты
                </h3>
                <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
                    <Call style={{ marginRight: '7px' }}/>
                    <a href="tel:+77777777777">+7 (777) 777 77 77</a>
                </div>
                <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
                    <Mail style={{ marginRight: '7px' }}/>
                    <a href="mailto:mail@example.com">mail@example.com</a>
                </div>
                <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
                    <Room style={{ marginRight: '7px' }}/>
                    <a>Абылай хана 1/1, СДУ, F201</a>
                </div>
            </FooterContacts>
        </FooterRight>
    </StyledFooter>
);

const StyledFooter = styled.footer`
    display: flex;
    padding: 3% 3%;
    a {
        color: white;
        text-decoration: none;
        padding: 7px 0;
    }
    a:hover {
        text-decoration: underline;
    }
    background-color: #0095af;
    color: white;
    margin-top: 20px;
    justify-content: space-between;
`;

const FooterLeft = styled.div`
    width: 30%;
`;

const FooterRight = styled.div`
    width: 40%;
    display: flex;
    justify-content: space-between;
`;

const FooterNav = styled.nav`
    display: flex;
    flex-direction: column;
`;

const FooterContacts = styled.div`
    display: flex;
    flex-direction: column;
`

const LogoContainer = styled.div`
    padding: 7px 0;
    display: flex;
    align-items: center;
    font-size: 1.3em;
`
const About = styled.div`
    margin-top: 30px;
`

export default Footer;
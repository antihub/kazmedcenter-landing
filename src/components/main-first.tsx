import React from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import image from '../assets/images/main-first.jpg';
import { Assignment, Business, MenuBook } from '@material-ui/icons';
import Card from './main-first-card';
import { useHistory } from 'react-router-dom';

const cards = [
    {
        title: 'Профессионально обучаем',
        description: 'Преподавательский состав с клиническим, педагогическим опытом и сертификацией',
        icon: <MenuBook style={{ fontSize: '4em', color: 'white' }}/>
    },
    {
        title: 'Выдаем сертификаты',
        description: 'Документы об образовании установленного образца по бланкам строгой отчетности',
        icon: <Assignment style={{ fontSize: '4em', color: 'white' }}/>
    },
    {
        title: 'Находимся в центре Алматы',
        description: 'Доступ к клиническим базам с оборудованием и тренажерами для обучения',
        icon: <Business style={{ fontSize: '4em', color: 'white' }}/>
    },
    
]

const MainFirst = () => {

    const history = useHistory();

    return (
        <StyledMainFirst>
        <TopSide>
            <LeftSide>
                <h1>
                Академия по переподготовке и повышению квалификации медработников
                </h1>
                <h3>
                Обучаем, документально сопровождаем в получении сертификата специалиста и проводим санитарно-эпидемиологический аудит.
                </h3>
                <StyledButton onClick={ () => history.push('/courses') }>
                    Выбрать курс
                </StyledButton>
            </LeftSide>
            <RightSide>
                <StyledImage src={image}/>
            </RightSide>
        </TopSide>
        <BottomSide>
            {
                cards.map(card => <Card {...card} />)
            }
        </BottomSide>
    </StyledMainFirst>
)
}

const StyledMainFirst = styled.section`
    padding: 5% 0;
`

const TopSide = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 5%;
    color: #0095af;
`

const BottomSide = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 50px 0;
`

const LeftSide = styled.div`
    width: 50%;
    h1 {
        font-size: 2em;
    }
    h3 {
        margin-bottom: 50px;
    }
`
const RightSide = styled.div`
    width: 45%;
`

const StyledButton = styled(Button)`
    && {
        background-color: #0095af;
        color: white;
        :hover {
            background-color: #01505e;
            color: white;
        }
    }
`

const StyledImage = styled.img`
    width: 100%;
`

export default MainFirst;
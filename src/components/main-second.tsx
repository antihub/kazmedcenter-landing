import React from 'react';
import styled from 'styled-components';
import Card from './main-second-card';

const cards = [
    {
        title: 'Образовательные программы',
        description: 'Для специалистов с высшим и средним медицинским и фармацевтическим образованием',
    },
    {
        title: 'Санитарно-эпидеологический аудит',
        description: 'Консультируем организации по санитарным нормам, выдаем аудиторнские отчеты, освобождаем от плановых проверок СЭС',
    },
    {
        title: 'Документальное сопровождение',
        description: 'Помогаем получить сертификат специалиста, освобождаем медицинских работников от внеклинических процедур',
    },
    
]

const MainSecond = () => (
    <StyledMainSecond>
        <h1>
        Что делаем и чем полезны
        </h1>
        <CardsContainer>
            {
                cards.map(card => <Card {...card}/>)
            }
        </CardsContainer>
    </StyledMainSecond>
)

const StyledMainSecond = styled.section`
    padding: 5% 0;
    h1 {
        font-size: 2em;
    }
    color: #0095af;
`
const CardsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 50px 0;
`

export default MainSecond;
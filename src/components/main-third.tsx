import React from 'react';
import styled from 'styled-components';
import image from '../assets/images/main-third.jpg';

const MainThird = () => (
    <StyledMainThird id='aboutus'>
        <LeftSide>
            <StyledImage src={image}/>
        </LeftSide>
        <RightSide>
            <h1>
                Об академии
            </h1>
            <p>
                Занимаемся последипломным образованием медработников. Документально сопровождаем для получений сертификатов. Также проводим санитарно-эпидемиологический аудиты, дезинфекции, дезинсекции и дератизации.
                <br/> Повышаем санитарную грамотность населения
                <br/> в вопросах охраны здоровья, благополучия населения.
            </p>
        </RightSide>
    </StyledMainThird>
)

const StyledMainThird = styled.section`
    display: flex;
    justify-content: space-between;
    padding: 5% 0;
    color: #0095af;
    h1 {
        margin-bottom: 40px;
    }
`;

const LeftSide = styled.div`
    width: 45%;
`;

const RightSide = styled.div`
    width: 50%;
`;

const StyledImage = styled.img`
    width: 100%;
`

export default MainThird;
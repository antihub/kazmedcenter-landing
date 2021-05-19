import React from 'react';
import styled from 'styled-components';

interface CardInterface {
    title: string;
    description: string;
}

const Card = ({title, description}: CardInterface) => (
    <StyledCard>
        <h2>
            {title}
        </h2>
        <hr/>
        <p>
            {description}
        </p>
    </StyledCard>
)

const StyledCard = styled.div`
    width: 25%;
    h2 {
        font-size: 1.5em;
    }
`;

export default Card;
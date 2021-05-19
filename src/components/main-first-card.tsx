import React from 'react';
import styled from 'styled-components';

interface CardInterface {
    title: string;
    description: string;
    icon: any;
}

const Card = ({title, description, icon}: CardInterface) => (
    <StyledCard>
        {icon}
        <h3>
            {title}
        </h3>
        <h3>
            {description}
        </h3>
    </StyledCard>
)

const StyledCard = styled.div`
    width: 30%;
    color: white;
    background-color: #0095af;
    padding: 2% 3%;
`;

export default Card;
import React from 'react';
import styled from 'styled-components';
import { Room, Call } from '@material-ui/icons';

const SubHeader = () => {
    return (
        <StyledSubHeader>
            <LeftSide>
                <Room style={{ marginRight: '7px' }}/>
                Абылай хана 1/1, СДУ , F201
            </LeftSide>
            <RightSide>
                <Call style={{ marginRight: '7px' }}/>
                <a href="tel:+77777777777">+7 (777) 777 77 77</a>
            </RightSide>
        </StyledSubHeader>
    );
}

const StyledSubHeader = styled.div`
    display: flex;
    padding-bottom: 20px;
    justify-content: space-between;
    color: #0095af;
    a {
        color: #0095af;
    }
`;

const LeftSide = styled.div`
    display: flex;
    align-items: center;
`;

const RightSide = styled.div`
    display: flex;
    align-items: center;
`

export default SubHeader;
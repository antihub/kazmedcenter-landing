import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import MainFirst from '../components/main-first';
import MainSecond from '../components/main-second';
import MainThird from '../components/main-third';
import RequestForm from '../components/request-form';

const Main = () => (
    <StyledMain>
        <MainFirst/>
        <MainSecond/>
        <MainThird/>
        <RequestForm/>
    </StyledMain>
)

const StyledMain = styled.div`

`;

export default Main;
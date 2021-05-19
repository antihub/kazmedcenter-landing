import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './pages/main';
import Header from './components/header';
import styled from 'styled-components';
import Footer from './components/footer';
import SubHeader from './components/subheader';
import Courses from './pages/courses';
import CoursesDetails from './pages/courses-details';


const App = () => (
    <StyledApp>
        <SubHeader/>
        <Header/>
        <Switch>
            <Route exact path='/' component={Main}/>
            <Route exact path='/courses' component={Courses}/>
            <Route exact path='/courses/:id' component={CoursesDetails}/>
        </Switch>
        <Footer/>
    </StyledApp>
)

const StyledApp = styled.div`
    padding: 2% 15%;
`

export default App;
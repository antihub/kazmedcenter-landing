import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CoursesService } from '../services/courses.service';
import RequestForm from '../components/request-form';
import { Button } from '@material-ui/core';

const CoursesDetails = (props: any) => {

    const [state, setState] = useState<any>({
        course:{
            name: '',
            price: '',
            description: '',
            target: '',
            loops: [],
        }
    });

    useEffect(() => {
        CoursesService.getById(props.match.params.id).then(res => {
            setState({...state, course: res.data});
        })
    },[])

    return (
        <StyledCoursesDetails>
            <h1>
                { state.course.name }
            </h1>
            <p style={{ width: '50%' }}>
                { state.course.description }
            </p>
            <Button style={{ backgroundColor: '#0095af', color: 'white' }}>
                Записаться на курс
            </Button>
            <hr/>
            <h1>
                Цель и задачи курса
            </h1>
            <p style={{ width: '50%' }}>
                { state.course.target }
            </p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ width: '30%' }}>
                    <h3>
                        Сертификация обучения
                    </h3>
                    <span>
                    После окончания выдаем свидетельство о повышении квалификации
                    </span>
                </div>
                <div style={{ width: '30%' }}>
                    <h3>
                        Длительность обучения
                    </h3>
                    <ul>
                        <li>
                            54 часа
                        </li>
                        <li>
                            108 часа
                        </li>
                        <li>
                            216 часа
                        </li>
                    </ul>
                </div>
                <div style={{ width: '30%' }}>
                    <h3>
                        Дата начала
                    </h3>
                    <span>
                        Все индивидуально, и стартует с вашей заявки.
                    </span>
                </div>
            </div>
            <hr/>
            <h1>
                Рекомендуемое количество циклов
            </h1>
            <p style={{ width: '50%' }}>
                {`Рекомендуемыми темами компонентов по выбору на циклах повышения квалификации по специальности "${state.course.name}" являются:`}
            </p>
            {
                state.course.loops.map((loop: any, index: any) => (
                    <p>
                        { `${index+1}. ${loop}` }
                    </p>
                ))
            }
            <hr/>
            <RequestForm/>
        </StyledCoursesDetails>
    )
}

const StyledCoursesDetails = styled.div`
    color: #535353;
    p {
        font-size: 22px;
    }
    span, li {
        font-size: 16px;
    }
    hr {
        margin: 40px 0;
    }
`;

export default CoursesDetails;
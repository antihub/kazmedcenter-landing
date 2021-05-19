import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { CoursesService } from '../services/courses.service';
import { Table, TableHead, TableBody, TableCell, TableRow, Button } from '@material-ui/core';
import RequestForm from '../components/request-form';
import { useHistory } from 'react-router-dom';

const Courses = () => {


    const router = useHistory();
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        CoursesService.getAll().then(res => {
            setCourses(res.data);
        })
    },[])

    return (
        <StyledCourses>
            <h1 className='blue-heading'>
                Наши курсы
            </h1>
            <Table style={{ marginBottom: '5%' }}>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            Название
                        </TableCell>
                        <TableCell>
                            Цена
                        </TableCell>
                        <TableCell>
                            Перейти
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        courses.map((course: any, index) => (
                            <TableRow key={ index }>
                                <TableCell>
                                    { course.name }
                                </TableCell>
                                <TableCell>
                                    { course.price + ' тг.' }
                                </TableCell>
                                <TableCell>
                                    <Button style={{ backgroundColor: '#0095af', color: 'white' }} onClick={() => {
                                        router.push(`/courses/${ course._id }`)
                                    }}>
                                        Подробнее
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
            <RequestForm/>
        </StyledCourses>
    );
}

const StyledCourses = styled.div`
    padding: 5% 0;
    .blue-heading {
        color: #0095af;
    }
`

export default Courses;
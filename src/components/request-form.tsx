import React, { useState } from 'react';
import styled from 'styled-components';
import { Select, MenuItem, InputLabel, TextField, Button } from '@material-ui/core';
import { RequestsService } from '../services/requests.service';

interface State {
    request: Request;
    fieldErrors: Request;   
}

interface Request {
    type: string;
    hours: string;
    specialization: string;
    number: string;
    email: string;
}

const defaultRequest: Request = {
    type: 'Очная',
    hours: '54',
    specialization: '',
    number: '',
    email: '',
}

const defaultFieldErrors: Request = {
    type: '',
    hours: '',
    specialization: '',
    number: '',
    email: '',
}

const RequestForm = () => {

    const [state, setState] = useState<State>({ request: defaultRequest, fieldErrors: defaultFieldErrors });

    const handleRequestChange = (e: React.ChangeEvent<any>) => {
        const { request, fieldErrors }: any = { ...state };
        request[e.target.name] = e.target.value;
        fieldErrors[e.target.name] = '';
        setState({ request, fieldErrors });
    }

    const handleSubmitRequest = () => {
        const { request, fieldErrors }: any = { ...state };
        let isAnyError = false;
        Object.keys(request).forEach(e => {
            if (!e) {
                fieldErrors[e] = 'Обязательное поле!';
                isAnyError = true;
            }
        });
        if (!isAnyError) {
            RequestsService.post(request).then((res:any) => {});
        } 
    }

    return (
        <StyledRequestForm>
            <h1>
                Отправьте заявку на расчет стоимости обучения
            </h1>
            <p style={{ marginBottom: '30px' }}>
                Укажите желаемую специальность, форму и длительность обучения и отправьте данные
            </p>
            <Field>
                <InputLabel id='request-type' style={{ marginRight: '20px', color: 'white' }}>
                    Форма обучение
                </InputLabel>
                <Select
                    labelId='request-type'
                    name='type'
                    value={state.request.type}
                    onChange={ (e) => handleRequestChange(e) }
                    inputProps={{ name: 'type', style: { color: 'white' } }}
                    SelectDisplayProps={{
                        style: {
                            color: 'white',
                        }
                    }}
                >
                    <MenuItem value={'Очная'}>Очная</MenuItem>
                    <MenuItem value={'Очно-дистанционное'}>Очно-дистанционное</MenuItem>
                    <MenuItem value={'Дистанционное'}>Дистанционное</MenuItem>
                    
                </Select>
            </Field>
            <Field>
                <InputLabel id='request-hours' style={{ marginRight: '20px', color: 'white' }}>
                    Количество часов
                </InputLabel>
                <Select
                    labelId='request-hours'
                    name='hours'
                    value={state.request.hours}
                    onChange={ (e) => handleRequestChange(e) }
                    inputProps={{ name: 'hours', style: { color: 'white' }}}
                    SelectDisplayProps={{
                        style: {
                            color: 'white',
                        }
                    }}
                >
                    <MenuItem value={'54'}>54</MenuItem>
                    <MenuItem value={'108'}>108</MenuItem>
                    <MenuItem value={'216 и более'}>216 и более</MenuItem>
                    
                </Select>
            </Field>
            <CenteredField>
                <TextField 
                    id="request-specialization" 
                    label="Специализация"
                    value={ state.request.specialization }
                    inputProps={{ name: 'specialization', style: { color: 'white' } }}
                    InputLabelProps={{
                        style: {
                            color: 'white',
                        }
                    }}
                    onChange={(e) => handleRequestChange(e)}
                />
            </CenteredField>
            <CenteredField>
                <TextField 
                    id="request-number" 
                    label="Номер телефона"
                    value={ state.request.number }
                    inputProps={{ name: 'number', style: { color: 'white' } }}
                    InputLabelProps={{
                        style: {
                            color: 'white',
                        }
                    }}
                    onChange={(e) => handleRequestChange(e)}
                />
            </CenteredField>
            <CenteredField>
                <TextField 
                    id="request-email" 
                    label="Почта"
                    value={ state.request.email }
                    inputProps={{ name: 'email', style: { color: 'white' } }}
                    InputLabelProps={{
                        style: {
                            color: 'white',
                        }
                    }}
                    onChange={(e) => handleRequestChange(e)}
                />
            </CenteredField>
            <CenteredField>
                <Button
                    variant='contained'
                    color='primary'
                    onClick={() => {
                        handleSubmitRequest();
                    }}
                    style={{
                        color: '#0095af',
                        backgroundColor: 'white',
                    }}
                >
                    Отправить
                </Button>
            </CenteredField>
        </StyledRequestForm>
    );
}

const StyledRequestForm = styled.section`
    && {
        text-align: center;
        color: white;
    }
    background-color: #0095af;
    padding: 2% 3%;
`

const Field = styled.div`
    margin: auto;
    margin-bottom: 20px;
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const CenteredField = styled.div`
    margin: auto;
    margin-bottom: 20px;
    width: 30%;
    display: flex;
    align-items: center;
`

export default RequestForm;
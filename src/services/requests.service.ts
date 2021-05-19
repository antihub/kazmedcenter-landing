import { instance } from './config';

export const RequestsService = {
    post: (request: any) => instance.post('/requests', { request }),
};
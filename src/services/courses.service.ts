import { instance } from './config';

export const CoursesService = {
    getAll: () => instance.get('/courses'),
    getById: (id: any) => instance.get(`/courses/${id}`),
};
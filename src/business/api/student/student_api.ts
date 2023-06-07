import {Endpoint} from '../request';
import {StudentResponse} from 'src/business/responses/StudentResponse';

export const register = (data: StudentResponse) => {
  return Endpoint.post('students/register', data);
};
export const update = (data: StudentResponse) => {
  return Endpoint.update(`students/update/`, data);
};
export const all = () => {
  return Endpoint.get('students/get');
};
export const getStudent = (id: string) => {
  return Endpoint.post(`students/find`, {id});
};

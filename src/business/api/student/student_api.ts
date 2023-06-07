import {Endpoint} from '../request';
import {StudentResponse} from 'src/business/responses/StudentResponse';

export const register = (data: StudentResponse) => {
  return Endpoint.post('students/register', data);
};

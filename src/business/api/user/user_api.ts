import {
  UserRegisterData,
  UserResponse,
} from 'src/business/responses/UserResponse';
import {Endpoint} from '../request';

export const register = (data: UserRegisterData) => {
  return Endpoint.post('users/register', data);
};

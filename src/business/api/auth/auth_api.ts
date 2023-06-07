import {
  UserRegisterData,
  UserResponse,
} from 'src/business/responses/UserResponse';
import {Endpoint} from '../request';

export const login = (data: {email: string; password: string}) => {
  return Endpoint.post('auth/login', data);
};

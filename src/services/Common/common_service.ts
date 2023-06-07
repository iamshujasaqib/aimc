import {StudentResponse} from 'src/business/responses/StudentResponse';
import {UserResponse} from 'src/business/responses/UserResponse';

export function getFullName(
  user: UserResponse | StudentResponse,
  separator: string = ' ',
) {
  return user.firstName + separator + user.lastName;
}

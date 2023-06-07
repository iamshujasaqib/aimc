export interface UserRegisterData {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  email: string;
}

export interface UserResponse {
  firstName: string;
  lastName: string;
  username: string;
  avatar?: string;
  email: string;
}

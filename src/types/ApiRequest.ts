export interface SignUpRequest {
  email: string;
  mobile: string;
  password: string;
  roleId: number;
  otp: string;
  userPermissions: number[];
}

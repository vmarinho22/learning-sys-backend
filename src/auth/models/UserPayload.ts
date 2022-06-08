export interface UserPayload {
  sub: number;
  mail: string;
  name: string;
  iat?: number;
  exp?: number;
}

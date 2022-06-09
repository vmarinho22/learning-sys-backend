import { IsEmail, IsString } from 'class-validator';

export class LoginRequestBody {
  @IsEmail()
  mail: string;

  @IsString()
  password: string;
}

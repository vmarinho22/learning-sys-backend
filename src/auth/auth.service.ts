import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async login() {
    return 'login';
  }

  async validateUser(mail: string, password: string) {
    const user = await this.usersService.findByMail(mail);

    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (isPasswordValid) {
        delete user['password'];
        return user;
      }
    }

    throw new Error('Email address or password provided is incorrect');
  }
}

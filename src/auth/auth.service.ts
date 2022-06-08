import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { UsersService } from 'src/users/users.service';
import { UserPayload } from './models/UserPayload';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService
  ) {}

  async login(user: User) {
    const payload: UserPayload = {
      sub: user.id,
      mail: user.mail,
      name: user.name
    };

    const jwtToken = this.jwtService.sign(payload);

    return {
      access_token: jwtToken
    };
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

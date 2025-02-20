import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { User } from 'src/user/dto/create-user-dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn(
    name: string,
    password: string,
  ): Promise<{ access_token: string; user: User }> {
    const user = await this.userService.findUser(name);

    const isValidPassword = await compare(password, user.password);
    if (!isValidPassword) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.id, name: user.name };
    return {
      user: user,
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}

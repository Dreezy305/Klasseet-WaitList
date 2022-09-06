import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class JoinWaitListDto {
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  fullName: string;

  @IsString()
  @IsNotEmpty()
  country: string;

  @IsString()
  @IsNotEmpty()
  role: 'STUDENT' | 'INSTRUCTOR';
}

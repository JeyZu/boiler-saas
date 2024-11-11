import { IsEmail, IsString, IsUUID } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  keycloakId: string;
}

export class UpdateUserDto {
  @IsEmail()
  email?: string;
}

export class UserResponseDto {
  @IsUUID()
  id: string;

  @IsEmail()
  email: string;

  @IsString()
  keycloakId: string;

  createdAt: Date;
  updatedAt: Date;
}
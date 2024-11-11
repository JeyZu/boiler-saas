import { Injectable } from '@nestjs/common';
import { IUserRepository } from '../../domain/repositories/user.repository';
import { CreateUserDto, UpdateUserDto, UserResponseDto } from '../dtos/user.dto';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: IUserRepository) {}

  async createUser(createUserDto: CreateUserDto): Promise<UserResponseDto> {
    const user = await this.userRepository.create(createUserDto);
    return this.mapToDto(user);
  }

  async getUserById(id: string): Promise<UserResponseDto> {
    const user = await this.userRepository.findById(id);
    return this.mapToDto(user);
  }

  async updateUser(id: string, updateUserDto: UpdateUserDto): Promise<UserResponseDto> {
    const user = await this.userRepository.update(id, updateUserDto);
    return this.mapToDto(user);
  }

  async deleteUser(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }

  private mapToDto(user: any): UserResponseDto {
    return {
      id: user.id,
      email: user.email,
      keycloakId: user.keycloakId,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }
}
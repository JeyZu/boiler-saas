import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { IUserRepository } from '../../../../domain/repositories/user.repository';
import { User } from '../../../../domain/entities/user.entity';
import { CreateUserDto } from '@application/dtos/user.dto';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(private prisma: PrismaService) {}

  async findById(id: string): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { email } });
  }

  async findByKeycloakId(keycloakId: string): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { keycloakId } });
  }

  async create(user: CreateUserDto): Promise<User> {
    return this.prisma.user.create({ data: user });
  }

  async update(id: string, user: Partial<User>): Promise<User> {
    return this.prisma.user.update({
      where: { id },
      data: user,
    });
  }

  async delete(id: string): Promise<void> {
    await this.prisma.user.delete({ where: { id } });
  }
}
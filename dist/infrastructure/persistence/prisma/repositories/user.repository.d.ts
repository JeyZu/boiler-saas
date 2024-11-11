import { PrismaService } from '../prisma.service';
import { IUserRepository } from '../../../../domain/repositories/user.repository';
import { User } from '../../../../domain/entities/user.entity';
export declare class UserRepository implements IUserRepository {
    private prisma;
    constructor(prisma: PrismaService);
    findById(id: string): Promise<User | null>;
    findByEmail(email: string): Promise<User | null>;
    findByKeycloakId(keycloakId: string): Promise<User | null>;
    create(user: Partial<User>): Promise<User>;
    update(id: string, user: Partial<User>): Promise<User>;
    delete(id: string): Promise<void>;
}

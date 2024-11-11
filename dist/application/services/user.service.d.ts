import { IUserRepository } from '../../domain/repositories/user.repository';
import { CreateUserDto, UpdateUserDto, UserResponseDto } from '../dtos/user.dto';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: IUserRepository);
    createUser(createUserDto: CreateUserDto): Promise<UserResponseDto>;
    getUserById(id: string): Promise<UserResponseDto>;
    updateUser(id: string, updateUserDto: UpdateUserDto): Promise<UserResponseDto>;
    deleteUser(id: string): Promise<void>;
    private mapToDto;
}

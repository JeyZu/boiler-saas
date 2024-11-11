import { UserService } from '../../application/services/user.service';
import { CreateUserDto, UpdateUserDto, UserResponseDto } from '../../application/dtos/user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    createUser(createUserDto: CreateUserDto): Promise<UserResponseDto>;
    getUser(id: string): Promise<UserResponseDto>;
    updateUser(id: string, updateUserDto: UpdateUserDto): Promise<UserResponseDto>;
    deleteUser(id: string): Promise<void>;
}

export declare class CreateUserDto {
    email: string;
    keycloakId: string;
}
export declare class UpdateUserDto {
    email?: string;
}
export declare class UserResponseDto {
    id: string;
    email: string;
    keycloakId: string;
    createdAt: Date;
    updatedAt: Date;
}

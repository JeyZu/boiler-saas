export declare class User {
    id: string;
    email: string;
    keycloakId: string;
    createdAt: Date;
    updatedAt: Date;
}
export declare class Post {
    id: string;
    title: string;
    content: string;
    published: boolean;
    authorId: string;
    createdAt: Date;
    updatedAt: Date;
}

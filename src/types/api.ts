export type BaseEntity = {
    id: number;
};

export type Entity<T> = {
    [K in keyof T]: T[K];
} & BaseEntity;

export type User = Entity<{
    email: string;
    name: string;
    phone: string;
}>;

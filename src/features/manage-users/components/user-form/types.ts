import { User } from '../../../../types/api';

export type UserFormProps = {
    opened: boolean;
    close: () => void;
    formTitle: string;
    initialValues?: UserFormKeys;
    handleAddUser: (user: User) => void;
};

export type UserFormKeys = {
    name: string;
    email: string;
    phone: string;
    id: number;
};

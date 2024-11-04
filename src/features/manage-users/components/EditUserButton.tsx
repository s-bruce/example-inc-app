import { useDispatch } from 'react-redux';
import { useDisclosure } from '@mantine/hooks';
import { Button } from '@mantine/core';
import { AppDispatch } from '../../../store';
import { updateUser } from '../usersSlice';
import { User } from '../../../types/api';
import { UserForm } from './user-form/user-form';

type EditUserButtonProps = {
    user: User;
};

export const EditUserButton = ({ user }: EditUserButtonProps) => {
    const dispatch: AppDispatch = useDispatch();
    const [opened, { open, close }] = useDisclosure(false);

    const handleUpdateUser = (userData: User) => {
        dispatch(updateUser(userData));
        close();
    };

    // Note: future optimization: only render UserForm after user clicks button. Currently, it's always rendered, just not opened.

    return (
        <>
            <Button variant="subtle" onClick={open}>
                Edit
            </Button>
            <UserForm
                opened={opened}
                close={close}
                formTitle="Edit User"
                initialValues={{
                    name: user.name,
                    email: user.email,
                    phone: user.phone,
                    id: user.id,
                }}
                handleAddUser={handleUpdateUser}
            />
        </>
    );
};

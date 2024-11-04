import { useDispatch } from 'react-redux';
import { useDisclosure } from '@mantine/hooks';
import { Button } from '@mantine/core';
import { AppDispatch } from '../../../store';
import { addUser } from '../usersSlice';
import { User } from '../../../types/api';
import { UserForm } from './user-form/user-form';

export const AddUserButton = () => {
    const dispatch: AppDispatch = useDispatch();
    const [opened, { open, close }] = useDisclosure(false);

    const handleAddUser = (newUser: User) => {
        dispatch(addUser(newUser));
        close();
    };

    return (
        <>
            <Button onClick={open}>Add User</Button>
            <UserForm
                opened={opened}
                close={close}
                formTitle="Add User"
                handleAddUser={handleAddUser}
            />
        </>
    );
};

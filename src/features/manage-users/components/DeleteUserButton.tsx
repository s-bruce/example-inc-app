import { useDispatch } from 'react-redux';
import { useDisclosure } from '@mantine/hooks';
import { Button } from '@mantine/core';
import { AppDispatch } from '../../../store';
import { deleteUser } from '../usersSlice';
import { User } from '../../../types/api';
import { ConfirmationModal } from '../../../components/ConfirmationModal';

type DeleteUserButtonProps = {
    user: User;
};

export const DeleteUserButton = ({ user }: DeleteUserButtonProps) => {
    const dispatch: AppDispatch = useDispatch();
    const [opened, { open, close }] = useDisclosure(false);

    const handleDeleteUser = () => {
        dispatch(deleteUser(user.id));
        close();
    };

    // Note: future optimization: only render UserForm after user clicks button. Currently, it's always rendered, just not opened.

    return (
        <>
            <Button variant="subtle" onClick={open}>
                Delete
            </Button>
            <ConfirmationModal
                title="Delete User?"
                actionText="permanently delete user"
                buttonText="Delete"
                handleConfirmation={handleDeleteUser}
                opened={opened}
                close={close}
            />
        </>
    );
};

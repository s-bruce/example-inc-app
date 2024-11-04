import { Group, Space, Title } from '@mantine/core';
import { AddUserButton } from './components/AddUserButton';
import { UsersList } from './components/UsersList';

export const ManageUsers = () => {
    return (
        <>
            <Group justify="space-between">
                <Title>Manage Users</Title>
                <AddUserButton />
            </Group>
            <Space h="lg" />
            <UsersList />
        </>
    );
};

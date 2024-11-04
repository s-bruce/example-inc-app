import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Group, Loader, Text } from '@mantine/core';
import { AppDispatch, RootState } from '../../../store';
import { fetchUsers } from '../usersSlice';
import { Table } from '../../../components/table/Table';
import { EditUserButton } from './EditUserButton';
import { DeleteUserButton } from './DeleteUserButton';

export const UsersList = () => {
    const dispatch: AppDispatch = useDispatch();
    const { users, loading, error } = useSelector(
        (state: RootState) => state.users
    );

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    if (loading) {
        return (
            <Group justify="center">
                <Loader />
            </Group>
        );
    }

    return (
        <>
            {error && (
                // Instead of displaying an inline error, we could use something like Mantine's notification system for displaying errors on notification popups
                <Text mt="md" mb="md">
                    Error: {error}
                </Text>
            )}
            <Table
                data={users}
                columns={[
                    { field: 'name', title: 'Name' },
                    { field: 'email', title: 'Email' },
                    { field: 'phone', title: 'Phone' },
                    {
                        title: '',
                        callback: ({ entry }) => (
                            <EditUserButton user={entry} />
                        ),
                    },
                    {
                        title: '',
                        callback: ({ entry }) => (
                            <DeleteUserButton user={entry} />
                        ),
                    },
                ]}
            />
        </>
    );
};

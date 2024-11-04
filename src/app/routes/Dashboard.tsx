import { Link } from 'react-router-dom';
import { Text, Title } from '@mantine/core';
import { Path } from '../config';

export const Dashboard = () => {
    return (
        <>
            <Title mb="md">Dashboard</Title>
            <Text>
                Welcome to Example, Inc! Click on{' '}
                <Link to={{ pathname: Path.Users }}>Users</Link> in the
                navigation bar to manage users.
            </Text>
        </>
    );
};

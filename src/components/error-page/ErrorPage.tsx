import { Stack, Text, Title } from '@mantine/core';

type ErrorPageProps = {
    title: string;
    text: string;
    children?: React.ReactNode;
};

export const ErrorPage = ({ text, title, children }: ErrorPageProps) => {
    return (
        <Stack h={400} align="center" justify="center">
            <Title ta="center">{title}</Title>
            <Text ta="center">{text}</Text>
            {children}
        </Stack>
    );
};

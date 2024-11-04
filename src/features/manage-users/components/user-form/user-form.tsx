import { Button, Group, Modal, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { UserFormProps, UserFormKeys } from './types';

const defaultInitialValues: UserFormKeys = {
    name: '',
    email: '',
    phone: '',
    id: 0,
};

export const UserForm = ({
    opened,
    close,
    formTitle,
    initialValues,
    handleAddUser,
}: UserFormProps) => {
    const form = useForm({
        mode: 'uncontrolled',
        initialValues: initialValues ?? defaultInitialValues,
    });

    // Note: normally we would want to add validation, etc to our forms

    return (
        <Modal opened={opened} onClose={close} title={formTitle}>
            <form onSubmit={form.onSubmit((values) => handleAddUser(values))}>
                <TextInput
                    label="Name"
                    placeholder="User's name"
                    key={form.key('name')}
                    {...form.getInputProps('name')}
                />
                <TextInput
                    label="Email"
                    placeholder="User's email"
                    key={form.key('email')}
                    mt="md"
                    {...form.getInputProps('email')}
                />
                <TextInput
                    label="Phone"
                    placeholder="User's phone"
                    key={form.key('phone')}
                    mt="md"
                    {...form.getInputProps('phone')}
                />
                <Group justify="flex-end" mt="lg">
                    <Button type="submit">Submit</Button>
                </Group>
            </form>
        </Modal>
    );
};

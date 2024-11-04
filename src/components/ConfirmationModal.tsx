import { Button, Group, Modal } from '@mantine/core';

type ConfirmationModalProps = {
    title: string;
    actionText: string;
    buttonText: string;
    handleConfirmation: () => void;
    opened: boolean;
    close: () => void;
};

export const ConfirmationModal = ({
    title,
    actionText,
    buttonText,
    handleConfirmation,
    opened,
    close,
}: ConfirmationModalProps) => {
    return (
        <Modal opened={opened} onClose={close} title={title}>
            Are you sure you want to {actionText}?
            <Group justify="flex-end" mt="lg">
                <Button variant="outline" onClick={close}>
                    Cancel
                </Button>
                <Button onClick={handleConfirmation}>{buttonText}</Button>
            </Group>
        </Modal>
    );
};

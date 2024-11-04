import { Outlet } from 'react-router-dom';
import { AppShell, Container, NavLink, Title } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHatWizard } from '@fortawesome/free-solid-svg-icons';
import { navLinks } from '../app/config';

// Note: some of the styles added to the Mantine components could be customized in the theme object instead
export const Layout = () => {
    return (
        <>
            <AppShell header={{ height: 60 }} padding="lg">
                <AppShell.Header
                    pl="md"
                    pr="md"
                    style={{ display: 'flex', alignItems: 'center' }}
                >
                    <FontAwesomeIcon
                        icon={faHatWizard}
                        size="xl"
                        color="var(--mantine-primary-color-filled)"
                    />
                    <Title
                        order={3}
                        pr="lg"
                        pl="xs"
                        c="var(--mantine-primary-color-filled)"
                    >
                        Example, Inc.
                    </Title>
                    {navLinks.map((navLink, index) => (
                        <NavLink
                            href={navLink.href}
                            label={navLink.label}
                            w="auto"
                            key={`navlink-${index}`}
                        />
                    ))}
                </AppShell.Header>
                <AppShell.Main bg="gray.0">
                    <Container>
                        <Outlet />
                    </Container>
                </AppShell.Main>
            </AppShell>
        </>
    );
};

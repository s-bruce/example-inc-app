import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
// Normally I would use absolute paths for all imports. But for time, I took advantage of autocomplete.
import { Router } from './Router';
import { theme } from '../styles/theme';

export const App = () => {
    return (
        <MantineProvider theme={theme}>
            <Router />
        </MantineProvider>
    );
};

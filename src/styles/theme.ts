import { Button, createTheme } from '@mantine/core';

// There's a lot more we can customize here. This is just an example of how to create a custom theme.
export const theme = createTheme({
    primaryColor: 'violet',
    components: {
        Button: Button.extend({
            styles: {
                root: { borderRadius: '24px' },
            },
        }),
    },
});

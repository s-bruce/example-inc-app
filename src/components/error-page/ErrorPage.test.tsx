import { render, screen } from '@testing-library/react';
import { ErrorPage } from './ErrorPage';

describe('ErrorPage Component', () => {
    test('renders with given title and text', () => {
        const title = 'Error 404';
        const text = 'Page Not Found';

        render(<ErrorPage title={title} text={text} />);

        expect(screen.getByText(title)).toBeInTheDocument();
        expect(screen.getByText(text)).toBeInTheDocument();
    });

    test('renders children when provided', () => {
        const title = 'Error 500';
        const text = 'Internal Server Error';
        const childText = 'Please try again later';

        render(
            <ErrorPage title={title} text={text}>
                <div>{childText}</div>
            </ErrorPage>
        );

        expect(screen.getByText(title)).toBeInTheDocument();
        expect(screen.getByText(text)).toBeInTheDocument();
        expect(screen.getByText(childText)).toBeInTheDocument();
    });
});

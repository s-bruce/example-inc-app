import { Link } from 'react-router-dom';
import { Path } from '../config';
import { ErrorPage } from '../../components/error-page/ErrorPage';

export const NotFound = () => {
    return (
        <ErrorPage
            title="Page Not Found"
            text="The page you are looking for could not be found."
        >
            <Link to={{ pathname: Path.Dashboard }}>Go to Dashboard</Link>
        </ErrorPage>
    );
};

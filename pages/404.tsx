import Link from 'next/link';
import { AppWrapper } from '../components/AppWrapper';

const ErrorPage = () => {
    return (
        <AppWrapper title="Page not found">
            <Link href='/'><a>Back to Home</a></Link>
            <h1>Page Not found</h1>
        </AppWrapper>
    )
}

export default ErrorPage;
import Link from 'next/link';
import { AppWrapper } from '../components/AppWrapper';
import { Wrapper, ErrorTitle } from '../styles/404';

const ErrorPage = () => {
    return (
        <AppWrapper title="| 404">
            <Wrapper>
                <ErrorTitle>Page Not found...</ErrorTitle>
            </Wrapper>
        </AppWrapper>
    )
}

export default ErrorPage;
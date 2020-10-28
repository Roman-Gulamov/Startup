import Link from 'next/link';
import { AppWrapper } from '../components/AppWrapper';
import { Wrapper, HomeTitle, HomeSubtitle, HomeButton } from '../styles/Home';

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';

const Index = () => {
    return (
        <AppWrapper>
            <Wrapper>
                <HomeTitle>Welcome to startup</HomeTitle>
                <HomeSubtitle>Your favourite creative agency template</HomeSubtitle>
                <Link href='/contact' as={`${prefix}/contact`}><HomeButton>Get started</HomeButton></Link>
            </Wrapper>
        </AppWrapper>
    )
}

export default Index;   

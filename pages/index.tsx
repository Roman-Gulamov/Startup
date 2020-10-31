import Link from 'next/link';
import { AppWrapper } from '../components/AppWrapper';
import { Wrapper, HomeTitle, HomeSubtitle, HomeButton } from '../styles/Home';

const Index = (): JSX.Element => {
    return (
        <AppWrapper>
            <Wrapper>
                <HomeTitle>Welcome to startup</HomeTitle>
                <HomeSubtitle>Your favourite creative agency template</HomeSubtitle>
                <Link href='/contact'><HomeButton>Get started</HomeButton></Link>
            </Wrapper>
        </AppWrapper>
    )
}

export default Index;   

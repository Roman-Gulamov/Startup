import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Image from 'next/image';

import { AppWrapper } from '../../components/AppWrapper';
import { ItemImage } from '../../styles/Item';

import { BlogProps, IBlog, PostNextPageContext } from '../../interfaces/interface';

import loading from '../../assets/images/loading.svg';
import { Loading } from '../../styles/Loading';

import { 
    WrapperItem,
    BlogContent,
    ContentHeader,
    HeaderDate, 
    HeaderDescription, 
    DescriptionTitle, 
    DescriptionAuthor, 
    ContentText, 
    ContentRead } from '../../styles/Blog';


const Blog = ({ blog: serverBlog } : BlogProps): JSX.Element => {
    const router = useRouter();
    const [blogPost, setBlogPost] = useState<Array<IBlog>>(serverBlog);

    useEffect(() => {
        const load = async () => {
            const response = await fetch(`${process.env.API_URL}/blog/${router.query.id}`);
            const data = await response.json();
            setBlogPost(data);
        }

        if (!serverBlog) {
            load();
        }
    }, []);

    if (!blogPost) {
        return (
            <AppWrapper title={`| Post - ${router.query.id}`}>
                <Loading>
                    <img src={loading} alt="loading..." />
                </Loading>
            </AppWrapper>
        )
    } else {
        return (
            <AppWrapper title={`| Post - ${router.query.id}`}>
                <WrapperItem blogPost>
                    <ContentRead blogPost>
                        <Link href="/blog">
                            <a><FontAwesomeIcon icon={faArrowLeft} size="2x" /></a>
                        </Link>
                    </ContentRead>
                    <ItemImage width="40%" blog>
                        <Image src={blogPost.image} alt={blogPost.title} unsized={true} />
                    </ItemImage>
                    <BlogContent blogPost>
                        <ContentHeader>
                            <HeaderDate>
                                <span>{blogPost.date}</span>
                                <span>{blogPost.month}</span>
                            </HeaderDate>
                            <HeaderDescription>
                                <DescriptionTitle>{blogPost.title}</DescriptionTitle>
                                <DescriptionAuthor>
                                    By 
                                    <span> {blogPost.name} </span>
                                    in 
                                    <span> {blogPost.direction}</span>
                                </DescriptionAuthor>
                            </HeaderDescription>
                        </ContentHeader>
                        <ContentText>{blogPost.text}{blogPost.text}{blogPost.text}</ContentText>
                    </BlogContent>
                </WrapperItem>
            </AppWrapper>
        )
    }
}

export default Blog;


Blog.getInitialProps = async ({query, req}: PostNextPageContext) => { 
    if (!req) { 
        return {blog: null}
    }
    const response = await fetch(`${process.env.API_URL}/blog/${query.id}`);
    const blog: IBlog = await response.json();

    return {
        blog
    }
}
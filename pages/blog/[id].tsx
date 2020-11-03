import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Image from 'next/image';

import { AppWrapper } from '../../components/AppWrapper';
import { ItemImage } from '../../styles/Item';

import { BlogPostProps, IBlog } from '../../interfaces/interface';

import loading from '../../assets/loading.svg';
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


const Blog = ({ blog: serverBlog } : BlogPostProps): JSX.Element => {
    const router = useRouter();
    const [blogPost, setBlogPost] = useState<IBlog>(serverBlog);

    useEffect(() => {
        const load = async () => {
            const response = await fetch(`${process.env.API_URL}/blog/${router.query.id}`);
            const json = await response.json();
            setBlogPost(json);
        }

        !serverBlog ? load() : null;
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


export const getStaticPaths = async () => {
    const response = await fetch(`${process.env.API_URL}/blog`)
    const blog: IBlog[] = await response.json()

    const paths = blog.map((blog) => ({
        params: { id: blog.id },
    }))

    return { 
        paths, 
        fallback: false 
    }
}

export const getStaticProps = async ({ params, req }) => {
    if (!req) { 
        return {props: { blog: null }}
    }

    const response = await fetch(`${process.env.API_URL}/blog/${params.id}`)
    const blog: IBlog = await response.json()
    
    return {
        props: { 
            blog,
            revalidate: 1
        }
    }
}



import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { AppWrapper } from '../components/AppWrapper';

import { NextPageContext } from 'next';
import { BlogProps, IBlog } from '../interfaces/interface';

import loading from '../assets/loading.svg';
import { Loading } from '../styles/Loading';
import { ItemImage } from '../styles/Item';
import { 
    WrapperItem,
    BlogContent,
    ContentHeader,
    HeaderDate, 
    HeaderDescription, 
    DescriptionTitle, 
    DescriptionAuthor, 
    ContentText, 
    ContentRead } from '../styles/Blog';


const Blog = ({ blog: serverBlog }: BlogProps): JSX.Element => {
    const [blog, setBlog] = useState<Array<IBlog>>(serverBlog);
    
    useEffect(() => {
        const load = async () => {
            const response = await fetch(`${process.env.API_URL}/blog`);
            const json = await response.json();
            setBlog(json);
        }

        !serverBlog ? load() : null;
    }, [])

    
    if (!blog) {
        return (
            <AppWrapper title='| Blog'>
                <Loading>
                    <img src={loading} alt="loading..." />
                </Loading>
            </AppWrapper>
        )
    } else {
        return (
            <AppWrapper  title="| Blog">
                {blog.map(({ id, image, date, month, title, name, direction, text }: IBlog) =>
                    <WrapperItem key={id}>
                        <ItemImage width="40%" blog>
                            <Image src={image} alt={title} unsized={true} />
                        </ItemImage>
                        <BlogContent>
                            <ContentHeader>
                                <HeaderDate>
                                    <span>{date}</span>
                                    <span>{month}</span>
                                </HeaderDate>
                                <HeaderDescription>
                                    <DescriptionTitle>{title}</DescriptionTitle>
                                    <DescriptionAuthor>
                                        By 
                                        <span> {name} </span>
                                        in 
                                        <span> {direction}</span>
                                    </DescriptionAuthor>
                                </HeaderDescription>
                            </ContentHeader>
                            <ContentText>{text}</ContentText>
                            <ContentRead>
                                <Link href={`/blog/[id]`} as={`/blog/${id}`}><a>Read more</a></Link>
                            </ContentRead>
                        </BlogContent>
                    </WrapperItem>
                )}
            </AppWrapper>
        )
    }
}

export default Blog;


Blog.getInitialProps = async ({ req }: NextPageContext) => {
    if (!req) {
        return {blog: null}
    }

    const response = await fetch(`${process.env.API_URL}/blog`);
    const blog: IBlog = await response.json();

    return {
        blog
    }
}
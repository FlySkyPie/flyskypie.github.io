import React from 'react';
import Layout from '@theme/Layout';

import styles from './styles.module.scss';

type IPostMeta = {
    _date: Date,
    date: string,
    formattedDate: string,
    title: string,
    permalink: string,
}

const allPosts: IPostMeta[] = ((ctx) => {
    const blogpostNames = ctx.keys();

    return blogpostNames.reduce<IPostMeta[]>(
        (blogposts, blogpostName) => {
            const module = ctx(blogpostName);
            const { date, formattedDate, title, permalink } = module.metadata;

            return [
                ...blogposts,
                {
                    date,
                    formattedDate,
                    title,
                    permalink,
                    _date: new Date(date)
                },
            ];
        }, []).sort((a, b) => b._date.getTime() - a._date.getTime());
})(require.context('../../../blog', true, /.*\.md/));

export default function Hello() {
    return (
        <Layout
            title='數位手記'
            description="FlyPie's blog posts.">
            <div className={styles.root}>
                <h1>數位手記</h1>
                <ul>
                    {allPosts.map((item, index) => (
                        <li key={index}>
                            <a href={`${item.permalink}`}>{item.title}</a>{" "}
                        </li>
                    ))}
                </ul>
            </div>
        </Layout>
    );
};
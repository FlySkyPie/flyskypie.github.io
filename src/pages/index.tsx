import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import ProjectGenerator from '@site/src/components/ProjectGenerator';
import Head from '@docusaurus/Head';

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="FlyPie's website.">
      <main>
        <Head>
          <meta property="og:image" content="https://i.imgur.com/Mmyl0y8.png" />
        </Head>
        <ProjectGenerator />
      </main>
    </Layout>
  );
}

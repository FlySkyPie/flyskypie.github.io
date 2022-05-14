import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import ProjectGenerator from '@site/src/components/ProjectGenerator';

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="FlyPie's website.">
      <main>
        <ProjectGenerator />
      </main>
    </Layout>
  );
}

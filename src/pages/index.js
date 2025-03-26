import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          MUDA Liquidity Rail
        </Heading>
        <p className="hero__subtitle">
          The Liquidity Rail is a platform that enables users to easily convert stablecoins to fiat currency through a seamless and simple process. Our mission is to revolutionize cross-border payments and provide a robust solution for both individuals and enterprises.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/intro">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Muda - Financial Solutions for East Africa`}
      description="Muda is a platform that helps you to Buy, sell, trade, and send different currencies across borders. Access the deepest liquidity on the continent today!">
        <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
const FeatureList = [
  {
    title: 'Instant Payments',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Send money instantly to bank accounts and mobile wallets with secure, borderless transactions. Our blockchain-powered platform ensures low fees, real-time settlements, and global access.
      </>
    ),
  },
  {
    title: 'Online Ramp',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        The Liquidity Rail provides an online ramp for users to seamlessly sell crypto and receive fiat (UGX, KES, GHS, NGN, etc.) directly in their bank accounts or mobile money wallets. 
      </>
    ),
  },
  {
    title: 'Multi-Currency/Assets Support',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        The Liquidity Rail facilitates seamless transactions across multiple blockchains and currencies, including Stellar (USDC, CNGN), Celo (CUSD), Tron (USDT), BSC (CNGN), and Bantu Blockchain (CNGN, KES, UGX, ZAR).
      </>
    ),
  },
];





function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={`${styles.featureSvg} featured-icon`} role="img"/>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}




export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

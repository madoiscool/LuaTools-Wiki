import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: ReactNode;
  buttonText?: string;
  buttonLink?: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Steam Plugin',
    image: require('@site/static/img/steam-plugin.png').default,
    description: (
      <>
        Achievements, overlay, workshop, DLC unlocking, online fixes, co-op via
        unsteam, and Denuvo support — all in one plugin.
      </>
    ),
    buttonText: 'Get Started',
    buttonLink: '/docs/luatools/steam-plugin/get-started',
  },
  {
    title: 'Game Fixes',
    image: require('@site/static/img/fixes.png').default,
    description: (
      <>
        Game-specific patches, DRM bypasses, and online fixes. Apply them directly
        from the plugin's Fixes menu on any game's store page.
      </>
    ),
    buttonText: 'Browse Fixes',
    buttonLink: '/docs/luatools/fixes',
  },
  {
    title: 'Discord',
    image: require('@site/static/img/discord.png').default,
    description: (
      <>
        Join the Discord to get updates when things change, ask for help, and stay
        connected with the community.
      </>
    ),
    buttonText: 'Join Discord',
    buttonLink: 'https://discord.gg/luatools',
  },
];

function Feature({title, image, description, buttonText, buttonLink}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={image} className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        {buttonText && buttonLink && (
          <Link
            className="button button--secondary button--sm"
            to={buttonLink}>
            {buttonText}
          </Link>
        )}
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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

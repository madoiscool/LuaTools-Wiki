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
        The LuaTools Steam Plugin provides powerful tools and utilities for Lua
        development within Steam. Get started with seamless integration and enhanced workflows.
      </>
    ),
    buttonText: 'View Plugin',
    buttonLink: '/docs/luatools/steam-plugin',
  },
  {
    title: 'Discord',
    image: require('@site/static/img/discord.png').default,
    description: (
      <>
        Join our Discord community to stay up to date with LuaTools updates,
        get help, and connect with other developers.
      </>
    ),
    buttonText: 'Join Discord',
    buttonLink: '/docs/luatools/discord',
  },
  {
    title: 'Game Fixes',
    image: require('@site/static/img/fixes.png').default,
    description: (
      <>
        Browse our community-maintained compatibility list to see which games
        work with LuaTools and what bypasses or configurations are needed.
      </>
    ),
    buttonText: 'View Fixes',
    buttonLink: '/docs/game-fix/all-fixes',
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

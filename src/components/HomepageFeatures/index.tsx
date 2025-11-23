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
        LuaTools provides intuitive APIs and clear documentation to help you
        get started quickly with Lua development.
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
        Find everything you need in one place. From getting started guides to
        advanced usage examples, we&apos;ve got you covered.
      </>
    ),
    buttonText: 'Join Discord',
    buttonLink: '/docs/luatools/discord',
  },
  {
    title: 'Wiki',
    image: require('@site/static/img/fixes.png').default,
    description: (
      <>
        LuaTools offers a wide range of utilities and tools to enhance your
        Lua development workflow and productivity.
      </>
    ),
    buttonText: 'Browse Wiki',
    buttonLink: '/docs/intro',
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

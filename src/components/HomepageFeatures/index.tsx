import React from "react";

import clsx from "clsx";

import UndrawDocusaurusMountain from "@site/static/img/undraw_docusaurus_mountain.svg";
import UndrawDocusaurusReact from "@site/static/img/undraw_docusaurus_react.svg";
import UndrawDocusaurusTree from "@site/static/img/undraw_docusaurus_tree.svg";

import styles from "./styles.module.css";

interface FeatureItem {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
}

const FeatureList: FeatureItem[] = [
  {
    title: "SUI Components",
    Svg: UndrawDocusaurusReact,
    description: (
      <>
        SUI Components is an Open-Source, high quality library of React
        components that empowers teams to craft any product with ease.
      </>
    ),
  },
  {
    title: "Design Ops",
    Svg: UndrawDocusaurusMountain,
    description: (
      <>
        Everything about DesignOps: Design Systems, Processes, UI Kits, Figma,
        Code, Design Guidelines, Tokens, Plugins, Colours, Themes, Tips, and a
        long etcétera
      </>
    ),
  },
  {
    title: "SUI Tools",
    Svg: UndrawDocusaurusTree,
    description: (
      <>
        SUI is a set of packages which goal to ease development of SUI-based
        components and web apps.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem): JSX.Element {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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

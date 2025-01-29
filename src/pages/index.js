import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import RoboticIllustration from '@site/static/img/robotic-human.svg';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title="Home"
      description="Akhilesh Gonabal - Research Assistant & Robotics Engineer">
      <main className="hero">
        <div className="container">
          <div className="row">
            <div className="col col--6">
              <h1 className="hero__title">{siteConfig.title}</h1>
              <p className="hero__subtitle">
                Research Assistant at IISc developing bio-inspired robotic systems for complex inspection tasks
              </p>
              <div className="buttons-row">
                <Link
                  className="button button--primary button--lg"
                  to="/files/resume.pdf">
                  View Resume
                </Link>
                <Link
                  className="button button--secondary button--lg"
                  to="https://github.com/akhilG05">
                  GitHub Profile
                </Link>
              </div>
            </div>
            <div className="col col--6">
              <div className="hero__illustration-container">
                <RoboticIllustration className="hero__illustration" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

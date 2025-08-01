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
      description="Akhilesh Gonabal - Roboticist">
      <main className="hero">
        <div className="container">
          <div className="row">
            {/* Left Column: Welcome Text & CTAs */}
            <div className="col col--6">
              <h1 className="hero__title">Hello, I'm Akhilesh</h1>
              <p className="hero__subtitle">
                  Engineering Intelligent Systems for a Sustainable World              
              </p>
              <div className="buttons-row">
                <Link
                  className="button button--primary button--lg"
                  to="/img/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer">
                  View Resume
                </Link>
                <Link
                  className="button button--secondary button--lg"
                  to="https://github.com/akhilG05"
                  target="_blank"
                  rel="noopener noreferrer">
                  GitHub Profile
                </Link>
              </div>
            </div>
            {/* Right Column: Illustration */}
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

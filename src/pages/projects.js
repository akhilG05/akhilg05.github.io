import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import ThemedImage from '@theme/ThemedImage';
import styles from './projects.module.css';

const ImageCarousel = ({ images, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  const goToNext = () => {
    setCurrentIndex((current) => (current + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((current) => (current - 1 + images.length) % images.length);
  };

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.imageWrapper}>
        <ThemedImage
          sources={{
            light: images[currentIndex],
            dark: images[currentIndex].replace('.', '-dark.')
          }}
          alt={`Project slide ${currentIndex + 1}`}
          className={styles.carouselImage}
        />
      </div>
      
      {images.length > 1 && (
        <>
          <button 
            onClick={goToPrevious} 
            className={clsx(styles.carouselButton, styles.prevButton)}
            aria-label="Previous image"
          >
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" fill="none">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={goToNext} 
            className={clsx(styles.carouselButton, styles.nextButton)}
            aria-label="Next image"
          >
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" fill="none">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <div className={styles.imageDots}>
            {images.map((_, idx) => (
              <button
                key={idx}
                className={clsx(styles.dot, {
                  [styles.activeDot]: idx === currentIndex,
                })}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const projects = [
  {
    title: "Bio-inspired Multi-modal Robot",
    period: "2024 - Present",
    description: "Leading the development of an innovative autonomous robotic system designed for complex inspection tasks in constrained environments. This project combines bio-inspired design principles with cutting-edge robotics technology.",
    highlights: [
      "Designed and implemented modular mechanisms enabling navigation through 90° bends in industrial pipelines",
      "Integrated Intel D435i depth camera and Jetson Nano for real-time SLAM implementation",
      "Reduced inspection operating costs by 89% from Rs.1000/meter to Rs.108/meter",
      "Developed custom ROS packages for autonomous navigation and inspection protocols",
    ],
    tech: "ROS, Jetson Nano, Intel RealSense, SolidWorks, Python, C++",
    images: [
      require('@site/static/img/robot-project.png').default,
      require('@site/static/img/robot-demo.gif').default,
      require('@site/static/img/robot-project.png').default,
    ]
  },
  {
    title: "ACPS Lab Platform",
    period: "2022 - 2024",
    description: "Created a comprehensive lab-scale cyber-physical system platform for education and research.",
    highlights: [
      "Developed multiple sensor-actuator nodes with ARM-based microcontrollers",
      "Implemented layered edge, fog, and cloud computing architecture",
      "Improved practical understanding by 28% based on student feedback",
    ],
    tech: "STM32, ESP32, MQTT, Python, Web Technologies",
    images: [
      require('@site/static/img/robot-project.png').default,
      require('@site/static/img/robot-demo.gif').default,
      require('@site/static/img/robot-project.png').default,
    ]
  },
  {
    title: "Smart City Project",
    period: "2019",
    description: "Engineered a scalable IoT-driven smart city model for autonomous resource management.",
    highlights: [
      "Implemented MQTT-based wireless communication protocol",
      "Integrated automated emergency response and delivery systems",
      "Developed real-time monitoring and route optimization",
    ],
    tech: "Python, Arduino, Raspberry Pi, MQTT, JavaScript",
    images: [
      require('@site/static/img/robot-project.png').default,
      require('@site/static/img/robot-demo.gif').default,
      require('@site/static/img/robot-project.png').default,
    ]
  },
  {
    title: "Home Assistance System",
    period: "2018 - 2019",
    description: "Developed an accessible interface for disabled and visually impaired users.",
    highlights: [
      "Integrated GSM module and ESP8266 for device control",
      "Implemented voice command system",
      "Created real-time notification system",
    ],
    tech: "Raspberry Pi, GSM Module, Python, Django",
    images: [
      require('@site/static/img/robot-project.png').default,
      require('@site/static/img/robot-demo.gif').default,
      require('@site/static/img/robot-project.png').default,
    ]
  },
];

export default function Projects() {
  const {siteConfig} = useDocusaurusContext();
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Layout
      title={`Projects | ${siteConfig.title}`}
      description="Featured projects showcasing expertise in robotics, IoT, and smart systems"
    >
      <main className="container margin-vert--lg">
        <h1 className={styles.pageTitle}>Featured Projects</h1>
        
        <div className={styles.tabContainer}>
          <div className={styles.tabList} role="tablist">
            {projects.map((project, idx) => (
              <button
                key={idx}
                role="tab"
                aria-selected={activeTab === idx}
                aria-controls={`panel-${idx}`}
                className={clsx(styles.tab, {
                  [styles.tabSelected]: activeTab === idx,
                })}
                onClick={() => setActiveTab(idx)}
              >
                {project.title}
              </button>
            ))}
          </div>

          <div className={styles.tabPanels}>
            {projects.map((project, idx) => (
              <div
                key={idx}
                role="tabpanel"
                id={`panel-${idx}`}
                aria-labelledby={`tab-${idx}`}
                className={clsx(styles.projectCard, {
                  [styles.activePanel]: activeTab === idx,
                  [styles.inactivePanel]: activeTab !== idx,
                })}
              >
                <ImageCarousel images={project.images} />
                <div className={styles.projectContent}>
                  <h2>{project.title}</h2>
                  <p className={styles.period}>{project.period}</p>
                  <p className={styles.description}>{project.description}</p>
                  <div className={styles.highlights}>
                    <h3>Key Achievements</h3>
                    <ul>
                      {project.highlights.map((highlight, i) => (
                        <li key={i}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                  <div className={styles.tech}>
                    <h3>Technologies Used</h3>
                    <p>{project.tech}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}
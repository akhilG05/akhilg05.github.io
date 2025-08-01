import React, { useState, useEffect, useCallback } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import ThemedImage from '@theme/ThemedImage';
import styles from './projects.module.css';

const projects = [
  {
    title: "Multimodal Mobile Robot",
    period: "2024 - Present",
    description: "Leading the development of an autonomous robotic system designed for inspection and surveillance in constrained environments. This project integrates bio-inspired design principles with real-time control and navigation, utilizing ROS2, Jetson Nano, and a distributed embedded system to enable multimodal mobility.",
    highlights: [
      "Simulated and Optimized Robot Mechanisms: Used SolidWorks Motion Analysis to calculate torque and force profiles, optimizing component selection for improved performance.",
      "Developed a Distributed Embedded System: Designed an architecture where local microcontrollers control individual mechanisms, with a Jetson Nano managing system-level control.",
      "Implemented CAN Protocol for Communication: Established efficient real-time communication between microcontrollers and the Jetson Nano using the CAN bus.",
      "Implemented Teleoperation Using ROS2 Over WiFi: Enabled remote control of the robot using ROS2, allowing wireless operation and testing.",
    ],
    tech: "ROS, Jetson Nano, Intel RealSense, SolidWorks, Python, C++",
    images: [
      require('@site/static/img/Ground.gif').default,
      require('@site/static/img/Pipe_Forward.gif').default,
      require('@site/static/img/Pipe_Revesre.gif').default,
      require('@site/static/img/Roll.gif').default,
    ]
  },
  {
    title: "ACPS Lab Platform",
    period: "2022 - 2024",
    description: "Designed and developed a lab-scale cyber-physical system platform for education and research. This platform features sensor-actuator nodes with ARM-based microcontrollers, a layered edge-fog-cloud computing architecture, and real-time data acquisition, providing hands-on experience in ACPS.",
    highlights: [
      "Developed Sensor-Actuator Nodes: Designed and implemented ARM-based microcontroller nodes (STM32, ESP32) for real-time data acquisition and control.",
      "Implemented a Layered Computing Architecture: Integrated edge, fog, and cloud computing to model cyber-physical system interactions.",
      "Enabled Hands-on Learning: Created an interactive platform for embedded systems, communication protocols, and system integration in education.",
      "Presented at the 11th ISSS National Conference: Showcased the platform’s impact on cyber-physical system education and research.",
    ],
    tech: "STM32, ESP32, MQTT, Python, Web Technologies",
    images: [
      require('@site/static/img/nodes.png').default,
      require('@site/static/img/nodes2.png').default,
      require('@site/static/img/nodes3.png').default,
      require('@site/static/img/thingsboard.png').default,
      require('@site/static/img/implemented_architecture.png').default,
    ]
  },
  {
    title: "Smart City Project",
    period: "2019",
    description: "Engineered a scalable IoT-driven innovative city model for autonomous resource management. This project incorporated MQTT-based communication, computer vision for real-time localization, and path-planning algorithms to optimize navigation and infrastructure automation.",
    highlights: [
      "Implemented MQTT-based Communication: Established Wi-Fi-based MQTT protocol for seamless data exchange between the central server and multiple autonomous bots.",
      "Developed an Image Processing System for Localization: Utilized OpenCV and ArUco markers for real-time tracking and localization of bots within the city grid.",
      "Designed and Integrated Path Planning Algorithms: Implemented Dijkstra’s algorithm for dynamic shortest path computation and navigation.",
      "Established Multi-Protocol Communication: Integrated I2C, Serial, and MySQL-based database handling for sensor data management and bot control.",
    ],
    tech: "Python, Arduino, Raspberry Pi, MQTT, JavaScript",
    images: [
      require('@site/static/img/smart_city.JPEG').default,
      // require('@site/static/img/smartcity.gif').default,
      require('@site/static/img/smartcity2.gif').default,
      require('@site/static/img/smart_city_architecture.jpg').default,
      require('@site/static/img/cv.jpg').default,
    ]
  },
  {
    title: "Home Assistance System",
    period: "2018 - 2019",
    description: "Developed a voice-controlled smart home system to enhance accessibility for disabled and visually impaired users. Using a Django-based web interface, the system integrated Raspberry Pi, ESP8266, and a GSM module for remote control, real-time monitoring, and automated alerts.",
    highlights: [
      "Developed a Web-Based Control System: Designed and implemented a Django-based web application for centralized home automation control.",
      "Integrated GSM and IoT Connectivity: Enabled remote device control using a GSM module (SIM800A) and ESP8266 for wireless communication.",
      "Implemented Voice Command Interface: Developed a speech recognition system using WebkitSpeechRecognition for hands-free operation.",
      "Designed Smart Home Monitoring Modules: Integrated fire, gas, and smoke detectors, a temperature and humidity sensor, and automated alerts for real-time safety monitoring.",
    ],
    tech: "Raspberry Pi, GSM Module, Python, Django",
    images: [
      require('@site/static/img/complete.jpg').default,
      require('@site/static/img/webApp.jpg').default,
      require('@site/static/img/overall2.jpg').default,
    ]
  },
];

const ImageCarousel = ({ images, interval = 2000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (images.length <= 1 || isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval, isPaused]);

  const goToNext = useCallback(() => {
    setCurrentIndex((current) => (current + 1) % images.length);
  }, [images.length]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((current) => (current - 1 + images.length) % images.length);
  }, [images.length]);

  return (
    <div
      className={styles.carouselContainer}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}>
      <div className={styles.imageWrapper}>
        <ThemedImage
          sources={{ light: images[currentIndex], dark: images[currentIndex] }}
          alt={`Project slide ${currentIndex + 1}`}
          className={styles.carouselImage}
        />
      </div>
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className={`${styles.carouselButton} ${styles.prevButton}`}
            aria-label="Previous image">
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" fill="none">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className={`${styles.carouselButton} ${styles.nextButton}`}
            aria-label="Next image">
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" fill="none">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <div className={styles.imageDots}>
            {images.map((_, idx) => (
              <button
                key={idx}
                className={`${styles.dot} ${idx === currentIndex ? styles.activeDot : ''}`}
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

export default function Projects() {
  const { siteConfig } = useDocusaurusContext();
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Layout
      title={`Projects`}
      description="Featured projects showcasing expertise in robotics, IoT, and smart systems">
      <main className="container padding-vert--lg">
        <h1 className={styles.pageTitle}>Featured Projects</h1>

        <div className={styles.tabContainer}>
          <div className={styles.tabList} role="tablist">
            {projects.map((project, idx) => (
              <button
                key={idx}
                role="tab"
                aria-selected={activeTab === idx}
                aria-controls={`panel-${idx}`}
                className={`${styles.tab} ${activeTab === idx ? styles.tabSelected : ''}`}
                onClick={() => setActiveTab(idx)}>
                <div className="flex flex-col items-center">
                  <span>{project.title}</span>
                </div>
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
                className={`${styles.projectCard} ${activeTab === idx ? styles.activePanel : styles.inactivePanel}`}>
                <ImageCarousel images={project.images} />
                <div className={styles.projectContent}>
                  <div className={styles.headerRow}>
                    <h2>{project.title}</h2>
                    <span className={styles.period}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {project.period}
                    </span>
                  </div>
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
                    <h3>Technical Stack</h3>
                    <div className={styles.techList}>
                      {project.tech.split(', ').map((tech, i) => (
                        <span key={i} className={styles.techPill}>
                          {tech}
                        </span>
                      ))}
                    </div>
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

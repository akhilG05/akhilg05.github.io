// src/pages/about.js
import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './about.module.css';

export default function About() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout title={`About`}>
      <main className={styles.container}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
        <div className={styles.imageColumn}>
            <div className={styles.imageWrapper}>
              <img 
                src="/img/profile.png" 
                alt="Akhilesh Gonabal" 
                className={styles.profileImage}
              />
            </div>
          </div>
          <div className={styles.contentColumn}>
            <h1>Akhilesh Anant Gonabal</h1>
            <p className={styles.roleTitle}>Research Assistant at IISc Bangalore</p>
            <p className={styles.description}>
              I am a robotics researcher and engineer passionate about developing intelligent automation systems for real‑world problem‑solving and sustainability. With expertise in embedded and cyber‑physical systems, I have worked on SCADA automation, IoT‑driven smart infrastructure, and multimodal autonomous robotics. Currently, at IISc, I am developing a bio‑inspired multimodal mobile robot for inspection and surveillance in constrained environments. I aim to leverage robotics, AI, and automation to advance agriculture, greentech, and sustainability, creating scalable solutions that drive efficiency and innovation.
            </p>
          </div>
        </div>

        {/* Education Section */}
        <div className={`${styles.card} ${styles.educationCard}`}>
          <h2>Education</h2>
          <div className={styles.experienceGrid}>
            <div className={styles.experienceItem}>
              <div className={styles.logoEntry}>
                <div className={styles.logoContainer}>
                  <img 
                    src="/img/nitk-logo.png" 
                    alt="NITK Logo"
                    className={styles.instituteLogo}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://placehold.co/80x80/e2e8f0/64748b?text=NITK`;
                    }}
                  />
                </div>
                <div className={styles.entryContent}>
                  <div className={styles.experienceHeader}>
                    <h3>B.Tech in Electrical and Electronics Engineering</h3>
                    <p className={styles.company}>National Institute of Technology Karnataka, Surathkal</p>
                    <p className={styles.period}>2016 - 2020 | CGPA: 7.63</p>
                  </div>
                  <p className={styles.description}>
                    Awarded merit scholarship for academic excellence by Government of Karnataka
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Experience */}
        <div className={`${styles.card} ${styles.experienceCard}`}>
          <h2>Professional Journey</h2>
          <div className={styles.experienceGrid}>
            {[
              {
                title: "Research Assistant",
                company: "IISc Bangalore",
                period: "2024 - Present",
                description: "Leading the development of multimodal mobile robotic systems",
                logo: "/img/iisc-logo.png",
                logoPlaceholder: "IISc"
              },
              {
                title: "Junior Research Fellow",
                company: "NITK Surathkal",
                period: "2022 - 2024",
                description: "Established advanced ACPS lab and developed virtual lab platforms",
                logo: "/img/csd-logo.jpg",
                logoPlaceholder: "NITK"
              },
              {
                title: "Lead Engineer",
                company: "TATA Power Company Ltd",
                period: "2020 - 2022",
                description: "Managed SCADA-based power distribution automation systems",
                logo: "/img/tata-logo.png",
                logoPlaceholder: "TATA"
              }
            ].map((exp, index) => (
              <div key={index} className={styles.experienceItem}>
                <div className={styles.logoContainer}>
                  <img 
                    src={exp.logo}
                    alt={`${exp.company} Logo`}
                    className={styles.instituteLogo}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://placehold.co/80x80/e2e8f0/64748b?text=${exp.logoPlaceholder}`;
                    }}
                  />
                </div>
                <div className={styles.entryContent}>
                  <div className={styles.experienceHeader}>
                    <h3>{exp.title}</h3>
                    <p className={styles.company}>{exp.company}</p>
                    <p className={styles.period}>{exp.period}</p>
                  </div>
                  <p className={styles.description}>{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Skills */}
        <div className={`${styles.card} ${styles.skillsCard}`}>
          <h2>Technical Skills</h2>
          <div className={styles.skillsContainer}>
            {[
              {
                category: "Programming Languages",
                icon: "💻",
                skills: [
                  { name: "Python", level: "Advanced" },
                  { name: "C/C++", level: "Advanced" },
                  { name: "JavaScript", level: "Intermediate" },
                  { name: "HTML/CSS", level: "Intermediate" }
                ]
              },
              {
                category: "Hardware & Embedded",
                icon: "🔧",
                skills: [
                  { name: "Jetson Nano", level: "Advanced" },
                  { name: "STM32", level: "Advanced" },
                  { name: "Arduino", level: "Advanced" },
                  { name: "Raspberry Pi", level: "Advanced" },
                  { name: "ESP32", level: "Advanced" },
                  { name: "Teensy", level: "Intermediate" }
                ]
              },
              {
                category: "Frameworks & Tools",
                icon: "🛠️",
                skills: [
                  { name: "ROS", level: "Advanced" },
                  { name: "Gazebo", level: "Advanced" },
                  { name: "RTOS", level: "Intermediate" },
                  { name: "LaTeX", level: "Advanced" },
                  { name: "MQTT", level: "Intermediate" }
                ]
              },
              {
                category: "Software & Simulation",
                icon: "📊",
                skills: [
                  { name: "MATLAB", level: "Advanced" },
                  { name: "Simulink", level: "Advanced" },
                  { name: "LabVIEW", level: "Intermediate" },
                  { name: "Fusion 360", level: "Intermediate" },
                  { name: "SolidWorks", level: "Intermediate" }
                ]
              }
            ].map((category, index) => (
              <div key={index} className={styles.skillCategory}>
                <div className={styles.categoryHeader}>
                  <span className={styles.categoryIcon}>{category.icon}</span>
                  <h3>{category.category}</h3>
                </div>
                <div className={styles.skillGrid}>
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className={styles.skillBadge}>
                      <span className={styles.skillName}>{skill.name}</span>
                      <span className={`${styles.skillLevel} ${styles[skill.level.toLowerCase()]}`}>
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}

// src/pages/publications.js
import React from 'react';
import Layout from '@theme/Layout';
import styles from './publications.module.css';

const publications = [
  {
    type: 'Patent',
    title: 'A System for Inspection and Maintenance of Complex Environments Using Multiple-Modal Operations and Method Thereof',
    authors: 'Akhilesh Anant Gonabal, et al.',
    venue: 'Indian Patent Office',
    status: 'Published and Awaiting Examination',
    date: 'December 2024',
    id: 'Application No. 202441099717'
  },
  {
    type: 'Conference Paper',
    title: 'Lab Experimental Framework for Demonstrating Integral Concepts of Applied Cyber-Physical Systems',
    authors: 'Akhilesh Anant Gonabal, Neil Jose, K V Gangadharan',
    venue: 'Eleventh ISSS National Conference on MEMS, Smart Materials, Structures and Systems',
    location: 'Coimbatore, India',
    date: 'December 2023',
    paperLink: '/img/ACPS_Lab_Experimental_Framework.pdf',
    certificateLink: '/img/ISSS_2023_Certificate.pdf'
  }
];

export default function Publications() {
  return (
    <Layout title="Publications">
      <main className="container padding-vert--lg">
        <h1 className={styles.pageTitle}>Publications & Patents</h1>
        <div className={styles.publicationsContainer}>
          {publications.map((pub, idx) => (
            <div key={idx} className={styles.publicationCard}>
              <div className={styles.pubType}>{pub.type}</div>
              <h2 className={styles.pubTitle}>{pub.title}</h2>
              <p className={styles.authors}>{pub.authors}</p>
              <p className={styles.venue}>
                {pub.venue}
                {pub.location && ` • ${pub.location}`}
                {` • ${pub.date}`}
              </p>
              {pub.status && (
                <p className={styles.status}>Status: {pub.status}</p>
              )}
              {pub.id && (
                <p className={styles.id}>{pub.id}</p>
              )}
              {(pub.paperLink || pub.certificateLink) && (
                <div className={styles.links}>
                  {pub.paperLink && (
                    <a
                      href={pub.paperLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.linkButton}>
                      View Paper
                    </a>
                  )}
                  {pub.certificateLink && (
                    <a
                      href={pub.certificateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.linkButton}>
                      View Certificate
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}

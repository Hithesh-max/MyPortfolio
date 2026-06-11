'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './Education.module.css';

const education = [
  {
    degree: 'B.E. Information Technology',
    institution: 'MIT Manipal',
    location: 'Manipal, Karnataka',
    period: 'Expected Aug 2028',
    score: 'CGPA: 7.2',
    color: '#60a5fa',
    icon: '🎓',
    highlights: [
      'Active member of ACM Technical Club',
      'Part of VARISE Game Development student project',
      'Specializing in AI, ML, and Web Development',
    ],
    badge: '3rd Year',
  },
  {
    degree: '11th & 12th Science',
    institution: 'Amarajyothi PU College',
    location: 'Sullia, Karnataka',
    period: 'Completed May 2024',
    score: 'Scored 94%',
    color: '#34d399',
    icon: '📚',
    highlights: [
      'Excelled in Physics, Mathematics & Computer Science',
      'Strong foundation in analytical thinking',
    ],
    badge: 'Science Stream',
  },
  {
    degree: 'High School',
    institution: 'Saint Joseph School',
    location: 'Sullia, Karnataka',
    period: 'Completed April 2022',
    score: 'Scored 98% · Top 10%',
    color: '#a78bfa',
    icon: '🏫',
    highlights: [
      'Ranked in Top 10% of the class',
      'Strong academic performance across all subjects',
    ],
    badge: 'Top 10%',
  },
];

const certifications = [
  {
    title: 'Structuring Machine Learning Projects',
    issuer: 'DeepLearning.AI · Coursera',
    color: '#fb923c',
    icon: '🧠',
  },
  {
    title: 'Generative and Agentic AI',
    issuer: 'Coursera',
    color: '#60a5fa',
    icon: '🤖',
  },
  {
    title: 'Neural Networks and Deep Learning',
    issuer: 'Coursera',
    color: '#34d399',
    icon: '⚡',
  },
  {
    title: 'AI Internship',
    issuer: 'Byosync · 2 Months',
    color: '#a78bfa',
    icon: '💼',
  },
  {
    title: '120+ LeetCode Problems',
    issuer: 'Competitive Programming',
    color: '#fbbf24',
    icon: '🏆',
  },
];

export default function Education() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="education" className={`section ${styles.education}`}>
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <p className="section-label">Academic Background</p>
          <h2 className="section-title">
            <span className="gradient-text">Education</span> & Certifications
          </h2>
        </motion.div>

        {/* Education cards */}
        <div className={styles.eduGrid}>
          {education.map((edu, i) => (
            <motion.div
              key={edu.institution}
              className={`glass-card ${styles.eduCard}`}
              style={{ '--edu-color': edu.color } as React.CSSProperties}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              whileHover={{ y: -6 }}
            >
              <div className={styles.eduTop}>
                <span className={styles.eduIcon}>{edu.icon}</span>
                <span className={styles.eduBadge} style={{ color: edu.color, borderColor: `${edu.color}30`, background: `${edu.color}10` }}>
                  {edu.badge}
                </span>
              </div>
              <h3 className={styles.degree}>{edu.degree}</h3>
              <p className={styles.institution} style={{ color: edu.color }}>{edu.institution}</p>
              <p className={styles.location}>📍 {edu.location}</p>

              <div className={styles.scoreRow}>
                <span className={styles.score}>{edu.score}</span>
                <span className={styles.period}>{edu.period}</span>
              </div>

              <div className={styles.highlights}>
                {edu.highlights.map(h => (
                  <div key={h} className={styles.highlight}>
                    <span style={{ color: edu.color }}>▸</span>
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          className={styles.certsSection}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <h3 className={styles.certsTitle}>Certifications & Achievements</h3>
          <div className={styles.certsGrid}>
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.title}
                className={`glass-card ${styles.certCard}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 + i * 0.08, duration: 0.5 }}
                whileHover={{ scale: 1.03, y: -3 }}
              >
                <div className={styles.certIcon} style={{ background: `${cert.color}15`, borderColor: `${cert.color}30` }}>
                  <span>{cert.icon}</span>
                </div>
                <div>
                  <p className={styles.certTitle}>{cert.title}</p>
                  <p className={styles.certIssuer}>{cert.issuer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

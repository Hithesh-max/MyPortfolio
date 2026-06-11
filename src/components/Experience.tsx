'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './Experience.module.css';

const experiences = [
  {
    role: 'AI Intern',
    company: 'Byosync',
    duration: '2 Months · 2024',
    type: 'Internship',
    color: '#60a5fa',
    points: [
      'Assisted in developing AI models for data analysis projects.',
      'Collaborated with team members to enhance machine learning algorithms.',
      'Conducted research on emerging AI technologies and trends.',
      'Supported the integration of AI tools into existing workflows.',
      'Utilized Python libraries such as Scikit-learn and TensorFlow.',
      'Performed exploratory data analysis to identify patterns and trends.',
      'Applied feature selection algorithms to predict potential outcomes.',
    ],
    tech: ['Python', 'Scikit-learn', 'TensorFlow', 'Pandas', 'EDA'],
  },
];

const activities = [
  { icon: '🎮', title: 'VARISE Game Dev', sub: 'Student Project · MIT Manipal', color: '#a78bfa' },
  { icon: '💻', title: 'ACM Technical Club', sub: 'Active Member · MIT Manipal', color: '#34d399' },
  { icon: '🧠', title: 'ML Research', sub: 'Self-directed learning & projects', color: '#fb923c' },
];

export default function Experience() {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section id="experience" className={`section ${styles.experience}`}>
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <p className="section-label">Work History</p>
          <h2 className="section-title">
            <span className="gradient-text">Experience</span> & Activities
          </h2>
        </motion.div>

        <div className={styles.timeline}>
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.role}
              className={styles.timelineItem}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.2, duration: 0.7 }}
            >
              <div className={styles.timelineDot} style={{ '--dot-color': exp.color } as React.CSSProperties} />
              <div className={styles.timelineLine} />

              <div className={`glass-card ${styles.expCard}`}>
                <div className={styles.expTop}>
                  <div>
                    <span className={styles.expType} style={{ color: exp.color, borderColor: `${exp.color}30`, background: `${exp.color}10` }}>
                      {exp.type}
                    </span>
                    <h3 className={styles.expRole}>{exp.role}</h3>
                    <p className={styles.expCompany}>@ {exp.company}</p>
                  </div>
                  <div className={styles.expDuration}>
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    {exp.duration}
                  </div>
                </div>

                <ul className={styles.points}>
                  {exp.points.map((point, pi) => (
                    <motion.li
                      key={pi}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + pi * 0.07 }}
                      className={styles.point}
                    >
                      <span className={styles.pointDot} style={{ background: exp.color }} />
                      {point}
                    </motion.li>
                  ))}
                </ul>

                <div className={styles.techTags}>
                  {exp.tech.map(t => (
                    <span key={t} className={styles.techTag}>{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Extra activities */}
        <motion.div
          className={styles.activitiesSection}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <h3 className={styles.activitiesTitle}>Clubs & Activities</h3>
          <div className={styles.activitiesGrid}>
            {activities.map((act, i) => (
              <motion.div
                key={act.title}
                className={`glass-card ${styles.actCard}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 + i * 0.1 }}
                whileHover={{ scale: 1.03 }}
              >
                <span className={styles.actIcon}>{act.icon}</span>
                <div>
                  <p className={styles.actTitle} style={{ color: act.color }}>{act.title}</p>
                  <p className={styles.actSub}>{act.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

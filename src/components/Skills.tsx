'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './Skills.module.css';

const skillGroups = [
  {
    category: 'AI & Machine Learning',
    icon: '🤖',
    color: '#60a5fa',
    skills: ['scikit-learn', 'PyTorch', 'TensorFlow', 'HuggingFace', 'XGBoost', 'RandomForest', 'CNN', 'LSTM', 'Regression'],
  },
  {
    category: 'Generative & Agentic AI',
    icon: '🧠',
    color: '#a78bfa',
    skills: ['LLM APIs', 'Generative AI', 'Agentic AI', 'Prompt Engineering', 'RAG'],
  },
  {
    category: 'Data Analysis',
    icon: '📊',
    color: '#34d399',
    skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'EDA', 'Feature Engineering'],
  },
  {
    category: 'Web Development',
    icon: '🌐',
    color: '#fb923c',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'REST APIs'],
  },
  {
    category: 'Programming Languages',
    icon: '💻',
    color: '#f472b6',
    skills: ['Python', 'Java', 'C/C++', 'SQL'],
  },
  {
    category: 'Tools & Platforms',
    icon: '🛠️',
    color: '#00d4ff',
    skills: ['GitHub', 'Linux', 'MongoDB', 'SQLite', 'AutoCAD', 'JavaFX', 'Maven', 'Gradle'],
  },
];

export default function Skills() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="skills" className={`section ${styles.skills}`}>
      {/* Kali bg texture */}
      <div className={styles.kaliBg} />

      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <p className="section-label">What I Know</p>
          <h2 className="section-title">
            My <span className="gradient-text">Skills & Tech</span>
          </h2>
          <p className={styles.subtitle}>
            A diverse toolkit spanning AI, data, and full-stack development.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              className={`glass-card ${styles.card}`}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: gi * 0.1, duration: 0.6 }}
            >
              <div className={styles.cardHeader}>
                <span className={styles.icon}>{group.icon}</span>
                <h3 className={styles.category}>{group.category}</h3>
              </div>
              <div className={styles.pills}>
                {group.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    className={styles.pill}
                    style={{
                      '--pill-color': group.color,
                      '--pill-bg': `${group.color}15`,
                      '--pill-border': `${group.color}30`,
                    } as React.CSSProperties}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: gi * 0.1 + si * 0.04, duration: 0.3 }}
                    whileHover={{ scale: 1.08, y: -2 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

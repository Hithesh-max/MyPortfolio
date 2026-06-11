'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './About.module.css';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
} as any;

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="container">
        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className={styles.inner}
        >
          {/* Left */}
          <motion.div variants={fadeUp} className={styles.left}>
            <p className="section-label">About Me</p>
            <h2 className="section-title">
              Crafting the future with <span className="gradient-text">Code & AI</span>
            </h2>
            <p className={styles.bio}>
              I&apos;m <strong>Hithesh D</strong>, a 3rd-year B.E. Information Technology student at 
              <strong> MIT Manipal</strong>, passionate about building intelligent systems that make a difference. 
              From training neural networks to deploying full-stack web apps, I thrive at the intersection 
              of AI and software engineering.
            </p>
            <p className={styles.bio}>
              I&apos;ve gained hands-on experience as an <strong>AI Intern at Byosync</strong>, where I 
              developed real-world ML models and contributed to production-grade AI pipelines. My journey 
              spans machine learning, generative AI, agentic systems, and web development.
            </p>
            <p className={styles.bio}>
              Outside of code, I&apos;m part of the <strong>ACM Technical Club</strong> and the 
              <strong> VARISE Game Development</strong> student project at MIT Manipal, where I blend 
              creativity with technology.
            </p>

            <div className={styles.languages}>
              {[
                { lang: 'English', level: 'C2 · Proficient', pct: 98 },
                { lang: 'Kannada', level: 'Native', pct: 100 },
                { lang: 'Hindi', level: 'C1 · Advanced', pct: 85 },
                { lang: 'German', level: 'A1 · Beginner', pct: 20 },
              ].map(l => (
                <div key={l.lang} className={styles.langItem}>
                  <div className={styles.langHeader}>
                    <span className={styles.langName}>{l.lang}</span>
                    <span className={styles.langLevel}>{l.level}</span>
                  </div>
                  <div className={styles.langBar}>
                    <motion.div
                      className={styles.langFill}
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${l.pct}%` } : { width: 0 }}
                      transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Stats */}
          <motion.div variants={fadeUp} className={styles.right}>
            <div className={styles.statsGrid}>
              {[
                { icon: '🏆', value: '120+', label: 'LeetCode Problems', color: '#f59e0b' },
                { icon: '🎓', value: '7.2', label: 'CGPA at MIT Manipal', color: '#60a5fa' },
                { icon: '🚀', value: '8+', label: 'Projects Built', color: '#34d399' },
                { icon: '🤖', value: '2mo', label: 'AI Internship', color: '#a78bfa' },
                { icon: '📜', value: '3+', label: 'Certifications', color: '#fb7185' },
                { icon: '⭐', value: '94%', label: '12th Grade Score', color: '#fbbf24' },
              ].map((s, i) => (
                <motion.div
                  key={s.label}
                  className={`glass-card ${styles.statCard}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: 0.1 * i, duration: 0.5, ease: 'backOut' }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className={styles.statIcon}>{s.icon}</span>
                  <span className={styles.statValue} style={{ color: s.color }}>{s.value}</span>
                  <span className={styles.statLabel}>{s.label}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              className={styles.infoCard}
              variants={fadeUp}
            >
              <div className={styles.infoRow}>
                <span className={styles.infoIcon}>📍</span>
                <span>Manipal, Karnataka, India</span>
              </div>
              <div className={styles.infoRow}>
                <span className={styles.infoIcon}>🏫</span>
                <span>MIT Manipal · B.E. IT · 3rd Year</span>
              </div>
              <div className={styles.infoRow}>
                <span className={styles.infoIcon}>📧</span>
                <a href="mailto:hitheshd12006@gmail.com" className={styles.infoLink}>hitheshd12006@gmail.com</a>
              </div>
              <div className={styles.infoRow}>
                <span className={styles.infoIcon}>📞</span>
                <span>+91 8867018459</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

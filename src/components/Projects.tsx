'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import styles from './Projects.module.css';

const projects = [
  {
    title: 'AI Study Assistant',
    desc: 'An intelligent study assistant powered by AI — live and deployed. Helps students with personalized learning, answers questions, and organizes study material.',
    image: null,
    tags: ['Generative AI', 'LLM', 'Python', 'Agentic AI'],
    live: 'https://willowy-sunflower-2ddb0d.netlify.app/',
    github: 'https://github.com/Hithesh-max?tab=repositories',
    color: '#60a5fa',
    featured: true,
    emoji: '🤖',
  },
  {
    title: 'Hotel Management System',
    desc: 'A full-featured hotel management dashboard built with JavaFX, Maven, and Gradle. Includes booking management, room tracking, occupancy stats, and a clean dark UI.',
    image: '/images/hotel.png',
    tags: ['JavaFX', 'Maven', 'Gradle', 'SQLite'],
    live: null,
    github: 'https://github.com/Hithesh-max?tab=repositories',
    color: '#34d399',
    featured: true,
    emoji: '🏨',
  },
  {
    title: 'Flappy Bird Clone',
    desc: 'A custom Flappy Bird game built from scratch with smooth physics, custom 3D-style bird character, animated obstacles, and real-time score tracking.',
    image: '/images/flappy.png',
    tags: ['Game Dev', 'Python', 'Pygame'],
    live: null,
    github: 'https://github.com/Hithesh-max?tab=repositories',
    color: '#a78bfa',
    featured: true,
    emoji: '🎮',
  },
  {
    title: 'Risk-Aware Vendor Forecasting',
    desc: 'ML-powered system for raw material requirement forecasting in manufacturing with vendor-wise risk analysis using ensemble models.',
    image: null,
    tags: ['Machine Learning', 'XGBoost', 'Pandas', 'Scikit-learn'],
    live: null,
    github: 'https://github.com/Hithesh-max?tab=repositories',
    color: '#fb923c',
    featured: false,
    emoji: '📊',
  },
  {
    title: 'Currency Converter',
    desc: 'Real-time currency converter with live exchange rates, clean UI, and support for 150+ currencies.',
    image: null,
    tags: ['JavaScript', 'API', 'HTML', 'CSS'],
    live: null,
    github: 'https://github.com/Hithesh-max?tab=repositories',
    color: '#00d4ff',
    featured: false,
    emoji: '💱',
  },
  {
    title: 'Expense Tracker',
    desc: 'Personal finance tracker with categorized spending, visual charts, and monthly budget summaries.',
    image: null,
    tags: ['React', 'JavaScript', 'Data Viz'],
    live: null,
    github: 'https://github.com/Hithesh-max?tab=repositories',
    color: '#f472b6',
    featured: false,
    emoji: '💰',
  },
  {
    title: 'Endless Runner Game',
    desc: 'A fast-paced endless runner game with procedurally generated levels, smooth animation, and increasing difficulty.',
    image: null,
    tags: ['Game Dev', 'Unity', 'C#'],
    live: null,
    github: 'https://github.com/Hithesh-max?tab=repositories',
    color: '#fbbf24',
    featured: false,
    emoji: '🏃',
  },
  {
    title: 'Data Analysis with AI',
    desc: 'Exploratory data analysis pipeline using AI models for automated insight generation, pattern detection, and visualization.',
    image: null,
    tags: ['Python', 'Pandas', 'Seaborn', 'AI'],
    live: null,
    github: 'https://github.com/Hithesh-max?tab=repositories',
    color: '#34d399',
    featured: false,
    emoji: '📈',
  },
];

export default function Projects() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="projects" className={`section ${styles.projects}`}>
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <p className="section-label">What I've Built</p>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className={styles.subtitle}>A selection of things I&apos;ve built — from AI agents to games.</p>
        </motion.div>

        {/* Featured projects */}
        <div className={styles.featuredGrid}>
          {projects.filter(p => p.featured).map((proj, i) => (
            <motion.div
              key={proj.title}
              className={`${styles.featuredCard}`}
              style={{ '--card-color': proj.color } as React.CSSProperties}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              whileHover={{ y: -8, scale: 1.01 }}
            >
              {/* Card top — image or placeholder */}
              <div className={styles.cardImage}>
                {proj.image ? (
                  <Image src={proj.image} alt={proj.title} fill style={{ objectFit: 'cover' }} />
                ) : (
                  <div className={styles.placeholderImage}>
                    <span className={styles.placeholderEmoji}>{proj.emoji}</span>
                    <span className={styles.placeholderText}>{proj.title}</span>
                  </div>
                )}
                <div className={styles.imageOverlay} />
                {proj.featured && (
                  <span className={styles.featuredBadge}>✨ Featured</span>
                )}
                {proj.live && (
                  <span className={styles.liveBadge}>🟢 Live</span>
                )}
              </div>

              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{proj.emoji} {proj.title}</h3>
                <p className={styles.cardDesc}>{proj.desc}</p>
                <div className={styles.cardTags}>
                  {proj.tags.map(tag => (
                    <span key={tag} className={styles.tag} style={{ color: proj.color, borderColor: `${proj.color}30`, background: `${proj.color}10` }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className={styles.cardLinks}>
                  {proj.live && (
                    <a href={proj.live} target="_blank" rel="noopener noreferrer" className={styles.liveBtn}>
                      <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                      Live Demo
                    </a>
                  )}
                  <a href={proj.github} target="_blank" rel="noopener noreferrer" className={styles.ghBtn}>
                    <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.23 1.84 1.23 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.13 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other projects */}
        <motion.h3
          className={styles.otherTitle}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          Other Projects
        </motion.h3>
        <div className={styles.otherGrid}>
          {projects.filter(p => !p.featured).map((proj, i) => (
            <motion.div
              key={proj.title}
              className={`glass-card ${styles.otherCard}`}
              style={{ '--card-color': proj.color } as React.CSSProperties}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.55 + i * 0.1, duration: 0.5 }}
              whileHover={{ y: -4, scale: 1.02 }}
            >
              <div className={styles.otherTop}>
                <span className={styles.otherEmoji}>{proj.emoji}</span>
                <div className={styles.otherLinks}>
                  <a href={proj.github} target="_blank" rel="noopener noreferrer" className={styles.iconBtn} aria-label="GitHub">
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.23 1.84 1.23 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.13 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>
                  </a>
                </div>
              </div>
              <h4 className={styles.otherTitle2} style={{ color: proj.color }}>{proj.title}</h4>
              <p className={styles.otherDesc}>{proj.desc}</p>
              <div className={styles.otherTags}>
                {proj.tags.slice(0, 3).map(t => (
                  <span key={t} className={styles.otherTag}>{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className={styles.viewAll}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
        >
          <a href="https://github.com/Hithesh-max?tab=repositories" target="_blank" rel="noopener noreferrer" className="btn-secondary">
            View All on GitHub
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

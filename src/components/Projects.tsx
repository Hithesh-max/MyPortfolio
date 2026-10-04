'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import styles from './Projects.module.css';

const projects = [
  // MAIN FEATURED PROJECTS (with user screenshots & live deployments)
  {
    title: 'CampusCopilot AI',
    desc: 'The Next-Gen Autonomous Multi-Agent Student Co-Pilot. Engineered with vector DB persistent memory, autonomous scrapers for internships, hackathons & research grants, and an in-browser interactive developer IDE.',
    image: '/images/campuscopilot.png',
    tags: ['Autonomous Agents', 'Vector DB', 'Next.js', 'Python', 'LLMs', 'Scrapers'],
    live: 'https://campuscopilot-lqec.onrender.com/',
    github: 'https://github.com/Hithesh-max?tab=repositories',
    color: '#00d4ff',
    featured: true,
    emoji: '🤖',
  },
  {
    title: 'OmniCipher (CipherX)',
    desc: 'Comprehensive cryptography and cryptanalysis suite featuring classical cipher decryption, automated cryptanalysis, hash generation labs, salting impact analysis, toy rainbow table crackers, and password entropy evaluation.',
    image: '/images/omnicipher.png',
    tags: ['Cryptography', 'Cybersecurity', 'Hash Lab', 'Cryptanalysis', 'Entropy Engine'],
    live: 'https://omnicipher-v4kc.onrender.com/',
    github: 'https://github.com/Hithesh-max?tab=repositories',
    color: '#34d399',
    featured: true,
    emoji: '🔐',
  },
  {
    title: 'Human Activity Recognition (HAR)',
    desc: 'Real-time human activity classification leveraging deep learning models trained on the benchmark HHAR dataset. Features an interactive 3-axis accelerometer sensor stream simulator with adjustable frequencies, movement amplitudes, and noise levels.',
    image: '/images/har.png',
    tags: ['Deep Learning', 'Sensor Simulation', 'Machine Learning', 'HHAR Dataset', 'Python'],
    live: 'https://har-q31p.onrender.com/',
    github: 'https://github.com/Hithesh-max?tab=repositories',
    color: '#a78bfa',
    featured: true,
    emoji: '📈',
  },
  {
    title: 'Echo Reversal Game',
    desc: 'A dynamic, neon cyberpunk puzzle game based on temporal desync mechanics and shadow partners. Players navigate obstacle-dense timeline sectors, manage desync energy, and coordinate strategies alongside their past echoes.',
    image: '/images/echoreversal.png',
    tags: ['Game Dev', 'JavaScript', 'HTML5 Canvas', 'Neon Cyberpunk', 'Physics Engine'],
    live: 'https://echoreversal.netlify.app/',
    github: 'https://github.com/Hithesh-max?tab=repositories',
    color: '#fb7185',
    featured: true,
    emoji: '🎮',
  },

  // OTHER PROJECTS
  {
    title: 'Form 141 Automation Tool',
    desc: 'Automated data extraction, validation, and filling utility designed to streamline Form 141 generation, eradicating manual administrative overhead with robust Python scripting.',
    image: null,
    tags: ['Python', 'Automation', 'Scripting', 'Workflow'],
    live: null,
    github: 'https://github.com/Hithesh-max?tab=repositories',
    color: '#38bdf8',
    featured: false,
    emoji: '📄',
  },
  {
    title: 'AI Study Assistant',
    desc: 'Intelligent AI-powered study companion with personalized Q&A, syllabus mapping, and automated study notes generation.',
    image: null,
    tags: ['Generative AI', 'LLM', 'Agentic AI', 'Python'],
    live: 'https://willowy-sunflower-2ddb0d.netlify.app/',
    github: 'https://github.com/Hithesh-max?tab=repositories',
    color: '#60a5fa',
    featured: false,
    emoji: '🧠',
  },
  {
    title: 'Hotel Management System',
    desc: 'Full-fledged desktop hotel suite built with JavaFX, Maven, and Gradle featuring interactive room occupancy grids and booking workflows.',
    image: '/images/hotel.png',
    tags: ['JavaFX', 'Maven', 'Gradle', 'SQLite'],
    live: null,
    github: 'https://github.com/Hithesh-max?tab=repositories',
    color: '#34d399',
    featured: false,
    emoji: '🏨',
  },
  {
    title: 'Flappy Bird Arcade Clone',
    desc: 'Retro arcade game built with custom physics engine, dynamic obstacle generation, and responsive sprite controls.',
    image: '/images/flappy.png',
    tags: ['Game Dev', 'Python', 'Pygame'],
    live: null,
    github: 'https://github.com/Hithesh-max?tab=repositories',
    color: '#a78bfa',
    featured: false,
    emoji: '🕹️',
  },
  {
    title: 'Risk-Aware Vendor Forecasting',
    desc: 'Manufacturing raw material forecasting system using machine learning ensemble models with vendor reliability risk weights.',
    image: null,
    tags: ['Machine Learning', 'XGBoost', 'Pandas', 'Scikit-learn'],
    live: null,
    github: 'https://github.com/Hithesh-max?tab=repositories',
    color: '#fb923c',
    featured: false,
    emoji: '📊',
  },
  {
    title: 'Real-Time Chat App',
    desc: 'Full-stack messaging application with WebSocket real-time communication, room channels, and active user presence.',
    image: null,
    tags: ['WebSockets', 'JavaScript', 'Node.js', 'React'],
    live: null,
    github: 'https://github.com/Hithesh-max?tab=repositories',
    color: '#a855f7',
    featured: false,
    emoji: '💬',
  },
  {
    title: 'Currency Converter',
    desc: 'Fast, reliable real-time currency exchange converter with live financial rates API and clean visual conversion breakdown.',
    image: null,
    tags: ['JavaScript', 'API', 'HTML5', 'CSS3'],
    live: null,
    github: 'https://github.com/Hithesh-max?tab=repositories',
    color: '#00d4ff',
    featured: false,
    emoji: '💱',
  },
  {
    title: 'Personal Expense Tracker',
    desc: 'Interactive spending and budget tracking application with categorization, data visualizations, and monthly balance tracking.',
    image: null,
    tags: ['React', 'Data Visualization', 'Local Storage'],
    live: null,
    github: 'https://github.com/Hithesh-max?tab=repositories',
    color: '#f472b6',
    featured: false,
    emoji: '💰',
  },
  {
    title: 'Endless Runner 3D Game',
    desc: 'Fast-paced endless runner game with procedural obstacle generation, developed with student project VARISE at MIT Manipal.',
    image: null,
    tags: ['Game Dev', 'Unity', 'C#', '3D Graphics'],
    live: null,
    github: 'https://github.com/Hithesh-max?tab=repositories',
    color: '#fbbf24',
    featured: false,
    emoji: '🏃',
  },
  {
    title: 'Data Analysis with AI Models',
    desc: 'Exploratory data analysis suite incorporating machine learning algorithms for pattern recognition and statistical visualizations.',
    image: null,
    tags: ['Python', 'Pandas', 'Seaborn', 'EDA'],
    live: null,
    github: 'https://github.com/Hithesh-max?tab=repositories',
    color: '#10b981',
    featured: false,
    emoji: '📉',
  },
];

export default function Projects() {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

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
          <p className="section-label">What I&apos;ve Built</p>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className={styles.subtitle}>
            Explore live deployed applications, AI autonomous systems, and interactive games.
          </p>
        </motion.div>

        {/* Featured projects — 2x2 high-impact cards with live demos */}
        <div className={styles.featuredGrid}>
          {featuredProjects.map((proj, i) => (
            <motion.div
              key={proj.title}
              className={styles.featuredCard}
              style={{ '--card-color': proj.color } as React.CSSProperties}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              whileHover={{ y: -8 }}
            >
              {/* Card screenshot preview */}
              <div className={styles.cardImage}>
                {proj.image ? (
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: 'cover', objectPosition: 'top center' }}
                    className={styles.projectImg}
                  />
                ) : (
                  <div className={styles.placeholderImage}>
                    <span className={styles.placeholderEmoji}>{proj.emoji}</span>
                    <span className={styles.placeholderText}>{proj.title}</span>
                  </div>
                )}
                <div className={styles.imageOverlay} />
                <span className={styles.featuredBadge}>✨ Featured</span>
                {proj.live && (
                  <span className={styles.liveBadge}>
                    <span className={styles.pulseDot} />
                    Live Deployed
                  </span>
                )}
              </div>

              <div className={styles.cardBody}>
                <div className={styles.titleRow}>
                  <h3 className={styles.cardTitle}>{proj.title}</h3>
                </div>
                <p className={styles.cardDesc}>{proj.desc}</p>
                <div className={styles.cardTags}>
                  {proj.tags.map(tag => (
                    <span
                      key={tag}
                      className={styles.tag}
                      style={{
                        color: proj.color,
                        borderColor: `${proj.color}35`,
                        background: `${proj.color}12`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className={styles.cardLinks}>
                  {proj.live && (
                    <a
                      href={proj.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.liveBtn}
                    >
                      <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                      <span>Live App</span>
                    </a>
                  )}
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.ghBtn}
                  >
                    <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.23 1.84 1.23 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.13 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other projects */}
        <div className={styles.otherSectionHeader}>
          <motion.h3
            className={styles.otherTitle}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            More Notable Projects
          </motion.h3>
          <div className={styles.dividerLine} />
        </div>

        <div className={styles.otherGrid}>
          {otherProjects.map((proj, i) => (
            <motion.div
              key={proj.title}
              className={`glass-card ${styles.otherCard}`}
              style={{ '--card-color': proj.color } as React.CSSProperties}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.06, duration: 0.5 }}
              whileHover={{ y: -5, scale: 1.01 }}
            >
              <div className={styles.otherTop}>
                <span className={styles.otherEmoji}>{proj.emoji}</span>
                <div className={styles.otherLinks}>
                  {proj.live && (
                    <a
                      href={proj.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.iconBtn}
                      title="Live Demo"
                    >
                      <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  )}
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.iconBtn}
                    title="GitHub Repository"
                  >
                    <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.23 1.84 1.23 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.13 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>
              <h4 className={styles.otherTitle2} style={{ color: proj.color }}>
                {proj.title}
              </h4>
              <p className={styles.otherDesc}>{proj.desc}</p>
              <div className={styles.otherTags}>
                {proj.tags.map(t => (
                  <span key={t} className={styles.otherTag}>
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className={styles.viewAll}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <a
            href="https://github.com/Hithesh-max?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <span>Explore All Repositories on GitHub</span>
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

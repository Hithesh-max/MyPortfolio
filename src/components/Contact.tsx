'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './Contact.module.css';

export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:hitheshd12006@gmail.com?subject=Portfolio Contact from ${form.name}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${form.name}%0AEmail: ${form.email}`;
    window.open(mailtoLink);
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <div className={styles.bgGlow} />

      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <p className="section-label">Get In Touch</p>
          <h2 className="section-title">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <p className={styles.subtitle}>
            Open to internships, collaborations, and interesting projects. Let&apos;s build something great together.
          </p>
        </motion.div>

        <div className={styles.inner}>
          {/* Left — info */}
          <motion.div
            className={styles.left}
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <div className={styles.contactInfo}>
              {[
                {
                  icon: '✉️', label: 'Email', value: 'hitheshd12006@gmail.com',
                  href: 'mailto:hitheshd12006@gmail.com',
                },
                {
                  icon: '📞', label: 'Phone', value: '+91 8867018459',
                  href: 'tel:+918867018459',
                },
                {
                  icon: '📍', label: 'Location', value: 'Manipal, Karnataka, India',
                  href: null,
                },
              ].map(info => (
                <div key={info.label} className={styles.infoItem}>
                  <div className={styles.infoIcon}>{info.icon}</div>
                  <div>
                    <p className={styles.infoLabel}>{info.label}</p>
                    {info.href ? (
                      <a href={info.href} className={styles.infoValue}>{info.value}</a>
                    ) : (
                      <p className={styles.infoValueText}>{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.socials}>
              <p className={styles.socialsTitle}>Find me on</p>
              <div className={styles.socialLinks}>
                <a href="https://github.com/Hithesh-max?tab=repositories" target="_blank" rel="noopener noreferrer" className={styles.socialCard}>
                  <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.23 1.84 1.23 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.13 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>
                  <span>GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/hithesh-d-921a0316" target="_blank" rel="noopener noreferrer" className={styles.socialCard}>
                  <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  <span>LinkedIn</span>
                </a>
                <a href="https://www.instagram.com/hithu3090/" target="_blank" rel="noopener noreferrer" className={styles.socialCard}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.2"/><path d="M12 8.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7z" stroke="currentColor" strokeWidth="1.2"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/></svg>
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            className={styles.right}
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <form onSubmit={handleSubmit} className={`glass-card ${styles.form}`} id="contact-form">
              <div className={styles.formGroup}>
                <label htmlFor="contact-name" className={styles.label}>Your Name</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  placeholder="e.g. John Doe"
                  value={form.name}
                  onChange={handleChange}
                  className={styles.input}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="contact-email" className={styles.label}>Email Address</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={handleChange}
                  className={styles.input}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="contact-message" className={styles.label}>Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  placeholder="Tell me about your project or opportunity..."
                  value={form.message}
                  onChange={handleChange}
                  className={styles.textarea}
                  rows={5}
                />
              </div>
              <motion.button
                type="submit"
                className={styles.submitBtn}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                id="contact-submit"
              >
                {sent ? (
                  <span>✓ Opening your email client...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className={styles.footer}>
        <p>© 2026 <span className={styles.footerName}>Hithesh D</span>. Built with Next.js & Framer Motion.</p>
        <p className={styles.footerSub}>Designed & Developed by Hithesh D 🚀</p>
      </div>
    </section>
  );
}

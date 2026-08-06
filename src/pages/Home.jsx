import { motion } from 'framer-motion';
import nethraImg from '../../NethraImg.jpg';
import NeuralConstellation from '../components/NeuralConstellation';
import {
  FileText,
  ExternalLink,
  Sparkles,
  Code2,
  Brain,
  Globe,
  Wrench,
  Award,
  BookOpen,
  GraduationCap,
  Briefcase,
  Mail,
  Phone,
  Trophy,
  Terminal,
  Layers,
  Cloud,
  Database
} from 'lucide-react';

function LinkedinIcon({ size = 16 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GithubIcon({ size = 16 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

const fadeUpVariant = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12
    }
  }
};

export default function Home() {
  return (
    <main id="main-content">
      {/* HERO SECTION */}
      <section id="home" className="hero-section">
        <NeuralConstellation />
        <div className="hero-container">
          <div className="hero-grid">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="hero-text-column"
            >
              <motion.div variants={fadeUpVariant} className="hero-status-pill">
                <span className="status-pulse" />
                Agentic AI Intern @ AlgoTutor · Generative AI & RAG Enthusiast
              </motion.div>

              <motion.h1 variants={fadeUpVariant} className="hero-title">
                Nethra S
              </motion.h1>

              <motion.p variants={fadeUpVariant} className="hero-subtitle">
                Computer Science student focused on building scalable applications, Generative AI, LLM integration, and RAG architectures through hands-on engineering.
              </motion.p>

              <motion.div variants={fadeUpVariant} className="hero-proof-tag">
                <Code2 size={18} />
                <span>Solved 200+ LeetCode Problems | AWS Certified Cloud Practitioner</span>
              </motion.div>

              <motion.div variants={fadeUpVariant} className="quick-links-group">
                <a
                  href="https://github.com/NETHRA-S-CSE"
                  target="_blank"
                  rel="noreferrer"
                  className="chip-link"
                >
                  <GithubIcon size={15} /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/nethra-s-a13396311/"
                  target="_blank"
                  rel="noreferrer"
                  className="chip-link"
                >
                  <LinkedinIcon size={15} /> LinkedIn
                </a>
                <a
                  href="https://drive.google.com/file/d/1r2Jv-GWmWPIDajQKYW4Y3vuvXksoc3RE/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className="chip-link"
                >
                  <FileText size={15} /> Resume
                </a>
              </motion.div>

              <motion.div variants={fadeUpVariant} className="hero-actions">
                <a href="#projects" className="btn-primary">
                  View Projects <ExternalLink size={16} />
                </a>
                <a href="#contact" className="btn-secondary">
                  Contact Me
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="hero-image-column"
            >
              <div className="hero-portrait-frame">
                <img
                  src={nethraImg}
                  alt="Nethra S Profile"
                  className="hero-portrait-img"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="section projects-section">
        <div className="container">
          <div className="section-header-block">
            <span className="section-label">Selected Work</span>
            <h2>Featured Projects</h2>
          </div>

          <div className="projects-stack">
            {/* Project 1: AI Library Book Recommender */}
            <motion.article
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUpVariant}
              className="project-showcase-card"
            >
              <div className="project-content-grid">
                <div className="project-meta-top">
                  <h3 className="project-title">
                    AI – Powered Library Book Recommender (Team Project)
                  </h3>
                  <div className="project-tags-row">
                    <span className="tech-pill">Python</span>
                    <span className="tech-pill">Sentence Transformers</span>
                    <span className="tech-pill">Groq API</span>
                    <span className="tech-pill">Scikit-learn</span>
                    <span className="tech-pill">NLP</span>
                  </div>
                </div>
                <p className="project-description">
                  Contributed to the AI module by implementing semantic retrieval using embeddings and cosine similarity. Integrated the Groq LLM to generate AI-powered explanations, summaries, and personalized book recommendations.
                </p>
                <div className="project-links-row">
                  <span className="project-link-btn" style={{ opacity: 0.9 }}>
                    <Sparkles size={16} /> 2026 Project
                  </span>
                </div>
              </div>
            </motion.article>

            {/* Project 2: SECE PlaceHub */}
            <motion.article
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUpVariant}
              className="project-showcase-card"
            >
              <div className="project-content-grid">
                <div className="project-meta-top">
                  <h3 className="project-title">
                    SECE PlaceHub — Placement Management System
                  </h3>
                  <div className="project-tags-row">
                    <span className="tech-pill">MERN Stack</span>
                    <span className="tech-pill">MongoDB</span>
                    <span className="tech-pill">Express.js</span>
                    <span className="tech-pill">React.js</span>
                    <span className="tech-pill">Node.js</span>
                  </div>
                </div>
                <p className="project-description">
                  Built a centralized placement portal using MERN stack to streamline manual workflows. Implemented responsive interfaces, secure authentication, resume management, and dashboard features.
                </p>
                <div className="project-links-row">
                  <a
                    href="https://sece-placehub.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="project-link-btn"
                  >
                    <Globe size={16} /> Live Platform <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </motion.article>

            {/* Project 3: Sentiment Analysis */}
            <motion.article
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUpVariant}
              className="project-showcase-card"
            >
              <div className="project-content-grid">
                <div className="project-meta-top">
                  <h3 className="project-title">
                    Sentiment Analysis of Indian Education Policy News (Team Project)
                  </h3>
                  <div className="project-tags-row">
                    <span className="tech-pill">Python</span>
                    <span className="tech-pill">Pandas</span>
                    <span className="tech-pill">ML Basics</span>
                    <span className="tech-pill">Web Scraping</span>
                    <span className="tech-pill">NLP</span>
                  </div>
                </div>
                <p className="project-description">
                  Processed 3,000+ news headlines and extracted insights using NLP techniques. Visualized trends and insights from education-related data to improve data quality for analysis.
                </p>
                <div className="project-links-row">
                  <a
                    href="https://github.com/NarensGit/sentiment-analysis"
                    target="_blank"
                    rel="noreferrer"
                    className="project-link-btn"
                  >
                    <GithubIcon size={16} /> View Code Base <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </motion.article>

            {/* Executive Current Focus Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUpVariant}
              className="current-focus-card"
            >
              <h3>
                <Sparkles size={22} style={{ display: 'inline', marginRight: '8px' }} />
                Current Focus & Technical Horizons
              </h3>
              <ul className="focus-list">
                <li className="focus-item">
                  <Brain size={18} className="focus-icon" /> Agentic AI & LLM Integration
                </li>
                <li className="focus-item">
                  <Layers size={18} className="focus-icon" /> RAG Architectures & Vector Search
                </li>
                <li className="focus-item">
                  <Cloud size={18} className="focus-icon" /> AWS Cloud Practitioner Development
                </li>
                <li className="focus-item">
                  <Briefcase size={18} className="focus-icon" /> AI & Software Engineering Internships
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="section">
        <div className="container">
          <div className="section-header-block">
            <span className="section-label">Capabilities</span>
            <h2>Skills & Technologies</h2>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={staggerContainer}
            className="skills-grid"
          >
            {/* Programming */}
            <motion.div variants={fadeUpVariant} className="skill-category-card">
              <div className="category-header">
                <Code2 size={22} className="category-icon" />
                <h3 className="category-title">Programming</h3>
              </div>
              <div className="floating-tags">
                <span className="skill-tag">C</span>
                <span className="skill-tag">C++</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">Java</span>
              </div>
            </motion.div>

            {/* AI & ML */}
            <motion.div variants={fadeUpVariant} className="skill-category-card">
              <div className="category-header">
                <Brain size={22} className="category-icon" />
                <h3 className="category-title">AI & ML</h3>
              </div>
              <div className="floating-tags">
                <span className="skill-tag">Machine Learning</span>
                <span className="skill-tag">Generative AI</span>
                <span className="skill-tag">LLM Integration</span>
                <span className="skill-tag">RAG</span>
              </div>
            </motion.div>

            {/* Database & Web */}
            <motion.div variants={fadeUpVariant} className="skill-category-card">
              <div className="category-header">
                <Database size={22} className="category-icon" />
                <h3 className="category-title">Database & Web</h3>
              </div>
              <div className="floating-tags">
                <span className="skill-tag">MongoDB</span>
                <span className="skill-tag">MySQL</span>
                <span className="skill-tag">HTML</span>
                <span className="skill-tag">CSS</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">MERN</span>
              </div>
            </motion.div>

            {/* Cloud & Tools */}
            <motion.div variants={fadeUpVariant} className="skill-category-card">
              <div className="category-header">
                <Cloud size={22} className="category-icon" />
                <h3 className="category-title">Cloud & Tools</h3>
              </div>
              <div className="floating-tags">
                <span className="skill-tag">AWS</span>
                <span className="skill-tag">VS Code</span>
                <span className="skill-tag">Google Colab</span>
                <span className="skill-tag">GitHub</span>
                <span className="skill-tag">WordPress</span>
                <span className="skill-tag">Figma</span>
                <span className="skill-tag">Canva</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="section">
        <div className="container">
          <div className="section-header-block">
            <span className="section-label">Work Experience</span>
            <h2>Experience</h2>
          </div>

          <div className="timeline-wrap">
            {/* Internship 1: AlgoTutor */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUpVariant}
              className="timeline-entry"
              id="internship"
            >
              <div className="timeline-node" />
              <span className="timeline-badge">MAY 2026</span>
              <h3 className="timeline-role">Agentic AI Internship</h3>
              <p className="timeline-org">AlgoTutor</p>
              <ul className="timeline-bullets">
                <li>Worked on Generative AI, LLM integration, and semantic search using Python.</li>
                <li>Developed AI-powered applications with Groq API, vector embeddings, and prompt engineering.</li>
              </ul>
            </motion.div>

            {/* Internship 2: NIELIT */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUpVariant}
              className="timeline-entry"
            >
              <div className="timeline-node" />
              <span className="timeline-badge">DEC 2025</span>
              <h3 className="timeline-role">Data Analytics & AI Internship</h3>
              <p className="timeline-org">NIELIT, Calicut</p>
              <ul className="timeline-bullets">
                <li>Trained in AI and Data Analytics with hands-on projects in NLP and machine learning.</li>
                <li>Preprocessed and cleaned 3,000+ education policy news articles, improving data quality for analysis.</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS & CERTIFICATIONS SECTION */}
      <section id="achievements" className="section">
        <div className="container">
          <div className="section-header-block">
            <span className="section-label">Recognition</span>
            <h2>Achievements & Certifications</h2>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={staggerContainer}
            className="achievements-grid"
          >
            <motion.div variants={fadeUpVariant} className="achievement-badge-card">
              <div className="badge-icon-box">
                <Trophy size={20} />
              </div>
              <div>
                <p className="badge-title">Secured 1st Prize — Indo-Japan Innovation Presentation (2025)</p>
              </div>
            </motion.div>

            <motion.div variants={fadeUpVariant} className="achievement-badge-card">
              <div className="badge-icon-box">
                <Award size={20} />
              </div>
              <div>
                <p className="badge-title">Finalist — Sri Eshwar Coding Carnival (2025)</p>
              </div>
            </motion.div>

            <motion.div variants={fadeUpVariant} className="achievement-badge-card">
              <div className="badge-icon-box">
                <Award size={20} />
              </div>
              <div>
                <p className="badge-title">Finalist — AI Datathon (Ideathon), SECE (2025)</p>
              </div>
            </motion.div>

            <motion.div variants={fadeUpVariant} className="achievement-badge-card">
              <div className="badge-icon-box">
                <GraduationCap size={20} />
              </div>
              <div>
                <p className="badge-title">Cleared JLPT N5 (Japanese Language Proficiency Test) (2025)</p>
              </div>
            </motion.div>
          </motion.div>

          <h3 style={{ fontSize: '1.2rem', marginBottom: '1.25rem', color: 'var(--text-white)' }}>
            Verified Certifications
          </h3>

          <div className="certifications-strip">
            <span className="cert-chip">
              <BookOpen size={15} /> AWS Certified Cloud Practitioner (CLF-C02) | AWS (2026)
            </span>
            <span className="cert-chip">
              <BookOpen size={15} /> Linguaskills English Certification – CEFR B2 Level | Cambridge (2026)
            </span>
            <span className="cert-chip">
              <BookOpen size={15} /> Design Thinking – A Primer | NPTEL (2026)
            </span>
            <span className="cert-chip">
              <BookOpen size={15} /> Building RAG Apps Using MongoDB Badge | MongoDB (2026)
            </span>
            <span className="cert-chip">
              <BookOpen size={15} /> Introduction to Machine Learning | Kaggle (2025)
            </span>
            <span className="cert-chip">
              <BookOpen size={15} /> Introduction to Generative AI | Simplilearn (2025)
            </span>
            <span className="cert-chip">
              <BookOpen size={15} /> Artificial Intelligence | Infosys Springboard (2025)
            </span>
            <span className="cert-chip">
              <BookOpen size={15} /> Completion of C & CPP Training | IIT Bombay (2024)
            </span>
          </div>
        </div>
      </section>

      {/* CODING PROFILES SECTION */}
      <section id="coding-profiles" className="section">
        <div className="container">
          <div className="section-header-block">
            <span className="section-label">Competitive Metrics</span>
            <h2>Coding Profiles</h2>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={staggerContainer}
            className="profiles-grid"
          >
            {/* LeetCode */}
            <motion.div variants={fadeUpVariant} className="profile-metric-card">
              <div>
                <div className="profile-header">
                  <h3 className="profile-name">LeetCode</h3>
                  <Terminal size={18} className="category-icon" />
                </div>
                <p className="profile-stat">Solved 200+ Problems · Global Rank: 742,757 · Highest Contest Ranking: 1516</p>
              </div>
              <a
                href="https://leetcode.com/u/NETHRA_S_CSE/"
                target="_blank"
                rel="noreferrer"
                className="profile-action-link"
              >
                View Profile <ExternalLink size={13} />
              </a>
            </motion.div>

            {/* HackerRank */}
            <motion.div variants={fadeUpVariant} className="profile-metric-card">
              <div>
                <div className="profile-header">
                  <h3 className="profile-name">HackerRank</h3>
                  <Terminal size={18} className="category-icon" />
                </div>
                <p className="profile-stat">3 star C · 1 star C++ · 1 star Problem Solving · 1 star SQL · 2 star Python</p>
              </div>
              <a
                href="https://www.hackerrank.com/profile/Nethra_S"
                target="_blank"
                rel="noreferrer"
                className="profile-action-link"
              >
                View Profile <ExternalLink size={13} />
              </a>
            </motion.div>

            {/* SkillRack */}
            <motion.div variants={fadeUpVariant} className="profile-metric-card">
              <div>
                <div className="profile-header">
                  <h3 className="profile-name">SkillRack</h3>
                  <Terminal size={18} className="category-icon" />
                </div>
                <p className="profile-stat">Solved 1200+ Problems · 444 Bronze Medals · 10+ Certificates · Rank: 13,172</p>
              </div>
              <a
                href="https://www.skillrack.com/faces/resume.xhtml?id=515008&key=b1ad6d80808eaff8847a173502f857a2907409b1"
                target="_blank"
                rel="noreferrer"
                className="profile-action-link"
              >
                View Profile <ExternalLink size={13} />
              </a>
            </motion.div>

            {/* CodeChef */}
            <motion.div variants={fadeUpVariant} className="profile-metric-card">
              <div>
                <div className="profile-header">
                  <h3 className="profile-name">CodeChef</h3>
                  <Terminal size={18} className="category-icon" />
                </div>
                <p className="profile-stat">140+ Problems Solved · Rating: 1077</p>
              </div>
              <a
                href="https://www.codechef.com/users/nethra_s"
                target="_blank"
                rel="noreferrer"
                className="profile-action-link"
              >
                View Profile <ExternalLink size={13} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="section">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUpVariant}
            className="contact-card"
          >
            <h2 className="contact-headline">Let's build something remarkable.</h2>
            <p className="contact-subtext">
              Open for Agentic AI & Machine Learning internship opportunities, LLM/RAG application development, and software engineering roles.
            </p>

            <div className="contact-actions-row">
              <a href="mailto:s.nethra2024cse@sece.ac.in" className="contact-pill-btn">
                <Mail size={16} /> s.nethra2024cse@sece.ac.in
              </a>
              <a href="tel:+917200016353" className="contact-outline-btn">
                <Phone size={16} /> +91 7200016353
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
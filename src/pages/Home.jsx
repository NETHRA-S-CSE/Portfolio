import { useEffect } from "react";
import nethraImg from "../../NethraImg.jpg";

function Home() {
	useEffect(() => {
		const revealNodes = document.querySelectorAll("[data-reveal]");
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add("visible");
					}
				});
			},
			{ threshold: 0.2, rootMargin: "0px 0px -8% 0px" }
		);

		revealNodes.forEach((node) => observer.observe(node));
		return () => observer.disconnect();
	}, []);

	return (
		<main id="main-content">
			<section id="home" className="hero">
				<div className="hero-layout">
					<div className="hero-content" data-reveal>
						<div className="hero-text-block">
							<p className="eyebrow">Aspiring Software Engineer | Machine Learning & Generative AI Enthusiast</p>
							<h1>Nethra S</h1>
							<p className="lead">Computer Science student focused on problem solving and building scalable applications. Exploring Machine Learning through hands-on projects.</p>
							<p className="hero-proof">Solved 150+ problems on LeetCode | Built full-stack applications</p>
							<div className="quick-links">
								<a href="https://github.com/NETHRA-S-CSE" target="_blank" rel="noreferrer">GitHub</a>
								<a href="https://www.linkedin.com/in/nethra-s-a13396311/" target="_blank" rel="noreferrer">LinkedIn</a>
								<a href="https://drive.google.com/file/d/1HR8OlTQVdzDy56d9AtOyi5ooWoe-Eko-/view?usp=sharing" target="_blank" rel="noreferrer">Resume</a>
							</div>
							<div className="actions">
								<a href="#projects" className="btn primary">View Projects</a>
								<a href="#contact" className="btn secondary">Contact Me</a>
							</div>
						</div>
						<div className="hero-image-wrap" aria-hidden="true" data-reveal>
							<img
								className="hero-image"
								src={nethraImg}
								alt=""
							/>
						</div>
					</div>
				</div>
			</section>

			<section id="education" className="section alt reveal" data-reveal>
				<div className="container section-shell">
					<h2>Education</h2>
					<div className="timeline">
						<article className="timeline-item">
							<div className="timeline-year">Present</div>
							<div className="timeline-content">
								<h3>B.E. Computer Science Engineering</h3>
								<p>Sri Eshwar College of Engineering</p>
								<ul className="stack-list">
							<li>CGPA: 8.4 (Up to 3rd Semester)</li>
							<li>HSC: 94.8%</li>
							<li>SSLC: 95.2%</li>
						</ul>
							</div>
						</article>
					</div>
				</div>
			</section>

			<section id="internship" className="section reveal" data-reveal>
				<div className="container section-shell">
					<h2>Internship</h2>
					<div className="timeline">
						<article className="timeline-item">
							<div className="timeline-year">2025</div>
							<div className="timeline-content">
								<h3>Data Analytics &amp; AI Intern – NIELIT, Calicut (Dec 2025)</h3>
								<p>
									Worked on real-world AI and data analytics problems with a focus on sentiment analysis.
								</p>
								<ul className="stack-list">
							<li>Performed data preprocessing using Pandas &amp; NumPy</li>
							<li>Built sentiment analysis models on education policy news</li>
							<li>Analyzed trends and extracted insights from real datasets</li>
						</ul>
							</div>
						</article>
					</div>
				</div>
			</section>

			<section id="skills" className="section alt reveal" data-reveal>
				<div className="container section-shell">
					<h2>Skills</h2>
					<div className="skills-flow">
						<article className="skill-group">
							<h3>Programming</h3>
							<div className="tags">
								<span>C</span>
								<span>C++</span>
								<span>Python</span>
								<span>Java (Beginner)</span>
							</div>
						</article>
						<article className="skill-group">
							<h3>AI / Data</h3>
							<div className="tags">
								<span>Machine Learning Basics</span>
								<span>Data Preprocessing</span>
								<span>Sentiment Analysis</span>
							</div>
						</article>
						<article className="skill-group">
							<h3>Web &amp; Database</h3>
							<div className="tags">
								<span>HTML</span>
								<span>CSS</span>
								<span>JavaScript (Basics)</span>
								<span>MongoDB</span>
								<span>MySQL</span>
							</div>
						</article>
						<article className="skill-group">
							<h3>Tools</h3>
							<div className="tags">
								<span>VS Code</span>
								<span>GitHub</span>
								<span>Figma</span>
								<span>Canva</span>
								<span>WordPress</span>
								<span>Google Colab</span>
							</div>
						</article>
					</div>
				</div>
			</section>

			<section id="projects" className="section reveal" data-reveal>
				<div className="container section-shell">
					<h2>Projects</h2>
					<div className="projects-flow">
						<article className="project-row left">
							<div className="project-body">
							<h3>Sentiment Analysis of Indian Education Policy News</h3>
							<p className="project-tech"><strong>Tech Stack:</strong> Python, Pandas, Machine Learning, Web Scraping</p>
							<p>
								Collected and labeled real-time news data, performed text preprocessing and sentiment classification,
								and visualized insights from education-related trends.
							</p>
							<p className="project-link">
								<a href="https://github.com/yourusername/sentiment-analysis" target="_blank" rel="noreferrer">Project Link</a>
							</p>
							</div>
						</article>
						<article className="project-row right">
							<div className="project-body">
							<h3>Document Version Tracker</h3>
							<p className="project-tech"><strong>Tech Stack:</strong> Java, Spring Boot, HTML, CSS</p>
							<p>
								Built a system to track document versions, implemented auto-save versioning,
								and enabled reverting to previous document states.
							</p>
							<p className="project-link">
								<a href="https://github.com/yourusername/version-tracker" target="_blank" rel="noreferrer">Project Link</a>
							</p>
							</div>
						</article>
						<article className="project-row left">
							<div className="project-body">
							<h3>ElectSphere – Online Voting System</h3>
							<p className="project-tech"><strong>Tech Stack:</strong> Python, Django, MongoDB, HTML, CSS</p>
							<p>
								Developed a secure online voting platform, ensured one-person-one-vote logic,
								and stored voter data and results securely using MongoDB.
							</p>
							<p className="project-link">
								<a href="https://github.com/yourusername/electsphere" target="_blank" rel="noreferrer">Project Link</a>
							</p>
							</div>
						</article>
						<article className="project-row right">
							<div className="project-body">
							<h3>Current Focus</h3>
							<ul className="stack-list">
								<li>Deepening knowledge in Machine Learning</li>
								<li>Exploring Generative AI and NLP</li>
								<li>Building real-world AI projects</li>
								<li>Preparing for internships</li>
							</ul>
							</div>
						</article>
					</div>
				</div>
			</section>

			<section id="achievements" className="section alt reveal" data-reveal>
				<div className="container section-shell">
					<h2>Achievements</h2>
					<ul className="stack-list plain-list">
						<li>1st Prize – Indo-Japan Innovation Presentation (2025)</li>
						<li>Finalist – Sri Eshwar Coding Carnival (2025)</li>
						<li>Finalist – AI Datathon Ideathon (SECE)</li>
						<li>Cleared JLPT N5 (Japanese Language Proficiency Test)</li>
					</ul>
				</div>
			</section>

			<section id="certifications" className="section reveal" data-reveal>
				<div className="container section-shell">
					<h2>Certifications</h2>
					<ul className="stack-list plain-list">
						<li><a href="#">Introduction to Machine Learning – Kaggle</a></li>
						<li><a href="#">Introduction to Generative AI – Simplilearn</a></li>
						<li><a href="#">Artificial Intelligence – Infosys Springboard</a></li>
						<li><a href="#">Prompt Engineering – Sololearn</a></li>
						<li><a href="#">C &amp; C++ Training – IIT Bombay</a></li>
					</ul>
				</div>
			</section>

			<section id="coding-profiles" className="section alt reveal" data-reveal>
				<div className="container section-shell">
					<h2>Coding Profiles</h2>
					<div className="profiles-list">
						<article className="profile-item">
							<h3>LeetCode</h3>
							<p><a href="https://leetcode.com/yourusername" target="_blank" rel="noreferrer">leetcode.com/yourusername</a></p>
							<p>150+ problems solved | Contest Rank: 1455</p>
						</article>
						<article className="profile-item">
							<h3>CodeChef</h3>
							<p><a href="https://codechef.com/users/yourusername" target="_blank" rel="noreferrer">codechef.com/users/yourusername</a></p>
							<p>140+ problems solved | Rating: 1001</p>
						</article>
						<article className="profile-item">
							<h3>HackerRank</h3>
							<p><a href="https://hackerrank.com/yourusername" target="_blank" rel="noreferrer">hackerrank.com/yourusername</a></p>
						</article>
						<article className="profile-item">
							<h3>SkillRack</h3>
							<p><a href="https://skillrack.com/profile/yourusername" target="_blank" rel="noreferrer">skillrack.com/profile/yourusername</a></p>
							<p>1200+ problems | 444 Bronze Medals</p>
						</article>
					</div>
				</div>
			</section>

			<section id="contact" className="section alt reveal" data-reveal>
				<div className="container section-shell">
					<h2>Contact</h2>
					<div className="contact-lines">
						<p>Email: <a href="mailto:s.nethra2024cse@sece.ac.in">s.nethra2024cse@sece.ac.in</a></p>
						<p>Phone: <a href="tel:+917200016353">7200016353</a></p>
						<p>
							LinkedIn: <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">linkedin.com/in/yourprofile</a>
						</p>
						<p>
							GitHub: <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">github.com/yourusername</a>
						</p>
					</div>
				</div>
			</section>
		</main>
	);
}

export default Home;

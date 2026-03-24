function Footer() {
    return (
        <footer className="portfolio-footer">
            <div className="container footer-wrap">
                <p>© {new Date().getFullYear()} Nethra S. All rights reserved.</p>
                <div className="footer-links">
                    <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">LinkedIn</a>
                    <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">GitHub</a>
                    <a href="mailto:s.nethra2024cse@sece.ac.in">Email</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
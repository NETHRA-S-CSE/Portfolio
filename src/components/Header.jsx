function Header() {
    return (
        <header className="portfolio-header">
            <div className="container nav-wrap">
                <a href="#home" className="brand">Nethra S</a>
                <nav className="nav-links" aria-label="Main navigation">
                    <a href="#about">About</a>
                    <a href="#education">Education</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#achievements">Achievements</a>
                    <a href="#contact">Contact</a>
                </nav>
            </div>
        </header>
    )
}

export default Header
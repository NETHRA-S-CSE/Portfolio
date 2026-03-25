import { useEffect, useState } from 'react'

const navItems = [
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' },
]

function Header() {
    const [activeSection, setActiveSection] = useState('about')

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visibleEntry = entries.find((entry) => entry.isIntersecting)
                if (visibleEntry) {
                    setActiveSection(visibleEntry.target.id)
                }
            },
            {
                rootMargin: '-35% 0px -55% 0px',
                threshold: 0.1,
            }
        )

        navItems.forEach(({ id }) => {
            const section = document.getElementById(id)
            if (section) observer.observe(section)
        })

        return () => observer.disconnect()
    }, [])

    return (
        <header className="portfolio-header">
            <div className="container nav-wrap">
                <a href="#home" className="brand">Nethra S</a>
                <nav className="nav-links" aria-label="Main navigation">
                    {navItems.map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            className={activeSection === item.id ? 'active' : ''}
                            aria-current={activeSection === item.id ? 'page' : undefined}
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    )
}

export default Header
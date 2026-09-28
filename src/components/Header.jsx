import { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const [scrollProgress, setScrollProgress] = useState(0);

    // Dark Mode
    const [isDarkMode, setIsDarkMode] = useState(() => {
        return localStorage.getItem('theme') === 'dark';
    });

    useEffect(() => {
        document.body.classList.toggle('dark-mode', isDarkMode);
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    }, [isDarkMode]);

    const sections = [
        { id: 'home', label: 'Home' },
        { id: 'about-me', label: 'About Me' },
        { id: 'projects', label: 'Projects' },
        { id: 'skills', label: 'Skills' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            const totalHeight =
                document.documentElement.scrollHeight - window.innerHeight;

            const progress = totalHeight > 0
                ? (window.scrollY / totalHeight) * 100
                : 0;

            setScrollProgress(progress);

            const current = sections.find((section) => {
                const element = document.getElementById(section.id);

                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }

                return false;
            });

            if (current) {
                setActiveSection(current.id);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);

        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    const toggleDarkMode = () => {
        setIsDarkMode((prev) => !prev);
    };

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>

            {/* Scroll Progress Bar */}
            <div
                className="scroll-progress-bar"
                style={{ width: `${scrollProgress}%` }}
            ></div>

            <div className="container">
                <div className="header-content">

                    <div
                        className="logo-section"
                        onClick={() => scrollToSection('home')}
                    >
                        <div className="logo gradient-text">
                            Rawan Shakkah
                        </div>

                        <div className="status-badge">
                            <span className="status-dot"></span>

                            <span className="status-text">
                                Open to Opportunities
                            </span>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="nav-desktop">
                        {sections.map((section) => (
                            <button
                                key={section.id}
                                onClick={() => scrollToSection(section.id)}
                                className={`nav-link ${activeSection === section.id ? 'active' : ''
                                    }`}
                            >
                                {section.label}
                            </button>
                        ))}

                        {/* Dark Mode Button */}
                        <button
                            className="theme-toggle"
                            onClick={toggleDarkMode}
                            aria-label="Toggle dark mode"
                            title={isDarkMode ? 'Light Mode' : 'Dark Mode'}
                        >
                            <i
                                className={`bx ${isDarkMode ? 'bx-sun' : 'bx-moon'
                                    }`}
                            ></i>
                        </button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="mobile-menu-btn"
                        onClick={() =>
                            setIsMobileMenuOpen(!isMobileMenuOpen)
                        }
                        aria-label="Toggle menu"
                    >
                        <i
                            className={`bx ${isMobileMenuOpen ? 'bx-x' : 'bx-menu'
                                }`}
                        ></i>
                    </button>
                </div>

                {/* Mobile Navigation */}
                <nav
                    className={`nav-mobile ${isMobileMenuOpen ? 'open' : ''
                        }`}
                >
                    {sections.map((section) => (
                        <button
                            key={section.id}
                            onClick={() => scrollToSection(section.id)}
                            className={`nav-link ${activeSection === section.id ? 'active' : ''
                                }`}
                        >
                            {section.label}
                        </button>
                    ))}

                    {/* Dark Mode Button */}
                    <button
                        className="theme-toggle"
                        onClick={toggleDarkMode}
                        aria-label="Toggle dark mode"
                        title={isDarkMode ? 'Light Mode' : 'Dark Mode'}
                    >
                        <i
                            className={`bx ${isDarkMode ? 'bx-sun' : 'bx-moon'
                                }`}
                        ></i>

                        <span>
                            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                        </span>
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Header;


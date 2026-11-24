
import { useState, useEffect } from 'react';
import { useMagnetic } from '../hooks/useMagnetic';
import './Hero.css';
import mainimg from '../assets/rawan-profile.webp';

const Hero = () => {
    const gitHubBtnRef = useMagnetic(0.3);
    const linkedInBtnRef = useMagnetic(0.3);
    const cvBtnRef = useMagnetic(0.3);
    const emailBtnRef = useMagnetic(0.3);

    const [currentRole, setCurrentRole] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    const roles = [
        'Software Engineer',
        'Full-Stack Developer',
        'Backend Developer'
    ];

    useEffect(() => {
        const role = roles[currentRole];

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (displayText.length < role.length) {
                    setDisplayText(
                        role.slice(0, displayText.length + 1)
                    );
                } else {
                    setTimeout(() => setIsDeleting(true), 1500);
                }
            } else {
                if (displayText.length > 0) {
                    setDisplayText(
                        role.slice(0, displayText.length - 1)
                    );
                } else {
                    setIsDeleting(false);
                    setCurrentRole(
                        (prev) => (prev + 1) % roles.length
                    );
                }
            }
        }, isDeleting ? 50 : 100);

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, currentRole]);

    return (
        <section id="home" className="hero">

            {/* Floating Particles */}
            <div className="hero-particles">
                {[...Array(15)].map((_, i) => (
                    <div
                        key={i}
                        className="hero-particle"
                        style={{
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${15 + Math.random() * 10}s`,
                        }}
                    />
                ))}
            </div>

            <div className="container">
                <div className="hero-content">

                    {/* Profile Image */}
                    <div className="hero-image-container fade-in">
                        <div className="hero-image-wrapper">
                            <img
                                src={mainimg}
                                alt="Rawan Shaqaqha - Software Engineer"
                                className="hero-image"
                            />

                            <div className="image-glow"></div>
                        </div>
                    </div>

                    {/* Hero Text */}
                    <div className="hero-text">

                        <h1 className="hero-title slide-in-right">
                            Hi, I'm{' '}
                            <span className="gradient-text">
                                Rawan
                            </span>
                        </h1>

                        <h2
                            className="hero-subtitle slide-in-right"
                            style={{ animationDelay: '0.2s' }}
                        >
                            <span className="typed-text">
                                {displayText}
                            </span>

                            <span className="cursor">|</span>
                        </h2>

                        <p
                            className="hero-description slide-in-right"
                            style={{ animationDelay: '0.4s' }}
                        >
                            Software Engineer focused on
                            building practical and modern
                            web applications.
                        </p>

                        {/* Social & CV Icons */}
                        <div
                            className="hero-buttons slide-in-right"
                            style={{ animationDelay: '0.6s' }}
                        >

                            {/* GitHub */}
                            <a
                                ref={gitHubBtnRef}
                                href="https://github.com/Rawanshakkah"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hero-icon-button"
                                aria-label="GitHub"
                                title="GitHub"
                            >
                                <i className="bx bxl-github"></i>

                            </a>

                            {/* LinkedIn */}
                            <a
                                ref={linkedInBtnRef}
                                href="https://www.linkedin.com/in/rawan-shakkah-/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hero-icon-button"
                                aria-label="LinkedIn"
                                title="LinkedIn"
                            >
                                <i className="bx bxl-linkedin"></i>
                            </a>

                            {/* CV */}
                            <a
                                ref={cvBtnRef}
                                href="/CV.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hero-icon-button"
                                aria-label="View CV"
                                title="CV"
                            >
                                <i className="bx bx-file"></i>
                            </a>

                            {/* Email */}
                            <a
                                ref={emailBtnRef}
                                href="mailto:rawanshakkah@gmail.com"
                                className="hero-icon-button"
                                aria-label="Email"
                                title="Email"
                            >
                                <i className="bx bxl-gmail"></i>
                            </a>

                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="scroll-indicator">
                <div className="mouse">
                    <div className="wheel"></div>
                </div>

                <p>Scroll Down</p>
            </div>

        </section>
    );
};

export default Hero;

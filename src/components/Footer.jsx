
import { useEffect, useRef, useState } from 'react';
import './Footer.css';

/* ── Pixel Pet Character ── */
const PixelPet = () => {
    const petRef = useRef(null);
    const posRef = useRef(10);
    const dirRef = useRef(1);
    const frameRef = useRef(0);
    const [frame, setFrame] = useState(0);
    const [pos, setPos] = useState(10);
    const [dir, setDir] = useState(1);

    useEffect(() => {
        let animId;
        let lastTime = 0;
        const SPEED = 0.018;
        const FRAME_INTERVAL = 200;
        let lastFrameTime = 0;

        const tick = (time) => {
            const dt = time - lastTime;
            lastTime = time;

            posRef.current += dirRef.current * SPEED * dt;

            if (posRef.current >= 88) {
                posRef.current = 88;
                dirRef.current = -1;
            }

            if (posRef.current <= 2) {
                posRef.current = 2;
                dirRef.current = 1;
            }

            setPos(posRef.current);
            setDir(dirRef.current);

            if (time - lastFrameTime > FRAME_INTERVAL) {
                frameRef.current = (frameRef.current + 1) % 2;
                setFrame(frameRef.current);
                lastFrameTime = time;
            }

            animId = requestAnimationFrame(tick);
        };

        animId = requestAnimationFrame(tick);

        return () => cancelAnimationFrame(animId);
    }, []);

    return (
        <div
            ref={petRef}
            className={`pixel-pet ${dir === -1 ? 'flip' : ''} frame-${frame}`}
            style={{ left: `${pos}%` }}
            title="Pixel Engineer — always coding!"
        >
            <div className="pet-sprite" />
        </div>
    );
};

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            {/* Pet runway */}
            <div className="pet-runway">
                <PixelPet />
            </div>

            <div className="container">
                <div className="footer-content">

                    {/* Brand */}
                    <div className="footer-brand">
                        <h2 className="footer-logo gradient-text">
                            Rawan Shaqaqha
                        </h2>

                        <p>
                            Software Engineer focused on building
                            practical, modern, and well-structured
                            web applications.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-links">
                        <h3>Quick Links</h3>

                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about-me">About</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#skills">Skills</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div className="footer-social">
                        <h3>Connect</h3>

                        <div className="social-links">
                            <a
                                href="https://github.com/Rawanshakkah"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                            >
                                <i className="bx bxl-github"></i>
                            </a>

                            <a
                                href="https://www.linkedin.com/in/rawan-shakkah-/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                            >
                                <i className="bx bxl-linkedin"></i>
                            </a>

                            <a
                                href="mailto:rawanshakkah@gmail.com"
                                aria-label="Email"
                            >
                                <i className="bx bx-envelope"></i>
                            </a>
                        </div>
                    </div>

                </div>

                {/* Copyright */}
                <div className="footer-bottom">
                    <p>
                        © {currentYear} Rawan Shaqaqha — All rights reserved.
                    </p>

                    <p>
                        Built with ❤️ using React &amp; Vite
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

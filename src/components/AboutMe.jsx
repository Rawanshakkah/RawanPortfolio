import { useEffect, useRef } from 'react';
import profileImg from '../assets/rawan-profile.webp';
import './AboutMe.css';

const AboutMe = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('am-visible');
                    }
                });
            },
            {
                threshold: 0.06,
                rootMargin: '0px 0px -40px 0px',
            }
        );

        const elements = sectionRef.current?.querySelectorAll('.am-reveal');

        elements?.forEach((element) => observer.observe(element));

        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="about-me"
            className="about-me-section"
            ref={sectionRef}
            aria-label="About Rawan Shakkah"
        >
            {/* Background accents */}
            <div className="am-bg-blob am-blob-1" />
            <div className="am-bg-blob am-blob-2" />

            <div className="container am-outer">

                {/* Introduction + Photo */}
                <div className="am-top-row am-reveal">

                    {/* Left — Text */}
                    <div className="am-left">

                        <span className="am-eyebrow">
                            <i className="bx bx-user-circle" />
                            About Me
                        </span>

                        <div className="am-heading-wrapper">
                            <h2 className="am-heading">
                                I'm{' '}
                                <span className="am-name-highlight">
                                    Rawan Shakkah
                                </span>
                            </h2>

                            <span className="am-nickname">
                                Software Engineer
                            </span>
                        </div>

                        <p className="am-bio">
                            I am a <strong>Software Engineer</strong> and
                            Computer Engineering graduate with a focus on
                            <strong> Full-Stack Development</strong>. I enjoy
                            building practical web applications and backend
                            services using C#, ASP.NET Core, React, Python,
                            and SQL.
                        </p>

                        <p className="am-bio">
                            I am continuously learning and improving my skills
                            by building real projects, exploring new
                            technologies, and turning ideas into
                            well-structured and reliable applications.
                        </p>

                        <div className="am-quick-tags">
                            <span className="am-tag">
                                <i className="bx bx-graduation" />
                                Computer Engineering
                            </span>

                            <span className="am-tag">
                                <i className="bx bx-layer" />
                                Full-Stack Development
                            </span>

                            <span className="am-tag">
                                <i className="bx bx-code-alt" />
                                Software Engineering
                            </span>

                            <span className="am-tag">
                                <i className="bx bx-world" />
                                Open to Opportunities
                            </span>
                        </div>
                    </div>

                    {/* Right — Photo */}
                    <div className="am-right">
                        <div className="am-photo-frame">

                            <img
                                src={profileImg}
                                alt="Rawan Shakkah"
                                className="am-photo"
                            />

                            <div className="am-photo-badge">
                                <i className="bx bx-code-alt" />
                                <span>Software Engineer</span>
                            </div>

                            <div className="am-photo-deco am-deco-1" />
                            <div className="am-photo-deco am-deco-2" />

                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default AboutMe;

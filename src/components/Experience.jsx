
import { useState } from 'react';
import './Experience.css';

const trainings = [
    {
        id: 1,
        title: 'Python Programming',
        organization:
            'Dot Jordan – Ministry of Digital Economy and Entrepreneurship & UNICEF',
        description:
            'Practical training in Python programming, object-oriented programming, databases, and web development. Built desktop applications using Tkinter and web applications using Flask.',
        skills: [
            'Python', 'OOP', 'Tkinter', 'SQL',
            'Flask', 'Data Analysis', 'AI Fundamentals',
        ],
    },
    {
        id: 2,
        title: 'Network Engineering',
        organization: 'STS – Specialized Technical Services',
        description:
            'Hands-on training in enterprise networking, network configuration, troubleshooting, and firewall security. Practiced network scenarios and connectivity testing using simulation tools.',
        skills: [
            'CCNA', 'Routing & Switching', 'VLANs',
            'Subnetting', 'Cisco Packet Tracer', 'EVE-NG',
            'FortiGate', 'Network Security',
        ],
    },
    {
        id: 3,
        title: 'Web Development',
        organization:
            'Hisham Hijjawi Scientific Incubator – Yarmouk University',
        description:
            'Practical training in the fundamentals of web development, including building and styling web pages and adding interactive features.',
        skills: ['HTML', 'CSS', 'JavaScript'],
    },
];

const certificates = [
    {
        id: 1,
        title: 'Python Programming',
        organization: 'Dot Jordan',
        file: '/certificates/python-training.pdf',
    },
    {
        id: 2,
        title: 'Network Engineering',
        organization: 'STS',
        file: '/certificates/network-training.pdf',
    },
    {
        id: 3,
        title: 'Web Development',
        organization: 'Hisham Hijjawi Scientific Incubator',
        file: '/certificates/web-training.pdf',
    },
];

const Experience = () => {
    const [activeTab, setActiveTab] = useState('training');

    return (
        <section id="experience" className="section experience-section">
            <div className="container experience-container">
                <div className="experience-header">
                    <span className="experience-badge">
                        <i className="bx bx-briefcase"></i>
                        My Professional Journey
                    </span>

                    <h2 className="experience-title">
                        Experience & Training
                    </h2>

                    <p className="experience-subtitle">
                        Explore my practical training experiences and
                        professional certificates.
                    </p>
                </div>

                <div className="experience-tabs">
                    <button
                        className={`experience-tab ${activeTab === 'training' ? 'active' : ''}`}
                        onClick={() => setActiveTab('training')}
                    >
                        <i className="bx bx-briefcase"></i>
                        Training
                    </button>

                    <button
                        className={`experience-tab ${activeTab === 'certificates' ? 'active' : ''}`}
                        onClick={() => setActiveTab('certificates')}
                    >
                        <i className="bx bx-certification"></i>
                        Certificates
                    </button>
                </div>

                {activeTab === 'training' && (
                    <div className="experience-grid">
                        {trainings.map((training) => (
                            <article className="experience-card" key={training.id}>
                                <div className="experience-card-icon">
                                    <i className="bx bx-award"></i>
                                </div>

                                <h3 className="experience-card-title">
                                    {training.title}
                                </h3>

                                <h4 className="experience-organization">
                                    {training.organization}
                                </h4>

                                <p className="experience-description">
                                    {training.description}
                                </p>

                                <div className="experience-skills">
                                    {training.skills.map((skill) => (
                                        <span className="experience-skill" key={skill}>
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </article>
                        ))}
                    </div>
                )}

                {activeTab === 'certificates' && (
                    <div className="experience-grid">
                        {certificates.map((certificate) => (
                            <a
                                className="experience-card certificate-card"
                                href={certificate.file}
                                target="_blank"
                                rel="noopener noreferrer"
                                key={certificate.id}
                            >
                                <div className="experience-card-icon">
                                    <i className="bx bxs-file-pdf"></i>
                                </div>

                                <h3 className="experience-card-title">
                                    {certificate.title}
                                </h3>

                                <h4 className="experience-organization">
                                    {certificate.organization}
                                </h4>

                                <span className="certificate-link">
                                    <i className="bx bx-link-external"></i>
                                    View Certificate
                                </span>
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Experience;

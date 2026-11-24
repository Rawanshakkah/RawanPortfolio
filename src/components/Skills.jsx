
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Skills.css';

const Skills = () => {
    const [sectionRef, isSectionVisible] = useScrollReveal({
        threshold: 0.1,
    });

    const skillGroups = [
        {
            title: 'Frontend',
            icon: 'bx bx-code-alt',
            skills: [
                {
                    name: 'HTML',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
                },
                {
                    name: 'CSS',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
                },
                {
                    name: 'JavaScript',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
                },
                {
                    name: 'React',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
                },
                {
                    name: 'TypeScript',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
                },
                {
                    name: 'Bootstrap',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
                },
                {
                    name: 'Tailwind CSS',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
                },
            ],
        },

        {
            title: 'Backend & Frameworks',
            icon: 'bx bx-server',
            skills: [
                {
                    name: 'C#',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
                },
                {
                    name: 'ASP.NET Core',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg',
                },
                {
                    name: 'Entity Framework Core',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg',
                },
                {
                    name: 'REST API',
                    iconClass: 'bx bx-plug',
                },
                {
                    name: 'Flask',
                    icon: 'https://cdn.simpleicons.org/flask/000000',
                },
            ],
        },

        {
            title: 'Programming Languages',
            icon: 'bx bx-code-curly',
            skills: [
                {
                    name: 'Python',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
                },
                {
                    name: 'C++',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
                },
            ],
        },

        {
            title: 'Databases',
            icon: 'bx bx-data',
            skills: [
                {
                    name: 'SQL Server',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg',
                },
                {
                    name: 'MySQL',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
                },
            ],
        },

        {
            title: 'Tools & Technologies',
            icon: 'bx bx-wrench',
            skills: [
                {
                    name: 'Git',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
                },
                {
                    name: 'GitHub',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
                },

                {
                    name: 'Docker',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
                },
                {
                    name: 'Linux',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
                },

            ],
        },

        {
            title: 'Networking',
            icon: 'bx bx-network-chart',
            skills: [
                {
                    name: 'Networking',
                    iconClass: 'bx bx-network-chart',
                },
                {
                    name: 'VLAN',
                    iconClass: 'bx bx-git-branch',
                },
                {
                    name: 'OSPF',
                    iconClass: 'bx bx-share-alt',
                },
                {
                    name: 'Wireshark',
                    iconClass: 'bx bx-radar',
                },
                {
                    name: 'FortiGate',
                    iconClass: 'bx bx-shield-quarter',
                },
                {
                    name: 'Packet Tracer',
                    iconClass: 'bx bx-desktop',
                },
            ],
        },
    ];

    return (
        <section
            id="skills"
            className={`section skills-section reveal ${isSectionVisible ? 'active' : ''
                }`}
            ref={sectionRef}
        >
            <div className="container">
                <div className="skills-heading">
                    <span className="skills-label">
                        <i className="bx bx-code-curly"></i>
                        Technologies
                    </span>

                    <h2 className="section-title">
                        Skills & Technologies
                    </h2>

                    <p className="skills-intro">
                        Technologies and tools I use while building projects
                        and developing my software engineering skills.
                    </p>
                </div>

                <div className="skills-grid">
                    {skillGroups.map((group) => (
                        <div
                            className="skill-category"
                            key={group.title}
                        >
                            <div className="category-header">
                                <div className="category-icon">
                                    <i className={group.icon}></i>
                                </div>

                                <h3>{group.title}</h3>
                            </div>

                            <div className="skills-list">
                                {group.skills.map((skill) => (
                                    <div
                                        className="skill-card"
                                        key={skill.name}
                                    >
                                        <div className="skill-icon">
                                            {skill.iconClass ? (
                                                <i className={skill.iconClass}></i>
                                            ) : (
                                                <img
                                                    src={skill.icon}
                                                    alt={`${skill.name} icon`}
                                                    loading="lazy"
                                                    onError={(e) => {
                                                        e.currentTarget.style.display = 'none';
                                                    }}
                                                />
                                            )}
                                        </div>

                                        <span>{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;

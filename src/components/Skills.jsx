
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Skills.css';

const Skills = () => {
    const [sectionRef, isSectionVisible] = useScrollReveal({ threshold: 0.1 });

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
            ],
        },
        {
            title: 'Backend',
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
                    name: 'REST API',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg',
                },
                {
                    name: 'Flask',
                    icon: 'https://cdn.simpleicons.org/flask/000000',

                },
            ],
        },
        {
            title: 'Programming',
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
                {
                    name: 'OOP',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
                },
            ],
        },
        {
            title: 'Database',
            icon: 'bx bx-data',
            skills: [
                {
                    name: 'SQL',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
                },
                {
                    name: 'SQL Server',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg',
                },
                {
                    name: 'Entity Framework Core',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg',
                },
            ],
        },
        {
            title: 'Tools',
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
                    name: 'Postman',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg',
                },
                {
                    name: 'Docker',
                    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
                },
            ],
        },
        {
            title: 'Networking',
            icon: 'bx bx-network-chart',
            skills: [
                {
                    name: 'Networking',
                    icon: 'https://api.iconify.design/mdi:lan.svg',
                },
                {
                    name: 'VLAN',
                    icon: 'https://api.iconify.design/mdi:lan-connect.svg',
                },
                {
                    name: 'OSPF',
                    icon: 'https://api.iconify.design/mdi:transit-connection-variant.svg',
                },
               {
                    name: 'Wireshark',
                    icon: 'https://api.iconify.design/mdi:shark.svg',
                },
                {
                    name: 'FortiGate',
                    icon: 'https://api.iconify.design/mdi:shield-check.svg',
                },
                {
                    name: 'Packet Tracer',
                    icon: 'https://api.iconify.design/mdi:router-network.svg',
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
                        <div className="skill-category" key={group.title}>
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
                                            <img
                                                src={skill.icon}
                                                alt={`${skill.name} icon`}
                                                loading="lazy"
                                            />
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
